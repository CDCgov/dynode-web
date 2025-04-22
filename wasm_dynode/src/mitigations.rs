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

#[derive(Tsify, Debug, Clone, Copy, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct VaccineParams {
    pub enabled: bool,
    pub editable: bool,
    // number of doses that can be given (1 or 2)
    pub doses: usize,
    // start time of vaccine rollout
    pub start: f64,
    // delay between first and second doses
    pub dose2_delay: f64,
    // fraction of vaccinees that get a second dose
    pub p_get_2_doses: f64,
    // maximum vaccine administration rate
    pub administration_rate: f64,
    // total number of vaccine doses available
    pub doses_available: f64,
    pub ramp_up: f64,
    // vaccine effectiveness: first dose
    pub ve_s: f64,
    pub ve_i: f64,
    pub ve_p: f64,
    // vaccine effectiveness: second dose
    pub ve_2s: f64,
    pub ve_2i: f64,
    pub ve_2p: f64,
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
            effectiveness: SMatrix::from_iterator(value.effectiveness),
        })
    }
}

#[derive(Tsify, Debug, Clone, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct TTIQParams {
    pub enabled: bool,
    pub editable: bool,
    // prob. an infectious person will be identified
    pub p_id_infectious: f64,
    // prob. an identified infectious person will isolate
    pub p_infectious_isolates: f64,
    // proportional reduction in infectious period due to isolation
    pub isolation_reduction: f64,
    // prob. contact tracing identifies an exposed person
    pub p_contact_trace: f64,
    // prob. a traced person quarantines
    pub p_traced_quarantines: f64,
}

#[derive(Debug, Clone, serde::Serialize, serde::Deserialize, tsify::Tsify)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct MitigationParamsExport {
    pub vaccine: VaccineParams,
    pub antivirals: AntiviralsParams,
    pub community: CommunityMitigationParamsExport,
    pub ttiq: TTIQParams,
}

#[derive(Debug, Clone)]
pub struct MitigationParams<const N: usize> {
    pub vaccine: VaccineParams,
    pub antivirals: AntiviralsParams,
    pub community: CommunityMitigationParams<N>,
    pub ttiq: TTIQParams,
}

impl<const N: usize> Default for MitigationParams<N> {
    fn default() -> Self {
        MitigationParams {
            vaccine: VaccineParams {
                enabled: false,
                editable: true,
                doses: 1,
                dose2_delay: 30.0,
                start: 0.0,
                p_get_2_doses: 0.9,
                administration_rate: 1_500_000.0,
                doses_available: 40_000_000.0,
                ramp_up: 14.0,
                ve_s: 0.5,
                ve_i: 0.5,
                ve_p: 0.5,
                ve_2s: 0.75,
                ve_2i: 0.75,
                ve_2p: 0.75,
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
            ttiq: TTIQParams {
                enabled: false,
                editable: true,
                p_id_infectious: 0.15,
                p_infectious_isolates: 0.75,
                isolation_reduction: 0.50,
                p_contact_trace: 0.25,
                p_traced_quarantines: 0.75,
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
            ttiq: value.ttiq,
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
            ttiq: value.ttiq,
        })
    }
}
