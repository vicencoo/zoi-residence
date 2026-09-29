import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import legacy from "@vitejs/plugin-legacy";
import { seoPlugin } from "./scripts/seoPlugin.mjs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    seoPlugin(),
  ],
  build: {
    target: "es2015", // Down-compiles code for maximum compatibility
  },
});
