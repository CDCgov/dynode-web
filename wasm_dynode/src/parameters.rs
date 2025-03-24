use nalgebra::{SMatrix, SVector, matrix, vector};
use serde::{Deserialize, Serialize};
use tsify::Tsify;
use wasm_bindgen::prelude::*;

use crate::MitigationParams;

#[derive(Debug, Clone)]
pub struct Parameters<const N: usize> {
    pub population: f64,
    pub population_fractions: SVector<f64, N>,
    pub population_fraction_labels: SVector<String, N>,
    pub contact_matrix: SMatrix<f64, N, N>,
    pub initial_infections: f64,
    pub r0: f64,
    pub latent_period: f64,
    pub infectious_period: f64,
    pub mitigations: MitigationParams,
}

impl<const N: usize> Parameters<N> {
    pub fn has_mitigations(&self) -> bool {
        self.mitigations.iter().any(|m| m.get_enabled())
    }
    pub fn without_mitigations(&self) -> Self {
        let mut params = self.clone();
        for m in params.mitigations.iter_mut() {
            m.set_enabled(false);
        }
        params
    }
}

impl Default for Parameters<2> {
    fn default() -> Self {
        Parameters {
            population: 330_000_000.0,
            population_fractions: vector![0.25, 0.75],
            population_fraction_labels: vector!["Children".to_string(), "Adults".to_string()],
            contact_matrix: matrix![18.0, 3.0;
                                    9.0, 12.0],
            initial_infections: 1_000.0,
            r0: 1.5,
            latent_period: 1.0,
            infectious_period: 2.5,
            mitigations: MitigationParams::default(),
        }
    }
}

#[derive(Tsify, Debug, Clone, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct ParametersExport {
    pub n: usize,
    pub population: f64,
    pub populaton_fraction_labels: Vec<String>,
    pub population_fractions: Vec<f64>,
    pub contact_matrix: Vec<f64>,
    pub initial_infections: f64,
    pub r0: f64,
    pub latent_period: f64,
    pub infectious_period: f64,
    pub mitigations: MitigationParams,
}

impl<const N: usize> TryFrom<ParametersExport> for Parameters<N> {
    type Error = &'static str;
    fn try_from(params: ParametersExport) -> Result<Self, Self::Error> {
        // Validate
        if params.population_fractions.len() != N {
            return Err("Invalid number of population fractions");
        }
        if params.contact_matrix.len() != N * N {
            return Err("Invalid number of contact matrix elements");
        }

        Ok(Parameters {
            population: params.population,
            population_fractions: SVector::from_iterator(params.population_fractions.into_iter()),
            population_fraction_labels: SVector::from_iterator(
                params.populaton_fraction_labels.into_iter(),
            ),
            contact_matrix: SMatrix::from_iterator(params.contact_matrix.into_iter()),
            initial_infections: params.initial_infections,
            r0: params.r0,
            latent_period: params.latent_period,
            infectious_period: params.infectious_period,
            mitigations: params.mitigations,
        })
    }
}

impl<const N: usize> From<Parameters<N>> for ParametersExport {
    fn from(params: Parameters<N>) -> Self {
        ParametersExport {
            n: N,
            population: params.population,
            population_fractions: params.population_fractions.iter().copied().collect(),
            populaton_fraction_labels: params.population_fraction_labels.iter().cloned().collect(),
            contact_matrix: params.contact_matrix.iter().copied().collect(),
            initial_infections: params.initial_infections,
            r0: params.r0,
            latent_period: params.latent_period,
            infectious_period: params.infectious_period,
            mitigations: params.mitigations,
        }
    }
}

impl Default for ParametersExport {
    fn default() -> Self {
        Parameters::default().into()
    }
}

#[wasm_bindgen]
pub fn get_default_parameters() -> ParametersExport {
    ParametersExport::default()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_has_mitigations() {
        let mut params = Parameters::<2>::default();
        assert!(!params.has_mitigations());

        params.mitigations.vaccine.enabled = true;
        assert!(params.has_mitigations());

        params.mitigations.vaccine.enabled = false;
        params.mitigations.antivirals.enabled = true;
        assert!(params.has_mitigations());

        params.mitigations.antivirals.enabled = false;
        params.mitigations.community.enabled = true;
        assert!(params.has_mitigations());
    }

    #[test]
    fn test_without_mitigations() {
        let mut params = Parameters::<2>::default();
        params.mitigations.vaccine.enabled = true;
        params.mitigations.antivirals.enabled = true;
        params.mitigations.community.enabled = true;

        let params_no_mitigations = params.without_mitigations();
        assert!(!params_no_mitigations.has_mitigations());
    }

    #[test]
    fn test_into_export() {
        let fractions = (vector![0.1, 0.9], vec![0.1, 0.9]);
        let matrix = (matrix![18.0, 3.0; 9.0, 12.0], vec![18.0, 9.0, 3.0, 12.0]);

        let mut params = Parameters::<2>::default();
        params.population_fractions = fractions.0;
        params.contact_matrix = matrix.0;

        let export: ParametersExport = params.clone().into();
        assert_eq!(export.population_fractions, fractions.1);
        assert_eq!(export.contact_matrix, matrix.1);

        let params2: Parameters<2> = export.try_into().unwrap();
        assert_eq!(params2.population_fractions, fractions.0);
        assert_eq!(params2.contact_matrix, matrix.0);
    }
}
