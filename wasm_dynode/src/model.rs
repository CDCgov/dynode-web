use crate::{DynodeModel, ModelOutput, Parameters};
use nalgebra::{Const, Matrix, MatrixView, SMatrix, SVector, Storage, StorageMut};
use ode_solvers::{Dopri5, System};
use paste::paste;

pub struct AVE<const N: usize> {
    pub rr_i: SVector<f64, N>,
    pub rr_p_hosp: SVector<f64, N>,
    pub rr_p_death: SVector<f64, N>,
}

impl<const N: usize> AVE<N> {
    fn new(params: &Parameters<N>) -> Self {
        let av_params = &params.mitigations.antivirals;
        let ones = SVector::<f64, N>::from_element(1.0);

        // risk ratio (proportional reduction) against transmission
        let rr_i = if av_params.enabled {
            ones - params.fraction_symptomatic
                * av_params.fraction_seek_care
                * av_params.fraction_diagnosed_prescribed_outpatient
                * av_params.fraction_adhere
                * av_params.ave_i
        } else {
            ones
        };

        // risk ratio against hospitalization given infection
        let rr_p_hosp = if av_params.enabled {
            ones - params.fraction_symptomatic
                * av_params.fraction_seek_care
                * av_params.fraction_diagnosed_prescribed_outpatient
                * av_params.fraction_adhere
                * av_params.ave_p
        } else {
            ones
        };

        // risk ratio against death given infection
        let rr_p_death = if av_params.enabled {
            (1.0 - av_params.fraction_diagnosed_prescribed_inpatient * av_params.ave_p) * rr_p_hosp
        } else {
            ones
        };

        Self {
            rr_i,
            rr_p_hosp,
            rr_p_death,
        }
    }
}

pub struct SEIRModel<const N: usize> {
    pub(crate) parameters: Parameters<N>,
    contact_matrix_normalization: f64,
    ave: AVE<N>,
}

macro_rules! make_state {
    ($( $x:ident),*) => {
        type State<const N: usize> = SVector<f64, { ${count($x)} * N }>;

        trait StateWrapper<const N: usize, S: Storage<f64, Const<{ ${count($x)} * N }>> + 'static>
        where Self: 'static,
        {
            paste! {
            $(
            #[allow(dead_code)]
            fn [<get_  $x>](&self) -> MatrixView<'_, f64, Const<N>, Const<1>, S::RStride, S::CStride>;
            )*
            }
        }

        impl<const N: usize, S: Storage<f64, Const<{ ${count($x)} * N }>> + 'static> StateWrapper<N, S>
            for Matrix<f64, Const<{ ${count($x)} * N }>, Const<1>, S>
        {
            paste! {
            $(
                fn [<get_  $x>](&self) -> MatrixView<'_, f64, Const<N>, Const<1>, S::RStride, S::CStride> {
                    self.fixed_view::<N, 1>(${index()} * N, 0)
                }
            )*
        }

        }

        trait StateWrapperMut<const N: usize>
        where Self: 'static,
        {
            paste! {
            $(
            fn [<set_  $x>]<S: Storage<f64, Const<N>>>(
                &mut self,
                value: &Matrix<f64, Const<N>, Const<1>, S>,
            );
            )*
            }
        }

        impl<const N: usize, S: StorageMut<f64, Const<{ ${count($x)} * N }>> + 'static> StateWrapperMut<N>
        for Matrix<f64, Const<{ ${count($x)} * N }>, Const<1>, S>
        {
            paste! {
            $(
                fn [<set_  $x>]<S2: Storage<f64, Const<N>>>(
                    &mut self,
                    value: &Matrix<f64, Const<N>, Const<1>, S2>,
                ) {
                    self.fixed_view_mut::<N, 1>(${index()} * N, 0).set_column(0, value);
                }
            )*
        }
        }
    }
}

