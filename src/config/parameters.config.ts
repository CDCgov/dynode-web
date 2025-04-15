import { Parameters } from "@wasm/wasm_dynode";
import { defineEditorConfig } from "./editorConfig";

export type ParameterPath = keyof typeof ParameterEditorConfig.config;

export const ParameterEditorConfig = defineEditorConfig<Parameters>({
    population: {
        tooltip: "The total population",
    },
    "mitigations.antivirals.ave_i": {
        tooltip: "Prevention of transmission from treated infected",
    },
});
