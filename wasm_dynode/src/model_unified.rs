use std::{any::Any, collections::HashMap};

use crate::{Parameters, ParametersExport, SEIRModel};
use serde::{Deserialize, Serialize};
use serde_wasm_bindgen::from_value;
use tsify::Tsify;
use wasm_bindgen::prelude::*;

#[derive(Tsify, Debug, Clone, Serialize, Deserialize, Hash, PartialEq, Eq)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub enum ModelRunType {
    Unmitigated,
    Mitigated,
}

#[derive(Tsify, Debug, Clone, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct OutputItem {
    pub(crate) time: f64,
    pub(crate) grouped_values: Vec<f64>,
}

#[derive(Tsify, Debug, Clone, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct SEIRModelOutput {
    pub(crate) infection_incidence: Vec<OutputItem>,
    pub(crate) hospital_incidence: Vec<OutputItem>,
}

#[derive(Tsify, Debug, Clone, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct ModelRuns {
    runs: HashMap<ModelRunType, SEIRModelOutput>,
    types: Vec<ModelRunType>,
}

impl ModelRuns {
    pub fn new(output: HashMap<ModelRunType, SEIRModelOutput>, types: Vec<ModelRunType>) -> Self {
        ModelRuns {
            runs: output,
            types,
        }
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

    #[wasm_bindgen]
    pub fn run(&self, days: usize) -> ModelRuns {
        let base_label: ModelRunType;
        let mut result = HashMap::new();
        let mut types = vec![ModelRunType::Unmitigated];

        // Run an unmitigated version if necessary
        if self.parameters.has_mitigations() {
            types.push(ModelRunType::Mitigated);
            result.insert(
                ModelRunType::Unmitigated,
                select_model(self.parameters.without_mitigations()).integrate(days),
            );
            base_label = ModelRunType::Mitigated;
        } else {
            base_label = ModelRunType::Unmitigated;
        }

        // Run the base version
        result.insert(
            base_label.clone(),
            select_model(self.parameters.clone()).integrate(days),
        );

        ModelRuns::new(result, types)
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
        let output = model.run(200);

        assert_eq!(output.len(), 2);
        assert!(output.contains_key(&ModelRunType::Unmitigated));
        assert!(output.contains_key(&ModelRunType::Mitigated));
    }
}
