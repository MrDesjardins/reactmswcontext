/// <referece types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    testTimeout: 5000,
    environment: "happy-dom",
    setupFiles: "./src/setupTests.ts",
  },
});