make_state!(
    s, e, i, r, sv, ev, iv, rv, y_cum, pre_h, h_cum, pre_d, d_cum
);

impl<const N: usize> SEIRModel<N> {
    pub fn new(parameters: Parameters<N>) -> Self {
        let contact_matrix = parameters.contact_matrix;
        let (eigenvalue, _) = get_dominant_eigendata(&contact_matrix);
        let ave = AVE::new(&parameters);
        SEIRModel {
            parameters,
            contact_matrix_normalization: eigenvalue,
            ave,
        }
    }
}

/// Probability of at least 1 success among N trials each with probability p
pub fn p_detect1(n: f64, p: f64) -> f64 {
    1.0 - (1.0 - p).powf(n)
}

impl<const N: usize> DynodeModel for SEIRModel<N>
where
    [(); 13 * N]: Sized,
{
    fn integrate(&self, days: usize) -> ModelOutput {
        let population_fractions = self.parameters.population_fractions;
        let mut initial_state: State<N> = SVector::zeros();
        initial_state.set_s(
            &(population_fractions
                * (self.parameters.population - self.parameters.initial_infections)),
        );
        initial_state.set_i(&(population_fractions * self.parameters.initial_infections));

        let mut stepper = Dopri5::new(self, 0.0, days as f64, 1.0, initial_state, 1e-6, 1e-6);
        let _res = stepper.integrate();

        let mut output = ModelOutput::new();

        let mut first_loop = true;
        let mut prev_i_plus_r = SVector::zeros();
        let mut prev_iv_plus_rv = SVector::zeros();
        let mut prev_h_cum = SVector::zeros();
        let mut prev_d_cum = SVector::zeros();

        for (time, state) in stepper.x_out().iter().zip(stepper.y_out().iter()) {
            let i_plus_r = state.get_i() + state.get_r();
            let iv_plus_rv = state.get_iv() + state.get_rv();
            if first_loop {
                prev_i_plus_r = i_plus_r;
                prev_iv_plus_rv = iv_plus_rv;
                prev_h_cum = state.get_h_cum().into();
                prev_d_cum = state.get_d_cum().into();
                first_loop = false;
            } else {
                let new_infections_unvac = i_plus_r - prev_i_plus_r;
                let new_infections_vac = iv_plus_rv - prev_iv_plus_rv;
                let new_infections = new_infections_unvac + new_infections_vac;
                let new_symptomatic = (new_infections_unvac
                    + (1.0 - self.parameters.mitigations.vaccine.ve_p) * new_infections_vac)
                    .component_mul(&self.parameters.fraction_symptomatic);
                let new_hospitalizations = state.get_h_cum() - prev_h_cum;
                let new_deaths = state.get_d_cum() - prev_d_cum;
                output.add_infection_incidence(*time, new_infections.data.as_slice().into());
                output.add_symptomatic_incidence(*time, new_symptomatic.data.as_slice().into());
                output.add_hospital_incidence(*time, new_hospitalizations.data.as_slice().into());
                output.add_death_incidence(*time, new_deaths.data.as_slice().into());
                output.add_p_detect(
                    *time,
                    p_detect1(
                        state.get_y_cum().sum() * self.parameters.p_test_sympto,
                        self.parameters.test_sensitivity * self.parameters.p_test_forward,
                    ),
                );
                prev_i_plus_r = i_plus_r;
                prev_iv_plus_rv = iv_plus_rv;
                prev_h_cum = state.get_h_cum().into();
                prev_d_cum = state.get_d_cum().into();
            }
        }
        output
    }
}

