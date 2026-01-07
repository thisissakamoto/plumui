import { defineConfig } from "@pandacss/dev";
import { basePreset } from "@plumui/presets";

export default defineConfig({
  presets: [basePreset],
  outExtension: "js",
  clean: true,
  jsxFramework: "react",
  outdir: "./dist/panda",
  include: [
    "src/components/**/*.{js,jsx,ts,tsx}",
    ".ladle/components.tsx",
  ],
  staticCss: {
    recipes: "*",
  }
});
