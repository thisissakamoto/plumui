import { defineRecipe } from "@pandacss/dev";

export const spinnerRecipe = defineRecipe({
  className: "spinner",
  base: {

    display: "inline-block",

    "& > svg": {
      boxSize: "{sizes.full}",
      color: "{colors.colorPalette.fg.subtle}",
      animation: "spin 2s linear infinite",
    },
  },
  variants: {
    size: {
      xs: {
        boxSize: "{sizes.20}"
      },
      sm: {
        boxSize: "{sizes.24}"
      },
      md: {
        boxSize: "{sizes.28}"
      },
      lg: {
        boxSize: "{sizes.32}"
      },
      xl: {
        boxSize: "{sizes.40}"
      }
    },

    tone: {
      blue: { colorPalette: "blue" },
      indigo: { colorPalette: "indigo" },
      violet: { colorPalette: "violet" },
      purple: { colorPalette: "purple" },
      fuchsia: { colorPalette: "fuchsia" },
      pink: { colorPalette: "pink" },
      rose: { colorPalette: "rose" },
      red: { colorPalette: "rose" },
      orange: { colorPalette: "orange" },
      emerald: { colorPalette: "emerald" },
      green: { colorPalette: "green" },
      teal: { colorPalette: "teal" },
      sky: { colorPalette: "sky" },
      cyan: { colorPalette: "cyan" },
      amber: { colorPalette: "amber" },
      yellow: { colorPalette: "yellow" },
      lime: { colorPalette: "lime" },
      slate: { colorPalette: "slate" },
      gray: { colorPalette: "gray" },
      zinc: { colorPalette: "zinc" },
      neutral: { colorPalette: "neutral" },
      stone: { colorPalette: "stone" },
    }
  },
  defaultVariants: {
    size: "xs",
    visual: "soft",
    tone: "neutral",
  }
});