impl<const N: usize> System<f64, State<N>> for &SEIRModel<N> {
    fn system(&self, x: f64, y: &State<N>, dy: &mut State<N>) {
        let s = y.get_s();
        let e = y.get_e();
        let i = y.get_i();
        let r = y.get_r();
        let sv = y.get_sv();
        let ev = y.get_ev();
        let iv = y.get_iv();
        let pre_h = y.get_pre_h();
        let pre_d = y.get_pre_d();

        let params = &self.parameters;
        let community_params = &params.mitigations.community;

        let ve_s = self.parameters.mitigations.vaccine.ve_s;
        let ve_i = self.parameters.mitigations.vaccine.ve_i;
        let ve_p = self.parameters.mitigations.vaccine.ve_p;

        // Community mitigation
        let contact_matrix = if community_params.enabled
            && x >= community_params.start
            && x < (community_params.start + community_params.duration)
        {
            self.parameters.contact_matrix.component_mul(
                &(SMatrix::<f64, N, N>::from_element(1.0) - community_params.effectiveness),
            ) / self.contact_matrix_normalization
        } else {
            self.parameters.contact_matrix / self.contact_matrix_normalization
        };

        // TTIQ adjusts the effective infectious period
        let eff_infectious_period = self.parameters.infectious_period
            * (if params.mitigations.ttiq.enabled {
                (1.0 - params.mitigations.ttiq.p_id_infectious
                    * params.mitigations.ttiq.p_infectious_isolates
                    * (1.0 - params.mitigations.ttiq.isolation_reduction))
                    * (1.0
                        - params.mitigations.ttiq.p_contact_trace
                            * params.mitigations.ttiq.p_traced_quarantines)
            } else {
                1.0
            });

        // Transmission
        let beta = self.parameters.r0 / self.parameters.infectious_period;
        let ones = SVector::<f64, N>::from_element(1.0);
        let i_effective = i.component_mul(&self.ave.rr_i)
            + (iv * (1.0 - ve_i)).component_mul(&(ones + (1.0 - ve_p) * (ones - self.ave.rr_i)));

        let infection_rate = (beta / self.parameters.population)
            * (contact_matrix * i_effective).component_div(&self.parameters.population_fractions);

        let ds_to_e = s.component_mul(&infection_rate);
        let de_to_i = e / self.parameters.latent_period;
        let di_to_r = i / eff_infectious_period;

        let dsv_to_ev = sv.component_mul(&((1.0 - ve_s) * infection_rate));
        let dev_to_iv = ev / self.parameters.latent_period;
        let div_to_rv = iv / eff_infectious_period;

        // Vaccine
        let administration_rate = if self.parameters.mitigations.vaccine.enabled {
            if x < self.parameters.mitigations.vaccine.start {
                0.0
            } else if (x - self.parameters.mitigations.vaccine.start)
                * self.parameters.mitigations.vaccine.administration_rate
                <= self.parameters.mitigations.vaccine.doses_available
            {
                self.parameters.mitigations.vaccine.administration_rate
            } else {
                0.0
            }
        } else {
            0.0
        };
        // 0.5828430256204575
        let ds_to_sv = s
            .component_div(&(s + e + i + r))
            .component_mul(&self.parameters.population_fractions)
            * administration_rate;

        // Symptomatic
        // at risk of progression to symptoms
        let dat_risk = de_to_i + dev_to_iv * (1.0 - ve_p);
        // progression to symptoms
        let dsymp = dat_risk.component_mul(&self.parameters.fraction_symptomatic);

        // Hospitalizations
        let dto_pre_h = dat_risk
            .component_mul(&self.parameters.fraction_hospitalized)
            .component_mul(&self.ave.rr_p_hosp);
        let dpre_h_to_h_cum = pre_h / self.parameters.hospitalization_delay;

        // Deaths
        let dto_pre_d = dat_risk
            .component_mul(&self.parameters.fraction_dead)
            .component_mul(&self.ave.rr_p_death);

        let dpre_d_to_d_cum = pre_d / self.parameters.death_delay;

        // Collect derivatives
        dy.set_s(&-(ds_to_e + ds_to_sv));
        dy.set_e(&(ds_to_e - de_to_i));
        dy.set_i(&(de_to_i - di_to_r));
        dy.set_r(&di_to_r);
        dy.set_sv(&(-dsv_to_ev + ds_to_sv));
        dy.set_ev(&(dsv_to_ev - dev_to_iv));
        dy.set_iv(&(dev_to_iv - div_to_rv));
        dy.set_rv(&div_to_rv);
        dy.set_y_cum(&dsymp);
        dy.set_pre_h(&(dto_pre_h - dpre_h_to_h_cum));
        dy.set_h_cum(&dpre_h_to_h_cum);
        dy.set_pre_d(&(dto_pre_d - dpre_d_to_d_cum));
        dy.set_d_cum(&dpre_d_to_d_cum);
    }
}

