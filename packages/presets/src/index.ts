import { definePreset } from "@pandacss/dev";
import { breakpoints } from "./theme/breakpoints";
import { containerNames, containerSizes } from "./theme/container";
import { globalCss } from "./theme/global-css";
import { keyframes } from "./theme/keyframes";
import { recipes, slotRecipes } from "./theme/recipes";
import { semanticTokens, tokens } from "./theme/tokens";


export const basePreset = definePreset({
	name: "@plumui/base-preset",
	globalCss,
	theme: {
		keyframes,
		tokens,
		recipes,
		slotRecipes,
		semanticTokens,
		breakpoints,
		containerNames,
		containerSizes,
	},
});

export { getVariants } from "./utils";
