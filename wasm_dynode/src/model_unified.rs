use std::{any::Any, collections::HashMap};

use crate::{Parameters, ParametersExport, SEIRModel};
use serde::{Deserialize, Serialize};
use serde_wasm_bindgen::from_value;
use tsify::Tsify;
use wasm_bindgen::prelude::*;

#[derive(Tsify, Debug, Clone, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct OutputItem {
    pub(crate) time: f64,
    pub(crate) value: Vec<f64>,
}

#[derive(Tsify, Debug, Clone, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct SEIRModelOutput {
    pub(crate) infection_incidence: Vec<OutputItem>,
    pub(crate) hospital_incidence: Vec<OutputItem>,
}

#[derive(Tsify, Debug, Clone, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct SEIRModelOutputResult {
    output: HashMap<String, SEIRModelOutput>,
}

impl SEIRModelOutputResult {
    pub fn new(output: HashMap<String, SEIRModelOutput>) -> Self {
        SEIRModelOutputResult { output }
    }
}

pub trait DynodeModel: Any {
    fn integrate(&self, days: usize) -> SEIRModelOutput;
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

    fn run_internal(&self, days: usize) -> HashMap<String, SEIRModelOutput> {
        let base_label: String;
        let mut result = HashMap::new();

        // Run an unmitigated version if necessary
        if self.parameters.has_mitigations() {
            result.insert(
                "unmitigated".to_string(),
                select_model(self.parameters.without_mitigations()).integrate(days),
            );
            base_label = "mitigated".to_string();
        } else {
            base_label = "unmitigated".to_string();
        }

        // Run the base version
        result.insert(
            base_label.clone(),
            select_model(self.parameters.clone()).integrate(days),
        );

        result
    }

    #[wasm_bindgen]
    pub fn run(&self, days: usize) -> SEIRModelOutputResult {
        SEIRModelOutputResult::new(self.run_internal(days))
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
    fn test_with_mitigations() {
        let mut parameters = Parameters::default();
        parameters.mitigations.vaccine.enabled = true;
        let model = SEIRModelUnified { parameters };
        let output = model.run_internal(200);

        assert_eq!(output.len(), 2);
        assert!(output.contains_key("unmitigated"));
        assert!(output.contains_key("mitigated"));
    }
}