// Compute dominant eigenvalue and eigenvector using power algorithm
fn get_dominant_eigendata<const N: usize, S: Storage<f64, Const<N>, Const<N>>>(
    matrix: &Matrix<f64, Const<N>, Const<N>, S>,
) -> (f64, SVector<f64, N>) {
    let mut x = SVector::<f64, N>::from_element(1.0 / N as f64);
    let mut norm = 1.0 as f64;
    loop {
        x = matrix * x;
        let new_norm = x.lp_norm(1);
        x = x / new_norm;
        if (new_norm - norm).abs() < f64::EPSILON {
            return (norm, x);
        } else {
            norm = new_norm;
        }
    }
}

#[cfg(test)]
mod test {
    use float_eq::assert_float_eq;
    use nalgebra::{DVector, Matrix1, Vector1, matrix};

    use super::SEIRModel;
    use crate::{
        AntiviralsParams, DynodeModel, MitigationParams, ModelOutput, OutputType, Parameters,
        TTIQParams, VaccineParams, model::get_dominant_eigendata,
    };

    #[derive(Debug)]
    #[allow(dead_code)]
    struct TestResults<const N: usize> {
        pub attack_rate: f64,
        pub symptomatic_rate: f64,
        pub hospitalization_rate: f64,
        pub death_rate: f64,
    }

    impl<const N: usize> TestResults<N> {
        pub fn new(params: &Parameters<N>, output: &ModelOutput) -> Self {
            let total_incidence: f64 = output
                .get_output(&OutputType::InfectionIncidence)
                .iter()
                .map(|x| x.grouped_values.iter().sum::<f64>())
                .sum();

            let symptomatic_incidence: f64 = output
                .get_output(&OutputType::SymptomaticIncidence)
                .iter()
                .map(|x| x.grouped_values.iter().sum::<f64>())
                .sum();

            let hospitalization_incidence: f64 = output
                .get_output(&OutputType::HospitalIncidence)
                .iter()
                .map(|x| x.grouped_values.iter().sum::<f64>())
                .sum();

            let death_incidence: f64 = output
                .get_output(&OutputType::DeathIncidence)
                .iter()
                .map(|x| x.grouped_values.iter().sum::<f64>())
                .sum();

            TestResults {
                attack_rate: total_incidence / params.population,
                symptomatic_rate: symptomatic_incidence / params.population,
                hospitalization_rate: hospitalization_incidence / params.population,
                death_rate: death_incidence / params.population,
            }
        }
    }

    // population <- 3.3e8
    // SEIRTVModel(
    //     simulationLength = 300,
    //     population = population,
    //     R0 = 2.0,
    //     latentPeriod = 1.0,
    //     infectiousPeriod = 3.0,
    //     seedInfections = 1000.0 / population,
    //     tolerance = 1e-6,
    // )
    #[test]
    fn test_seir_unmitigated() {
        let model = SEIRModel::new(Parameters {
            population: 330_000_000.0,
            population_fractions: Vector1::new(1.0),
            population_fraction_labels: Vector1::new("All".to_string()),
            contact_matrix: Matrix1::new(1.0),
            initial_infections: 1000.0,
            r0: 2.0,
            latent_period: 1.0,
            infectious_period: 3.0,
            mitigations: MitigationParams::default(),
            fraction_symptomatic: Vector1::new(0.5),
            fraction_hospitalized: Vector1::new(0.0),
            hospitalization_delay: 1.0,
            fraction_dead: Vector1::new(0.0),
            death_delay: 1.0,
            p_test_sympto: 0.0,
            test_sensitivity: 0.90,
            p_test_forward: 0.90,
        });
        let results = TestResults::new(&model.parameters, &model.integrate(300));
        assert_float_eq!(results.attack_rate, 0.796814, abs <= 1e-5);
    }

