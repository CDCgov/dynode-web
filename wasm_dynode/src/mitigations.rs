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
    pub ave_i: f64,
    pub ave_p: f64,
}

#[derive(Tsify, Debug, Clone, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct CommunityMitigationParams {
    pub enabled: bool,
    pub editable: bool,
    pub start: f64,
    pub duration: f64,
}

macro_rules! mitigation_options {
    ( $( ($field:ident, $type:ty) ),* $(,)? ) => {
        #[derive(Debug, Clone, serde::Serialize, serde::Deserialize, tsify::Tsify)]
        #[tsify(into_wasm_abi, from_wasm_abi)]
        pub struct MitigationParams {
            $(
                pub $field: $type,
            )*
        }

        $(impl Mitigation for $type {
            fn get_enabled(&self) -> bool {
                self.enabled
            }
            fn get_editable(&self) -> bool {
                self.editable
            }
            fn set_enabled(&mut self, enabled: bool) {
                self.enabled = enabled;
            }
            fn set_editable(&mut self, editable: bool) {
                self.editable = editable;
            }
        })*

        impl MitigationParams {
            pub fn iter(&self) -> impl Iterator<Item = &dyn Mitigation> {
                vec![
                    $(
                        &self.$field as &dyn Mitigation,
                    )*
                ].into_iter()
            }
            pub fn iter_mut(&mut self) -> impl Iterator<Item = &mut dyn Mitigation> {
                vec![
                    $(
                        &mut self.$field as &mut dyn Mitigation,
                    )*
                ].into_iter()
            }
        }

        impl<'a> IntoIterator for &'a MitigationParams {
            type Item = &'a dyn Mitigation;
            type IntoIter = std::vec::IntoIter<Self::Item>;

            fn into_iter(self) -> Self::IntoIter {
                let vec: Vec<&'a dyn Mitigation> = vec![
                    $(
                        &self.$field as &dyn Mitigation,
                    )*
                ];
                vec.into_iter()
            }
        }

        impl IntoIterator for MitigationParams {
            type Item = Box<dyn Mitigation>;
            type IntoIter = std::vec::IntoIter<Self::Item>;

            fn into_iter(self) -> Self::IntoIter {
                let vec: Vec<Box<dyn Mitigation>> = vec![
                    $(
                        Box::new(self.$field) as Box<dyn Mitigation>,
                    )*
                ];
                vec.into_iter()
            }
        }

    };
}

mitigation_options!(
    (vaccine, VaccineParams),
    (antivirals, AntiviralsParams),
    (community, CommunityMitigationParams)
);

impl Default for MitigationParams {
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
                editable: false,
                ave_i: 0.0,
                ave_p: 0.0,
            },
            community: CommunityMitigationParams {
                enabled: false,
                editable: false,
                start: 0.0,
                duration: 0.0,
            },
        }
    }
}
