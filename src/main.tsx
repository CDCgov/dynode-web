import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import initWasm, { get_default_parameters } from "@wasm/wasm_dynode";
import { ParamsProvider } from "./ModelState.tsx";
import "./index.css";
import "./layout/spacing.css";

initWasm().then(() => {
    console.log("Wasm initialized");
    let initialParams = get_default_parameters();
    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <ParamsProvider initialParams={initialParams}>
                <App />
            </ParamsProvider>
        </StrictMode>,
    );
});
