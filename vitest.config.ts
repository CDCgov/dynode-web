import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
    resolve: {
        alias: {
            "@wasm": path.resolve(__dirname, "./wasm_dynode/pkg"),
        },
    },
    test: {
        includeSource: ["src/**/*.{ts,tsx}"],
    },
});
