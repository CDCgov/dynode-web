use crate::{DynodeModel, ModelOutput, Parameters};
use nalgebra::{Const, Matrix, MatrixView, SVector, Storage, StorageMut};
use ode_solvers::{Dopri5, System};
use paste::paste;

pub struct AVE<const N: usize> {
    pub pop_eff_i: SVector<f64, N>,
    pub pop_eff_p_hosp: SVector<f64, N>,
    pub pop_eff_p_death: SVector<f64, N>,
}

impl<const N: usize> AVE<N> {
    fn new(params: &Parameters<N>) -> Self {
        let av_params = &params.mitigations.antivirals;

        // population-level effectiveness against transmission
        let pop_eff_i = if av_params.enabled {
            params.fraction_symptomatic
                * av_params.fraction_seek_care
                * av_params.fraction_diagnosed_prescribed_outpatient
                * av_params.fraction_adhere
                * av_params.ave_i
        } else {
            SVector::zeros()
        };

        // population-level effectiveness against hospitalization given infection
        let pop_eff_p_hosp = if av_params.enabled {
            params.fraction_symptomatic
                * av_params.fraction_seek_care
                * av_params.fraction_diagnosed_prescribed_outpatient
                * av_params.fraction_adhere
                * av_params.ave_p
        } else {
            SVector::zeros()
        };

        // population-level effectiveness against death given infection
        let pop_eff_p_death = if av_params.enabled {
            params.fraction_hospitalized
                * av_params.fraction_diagnosed_prescribed_inpatient
                * av_params.ave_p
        } else {
            SVector::zeros()
        };

        Self {
            pop_eff_i,
            pop_eff_p_hosp,
            pop_eff_p_death,
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

make_state!(s, e, i, r, sv, ev, iv, rv, pre_h, h_cum, pre_d, d_cum);

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

impl<const N: usize> DynodeModel for SEIRModel<N>
where
    [(); 12 * N]: Sized,
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
            self.parameters
                .contact_matrix
                .component_mul(&community_params.contact_multiplier)
                / self.contact_matrix_normalization
        } else {
            self.parameters.contact_matrix / self.contact_matrix_normalization
        };

        // Transmission
        let beta = self.parameters.r0 / self.parameters.infectious_period;
        let i_effective = i.component_mul(&self.ave.pop_eff_i.map(|x| 1.0 - x))
            + iv.component_mul(
                &self
                    .ave
                    .pop_eff_i
                    .map(|x| (1.0 - ve_i) * (1.0 - (1.0 - ve_p) * x)),
            );

        let infection_rate = (beta / self.parameters.population)
            * (contact_matrix * i_effective).component_div(&self.parameters.population_fractions);

        let ds_to_e = s.component_mul(&infection_rate);
        let de_to_i = e / self.parameters.latent_period;
        let di_to_r = i / self.parameters.infectious_period;

        let dsv_to_ev = sv.component_mul(&((1.0 - ve_s) * infection_rate));
        let dev_to_iv = ev / self.parameters.latent_period;
        let div_to_rv = iv / self.parameters.infectious_period;

        // Vaccine
        let administration_rate = if self.parameters.mitigations.vaccine.enabled {
            if x < self.parameters.mitigations.vaccine.start {
                0.0
            } else if (x - self.parameters.mitigations.vaccine.start)
                * self.parameters.mitigations.vaccine.administration_rate
                < self.parameters.mitigations.vaccine.doses_available
            {
                self.parameters.mitigations.vaccine.administration_rate
            } else {
                0.0
            }
        } else {
            0.0
        };

        let ds_to_sv = s
            .component_div(&(s + e + i + r))
            .component_mul(&self.parameters.population_fractions)
            * administration_rate;

        // Hospitalizations
        let dto_pre_h = (de_to_i + dev_to_iv * (1.0 - ve_p))
            .component_mul(&self.parameters.fraction_hospitalized)
            .component_mul(&self.ave.pop_eff_p_hosp.map(|x| 1.0 - x));
        let dpre_h_to_h_cum = pre_h / self.parameters.hospitalization_delay;

        // Deaths
        let dto_pre_d = (de_to_i + (1.0 - ve_p) * dev_to_iv)
            .component_mul(
                &(SVector::from_element(1.0)
                    - self.ave.p_outpatient_effective
                    - self.ave.p_inpatient_effective),
            )
            .component_mul(&self.parameters.fraction_dead);
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
    use nalgebra::{DVector, Matrix1, Vector1, matrix};

    use super::SEIRModel;
    use crate::{
        AntiviralsParams, DynodeModel, MitigationParams, OutputType, Parameters,
        model::get_dominant_eigendata,
    };

    #[test]
    fn final_size_relation() {
        let model = SEIRModel::new(Parameters {
            population: 1.0,
            population_fractions: Vector1::new(1.0),
            population_fraction_labels: Vector1::new("All".to_string()),
            contact_matrix: Matrix1::new(1.0),
            initial_infections: 1e-8,
            r0: 2.0,
            latent_period: 1.0,
            infectious_period: 3.0,
            mitigations: MitigationParams::default(),
            fraction_symptomatic: Vector1::new(0.5),
            fraction_hospitalized: Vector1::new(0.0),
            hospitalization_delay: 1.0,
            fraction_dead: Vector1::new(0.0),
            death_delay: 1.0,
        });
        let output = model.integrate(300);

        let total_incidence: f64 = output
            .get_output(&OutputType::InfectionIncidence)
            .iter()
            .map(|x| x.grouped_values.iter().sum::<f64>())
            .sum();
        let attack_rate = total_incidence / model.parameters.population;

        let total_symptomatic: f64 = output
            .get_output(&OutputType::SymptomaticIncidence)
            .iter()
            .map(|x| x.grouped_values.iter().sum::<f64>())
            .sum();
        assert!((total_symptomatic - 0.5 * total_incidence).abs() < 1e-6);

        // Check final size relation
        assert!((0.7968216 - attack_rate).abs() < 1e-5);
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

    #[test]
    fn test_vaccine() {
        let mut parameters = Parameters::default();
        parameters.mitigations.vaccine.enabled = true;
        let model = SEIRModel::new(parameters);
        let output = model.integrate(200);

        let total_incidence: f64 = output
            .get_output(&OutputType::InfectionIncidence)
            .iter()
            .map(|x| x.grouped_values.iter().sum::<f64>())
            .sum();
        let attack_rate = total_incidence / model.parameters.population;

        println!("{}", attack_rate)
    }

    #[test]
    fn test_antiviral() {
        let baseline_params = Parameters::default();
        let mut mitigated_params = Parameters::default();
        mitigated_params.mitigations.antivirals = AntiviralsParams {
            enabled: true,
            editable: true,
            ave_i: 0.5,
            ave_p: 0.0,
            fraction_adhere: 0.5,
            fraction_diagnosed_prescribed_inpatient: 0.5,
            fraction_diagnosed_prescribed_outpatient: 0.5,
            fraction_seek_care: 0.5,
        };

        let (attack_rate, mitigated_attack_rate) = {
            let population = baseline_params.population;
            let f = |params: Parameters<2>| {
                let output = SEIRModel::new(params).integrate(200);
                let total_incidence: f64 = output
                    .get_output(&OutputType::InfectionIncidence)
                    .iter()
                    .map(|x| x.grouped_values.iter().sum::<f64>())
                    .sum();
                total_incidence / population
            };
            (f(baseline_params), f(mitigated_params))
        };

        println!("{} {}", attack_rate, mitigated_attack_rate);
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