    // population <- 3.3e8
    // SEIRTVModel(
    //     simulationLength = 300,
    //     population = population,
    //     R0 = 2.0,
    //     latentPeriod = 1.0,
    //     infectiousPeriod = 3.0,
    //     seedInfections = 1000.0 / population,
    //     tolerance = 1e-8,
    //     VEs = 0.5,
    //     VEi = 0.5,
    //     VEp = 0.5,
    //     vaccineAdministrationRatePerDay = 1e6,
    //     vaccineAvailabilityByDay = c(2e7),
    // )
    #[test]
    fn test_seir_vaccine() {
        let vaccine_params = VaccineParams {
            enabled: true,
            editable: true,
            doses: 1,
            start: 0.0,
            administration_rate: 1_000_000.0,
            doses_available: 20_000_000.0,
            ve_s: 0.5,
            ve_i: 0.5,
            ve_p: 0.5,
        };

        let ttiq_params = TTIQParams {
            enabled: false,
            editable: true,
            p_id_infectious: 0.15,
            p_infectious_isolates: 0.75,
            isolation_reduction: 0.50,
            p_contact_trace: 0.25,
            p_traced_quarantines: 0.75,
        };

        let model = SEIRModel::new(Parameters {
            population: 330_000_000.0,
            population_fractions: Vector1::new(1.0),
            population_fraction_labels: Vector1::new("All".to_string()),
            contact_matrix: Matrix1::new(1.0),
            initial_infections: 1000.0,
            r0: 2.0,
            latent_period: 1.0,
            infectious_period: 3.0,
            mitigations: MitigationParams {
                vaccine: vaccine_params,
                antivirals: MitigationParams::<1>::default().antivirals,
                community: MitigationParams::<1>::default().community,
                ttiq: ttiq_params,
            },
            fraction_symptomatic: Vector1::new(0.5),
            fraction_hospitalized: Vector1::new(0.0),
            hospitalization_delay: 1.0,
            fraction_dead: Vector1::new(0.0),
            death_delay: 1.0,
            p_test_sympto: 0.0,
            test_sensitivity: 0.90,
            p_test_forward: 0.90,
        });
        let results = TestResults::new(&model.parameters, &model.integrate(300));
        let expected = 0.7583813;
        assert_float_eq!(results.attack_rate, expected, abs <= 1e-5);
    }

