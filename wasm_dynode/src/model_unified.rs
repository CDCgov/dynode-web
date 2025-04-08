use crate::{Parameters, ParametersExport, SEIRModel};
use serde::{Deserialize, Serialize};
use serde_wasm_bindgen::from_value;
use std::{any::Any, collections::HashMap};
use strum::IntoEnumIterator;
use strum_macros::EnumIter;
use tsify::Tsify;
use wasm_bindgen::prelude::*;

#[derive(Tsify, Debug, Clone, Serialize, Deserialize, Hash, PartialEq, Eq, EnumIter)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub enum MitigationType {
    Unmitigated,
    Mitigated,
}

#[derive(Tsify, Debug, Clone, Serialize, Deserialize, Hash, PartialEq, Eq, EnumIter)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub enum OutputType {
    InfectionIncidence,
    SymptomaticIncidence,
    HospitalIncidence,
    DeathIncidence,
}

#[derive(Tsify, Debug, Clone, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct OutputItemGrouped {
    pub(crate) time: f64,
    pub(crate) grouped_values: Vec<f64>,
}

#[derive(Tsify, Debug, Clone, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct OutputItemSingle {
    pub(crate) time: f64,
    pub(crate) value: f64,
}

pub struct ModelOutput {
    output: HashMap<OutputType, Vec<OutputItemGrouped>>,
    p_detect: Vec<OutputItemSingle>,
}

impl ModelOutput {
    pub fn new() -> Self {
        let mut output = HashMap::new();
        OutputType::iter().for_each(|output_type| {
            output.insert(output_type, Vec::new());
        });
        Self {
            output,
            p_detect: Vec::new(),
        }
    }
    pub fn get_output(&self, output_type: &OutputType) -> &Vec<OutputItemGrouped> {
        self.output
            .get(output_type)
            .expect("Unexpected output type")
    }
    fn add_output(&mut self, output_type: &OutputType, time: f64, grouped_values: Vec<f64>) {
        self.output
            .get_mut(output_type)
            .expect("Unexpected output type")
            .push(OutputItemGrouped {
                time,
                grouped_values,
            });
    }
    pub fn add_infection_incidence(&mut self, time: f64, grouped_values: Vec<f64>) {
        self.add_output(&OutputType::InfectionIncidence, time, grouped_values);
    }
    pub fn add_symptomatic_incidence(&mut self, time: f64, grouped_values: Vec<f64>) {
        self.add_output(&OutputType::SymptomaticIncidence, time, grouped_values);
    }
    pub fn add_hospital_incidence(&mut self, time: f64, grouped_values: Vec<f64>) {
        self.add_output(&OutputType::HospitalIncidence, time, grouped_values);
    }
    pub fn add_death_incidence(&mut self, time: f64, grouped_values: Vec<f64>) {
        self.add_output(&OutputType::DeathIncidence, time, grouped_values);
    }
    pub fn add_p_detect(&mut self, time: f64, value: f64) {
        self.p_detect.push(OutputItemSingle { time, value });
    }
}

#[derive(Tsify, Debug, Clone, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct ModelOutputExport {
    output: HashMap<MitigationType, HashMap<OutputType, Vec<OutputItemGrouped>>>,
    p_detect: HashMap<MitigationType, Vec<OutputItemSingle>>,
    mitigation_types: Vec<MitigationType>,
    output_types: Vec<OutputType>,
}

impl ModelOutputExport {
    fn new(runs: Vec<(MitigationType, ModelOutput)>) -> Self {
        let mut output = HashMap::new();
        let mut p_detect = HashMap::new();
        let mut mitigation_types = Vec::new();
        let output_types = OutputType::iter().collect();
        runs.iter().for_each(|(mitigation_type, o)| {
            p_detect.insert(mitigation_type.clone(), o.p_detect.clone());
        });
        runs.iter().for_each(|(mitigation_type, o)| {
            let mut output_map = HashMap::new();
            for (output_type, items) in &o.output {
                output_map.insert(output_type.clone(), items.clone());
            }
            if !mitigation_types.contains(mitigation_type) {
                mitigation_types.push(mitigation_type.clone());
            }
            output.insert(mitigation_type.clone(), output_map);
        });
        Self {
            output,
            p_detect,
            mitigation_types,
            output_types,
        }
    }
}

pub trait DynodeModel: Any {
    fn integrate(&self, days: usize) -> ModelOutput;
}

fn select_model(parameters: Parameters<2>) -> Box<dyn DynodeModel> {
    // TODO maybe we'll have other models to choose from
    Box::new(SEIRModel::new(parameters))
}

#[wasm_bindgen]
pub struct SEIRModelUnified {
    parameters: Parameters<2>,
}

#[wasm_bindgen]
impl SEIRModelUnified {
    #[wasm_bindgen(constructor)]
    pub fn new(js_params: JsValue) -> Self {
        let parameters: ParametersExport =
            from_value(js_params).expect("Failed to parse parameters");
        SEIRModelUnified {
            parameters: parameters.try_into().unwrap(),
        }
    }

    #[wasm_bindgen]
    pub fn run(&self, days: usize) -> ModelOutputExport {
        let base_label: MitigationType;
        let mut runs: Vec<(MitigationType, ModelOutput)> = Vec::new();

        // Run an unmitigated version if necessary
        if self.parameters.has_mitigations() {
            runs.push((
                MitigationType::Unmitigated,
                select_model(self.parameters.without_mitigations()).integrate(days),
            ));
            base_label = MitigationType::Mitigated;
        } else {
            base_label = MitigationType::Unmitigated;
        }

        // Run the base version
        runs.push((
            base_label,
            select_model(self.parameters.clone()).integrate(days),
        ));

        ModelOutputExport::new(runs)
    }
}

#[cfg(test)]
mod tests {
    use std::any::TypeId;

    use super::*;

    #[test]
    fn test_select_model() {
        let mut parameters = Parameters::default();
        parameters.mitigations.vaccine.enabled = true;
        let model = select_model(parameters.clone());
        assert_eq!(model.as_ref().type_id(), TypeId::of::<SEIRModel<2>>());
    }

    #[test]
    fn test_without_mitigations() {
        let mut parameters = Parameters::default();
        parameters.mitigations.vaccine.enabled = false;
        let model = SEIRModelUnified { parameters };
        let run = model.run(200);
        assert!(!run.output.contains_key(&MitigationType::Mitigated));
        assert!(run.output.contains_key(&MitigationType::Unmitigated));
        assert_eq!(run.mitigation_types.len(), 1);
    }

    #[test]
    fn test_with_mitigations() {
        let mut parameters = Parameters::default();
        parameters.mitigations.vaccine.enabled = true;
        let model = SEIRModelUnified { parameters };
        let run = model.run(200);
        assert!(run.output.contains_key(&MitigationType::Mitigated));
        assert!(run.output.contains_key(&MitigationType::Unmitigated));
        assert_eq!(run.mitigation_types.len(), 2);
    }
}
