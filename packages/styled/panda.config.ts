import { defineConfig } from "@pandacss/dev";
import { basePreset } from "@plumui/presets";

export default defineConfig({
  exclude: [],
  clean: true,
  outdir: "dist",
  preflight: true,
  outExtension: "js",
  presets: [basePreset],
  jsxFramework: "react",
});