    #[test]
    fn final_size_relation_with_groups() {
        let mut params = Parameters::default();
        params.population = 1.0;
        params.initial_infections = 1e-8;
        params.r0 = 2.0;
        params.latent_period = 1.0;
        params.infectious_period = 3.0;

        let model = SEIRModel::new(params);
        let output = model.integrate(300);

        let total_incidence: f64 = output
            .get_output(&OutputType::InfectionIncidence)
            .iter()
            .map(|x| x.grouped_values.iter().sum::<f64>())
            .sum();
        let attack_rate = total_incidence / model.parameters.population;

        let incidence_by_group = output
            .get_output(&OutputType::InfectionIncidence)
            .iter()
            .map(|x| DVector::from_vec(x.grouped_values.clone()))
            .reduce(|acc, elem| acc + elem)
            .unwrap();
        let attack_rate_by_group = incidence_by_group
            .component_div(&model.parameters.population_fractions)
            / model.parameters.population;

        let hospitalizations_by_group = output
            .get_output(&OutputType::HospitalIncidence)
            .iter()
            .map(|x| DVector::from_vec(x.grouped_values.clone()))
            .reduce(|acc, elem| acc + elem)
            .unwrap();
        let ihr = hospitalizations_by_group.component_div(&incidence_by_group);

        let deaths_by_group = output
            .get_output(&OutputType::DeathIncidence)
            .iter()
            .map(|x| DVector::from_vec(x.grouped_values.clone()))
            .reduce(|acc, elem| acc + elem)
            .unwrap();
        let ifr = deaths_by_group.component_div(&incidence_by_group);

        // Check final size relation
        assert!((0.6755054 - attack_rate).abs() < 1e-5);

        // Check final size relation by group
        assert!((0.8658730 - attack_rate_by_group[0]).abs() < 1e-5);
        assert!((0.6120495 - attack_rate_by_group[1]).abs() < 1e-5);

        // Check hospitalizations
        assert!((model.parameters.fraction_hospitalized[0] - ihr[0]).abs() < 1e-5);
        assert!((model.parameters.fraction_hospitalized[1] - ihr[1]).abs() < 1e-5);

        // Check deaths
        assert!((model.parameters.fraction_dead[0] - ifr[0]).abs() < 1e-5);
        assert!((model.parameters.fraction_dead[1] - ifr[1]).abs() < 1e-5);
    }

    // population <- 3.3e8
    // model <- SEIRTVModel(
    //     simulationLength = 300,
    //     population = population,
    //     R0 = 2.0,
    //     latentPeriod = 1.0,
    //     infectiousPeriod = 3.0,
    //     seedInfections = 1000.0 / population,
    //     tolerance = 1e-6,
    //     fractionSymptomatic = 0.5,
    //     fractionSeekCare = 0.5,
    //     fractionDiagnosedAndPrescribedOutpatient = 0.5,
    //     fractionDiagnosedAndPrescribedInpatient = 0.5,
    //     fractionAdhere = 0.5,
    //     fractionAdmitted = 0.1,
    //     AVEi = 0.5,
    //     AVEp = 0.5,
    // )
    #[test]
    fn test_antiviral() {
        let mut params = Parameters {
            population: 330_000_000.0,
            population_fractions: Vector1::new(1.0),
            population_fraction_labels: Vector1::new("All".to_string()),
            contact_matrix: Matrix1::new(1.0),
            initial_infections: 1_000.0,
            r0: 2.0,
            latent_period: 1.0,
            infectious_period: 3.0,
            mitigations: MitigationParams::default(),
            fraction_symptomatic: Vector1::new(0.5),
            fraction_hospitalized: Vector1::new(0.1),
            hospitalization_delay: 1.0,
            fraction_dead: Vector1::new(0.01),
            death_delay: 1.0,
            p_test_sympto: 0.0,
            test_sensitivity: 0.90,
            p_test_forward: 0.90,
        };
        params.mitigations.antivirals = AntiviralsParams {
            enabled: true,
            editable: true,
            ave_i: 0.5,
            ave_p: 0.0,
            fraction_adhere: 0.5,
            fraction_diagnosed_prescribed_inpatient: 0.5,
            fraction_diagnosed_prescribed_outpatient: 0.5,
            fraction_seek_care: 0.5,
        };

        let model = SEIRModel::new(params);
        let results = TestResults::new(&model.parameters, &model.integrate(300));
        assert_float_eq!(results.attack_rate, 0.77889514, abs <= 1e-5);
    }

    #[test]
    fn test_eigen() {
        let x = matrix![1.0, 3.0; 2.0, 4.0];
        let (eval, evec) = get_dominant_eigendata(&x);
        assert!((eval - 5.3722813).abs() < 1e-6);
        assert!((evec[0] - 0.4069297).abs() < 1e-6);
        assert!((evec[1] - 0.5930703).abs() < 1e-6);
    }
}
