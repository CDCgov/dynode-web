import "@wasm/wasm_dynode";

declare module "@wasm/wasm_dynode" {
    export type Parameters = ParametersExport;
    export type OutputType = keyof SEIRModelOutput;
}
