import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        base: env.TARGET === "azure" ? "./" : "/dynode-web/",
        resolve: {
            alias: {
                "@wasm": path.resolve(__dirname, "./wasm_dynode/pkg"),
            },
        },
        server: { port: 8888 },
        define: {
            // Removes in-source testing
            "import.meta.vitest": "undefined",
        },
        plugins: [react(), wasm(), topLevelAwait()],
    };
});
