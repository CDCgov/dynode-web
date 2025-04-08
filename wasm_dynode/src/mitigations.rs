use nalgebra::SMatrix;
use serde::{Deserialize, Serialize};
use tsify::Tsify;

pub trait Mitigation {
    // Is the mitigation applied to the model?
    fn get_enabled(&self) -> bool;
    // Is the mitigation editor shown in the UI?
    fn get_editable(&self) -> bool;
    fn set_enabled(&mut self, enabled: bool);
    fn set_editable(&mut self, editable: bool);
}

#[derive(Tsify, Debug, Clone, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct VaccineParams {
    pub enabled: bool,
    pub editable: bool,
    pub doses: usize,
    pub start: f64,
    pub administration_rate: f64,
    pub doses_available: f64,
    pub ve_s: f64,
    pub ve_i: f64,
    pub ve_p: f64,
}

#[derive(Tsify, Debug, Clone, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct AntiviralsParams {
    pub enabled: bool,
    pub editable: bool,
    pub fraction_adhere: f64,
    pub fraction_diagnosed_prescribed_inpatient: f64,
    pub fraction_diagnosed_prescribed_outpatient: f64,
    pub fraction_seek_care: f64,
    pub ave_i: f64,
    pub ave_p: f64,
}

#[derive(Tsify, Debug, Clone, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct CommunityMitigationParamsExport {
    pub enabled: bool,
    pub editable: bool,
    pub start: f64,
    pub duration: f64,
    pub effectiveness: Vec<f64>,
}

#[derive(Debug, Clone)]
pub struct CommunityMitigationParams<const N: usize> {
    pub enabled: bool,
    pub editable: bool,
    pub start: f64,
    pub duration: f64,
    pub effectiveness: SMatrix<f64, N, N>,
}

impl<const N: usize> From<CommunityMitigationParams<N>> for CommunityMitigationParamsExport {
    fn from(value: CommunityMitigationParams<N>) -> Self {
        CommunityMitigationParamsExport {
            enabled: value.enabled,
            editable: value.editable,
            start: value.start,
            duration: value.duration,
            effectiveness: value.effectiveness.data.as_slice().into(),
        }
    }
}

impl<const N: usize> TryFrom<CommunityMitigationParamsExport> for CommunityMitigationParams<N> {
    type Error = &'static str;

    fn try_from(value: CommunityMitigationParamsExport) -> Result<Self, Self::Error> {
        Ok(CommunityMitigationParams {
            enabled: value.enabled,
            editable: value.editable,
            start: value.start,
            duration: value.duration,
            effectiveness: SMatrix::from_iterator(value.effectiveness.into_iter()),
        })
    }
}

#[derive(Debug, Clone, serde::Serialize, serde::Deserialize, tsify::Tsify)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct MitigationParamsExport {
    pub vaccine: VaccineParams,
    pub antivirals: AntiviralsParams,
    pub community: CommunityMitigationParamsExport,
}

#[derive(Debug, Clone)]
pub struct MitigationParams<const N: usize> {
    pub vaccine: VaccineParams,
    pub antivirals: AntiviralsParams,
    pub community: CommunityMitigationParams<N>,
}

impl<const N: usize> Default for MitigationParams<N> {
    fn default() -> Self {
        MitigationParams {
            vaccine: VaccineParams {
                enabled: false,
                editable: true,
                doses: 1,
                start: 0.0,
                administration_rate: 1_500_000.0,
                doses_available: 40_000_000.0,
                ve_s: 0.5,
                ve_i: 0.5,
                ve_p: 0.5,
            },
            antivirals: AntiviralsParams {
                enabled: false,
                editable: true,
                ave_i: 0.5,
                ave_p: 0.5,
                fraction_adhere: 0.8,
                fraction_diagnosed_prescribed_inpatient: 1.0,
                fraction_diagnosed_prescribed_outpatient: 0.7,
                fraction_seek_care: 0.6,
            },
            community: CommunityMitigationParams {
                enabled: false,
                editable: true,
                start: 60.0,
                duration: 20.0,
                effectiveness: SMatrix::from_element(0.25),
            },
        }
    }
}

impl<const N: usize> From<MitigationParams<N>> for MitigationParamsExport {
    fn from(value: MitigationParams<N>) -> Self {
        MitigationParamsExport {
            vaccine: value.vaccine,
            antivirals: value.antivirals,
            community: CommunityMitigationParamsExport::from(value.community),
        }
    }
}

impl<const N: usize> TryFrom<MitigationParamsExport> for MitigationParams<N> {
    type Error = &'static str;

    fn try_from(value: MitigationParamsExport) -> Result<Self, Self::Error> {
        Ok(MitigationParams {
            vaccine: value.vaccine,
            antivirals: value.antivirals,
            community: CommunityMitigationParams::try_from(value.community)?,
        })
    }
}
