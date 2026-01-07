import { defineRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const anchorRecipe = defineRecipe({
  className: "anchor",

  base: {
    ...styles.pressable.button,

    "--opacity": "1",
    "--fg": "{colors.colorPalette.fg.subtle}",

    color: "var(--fg)",
    position: "relative",
    fontSize: "{fontSizes.14}",

    _hover: {
      color: "color-mix(in oklab, var(--mix-90) var(--fg), {colors.transparent})",

      _before: {
        left: 0,
        content: '""',
        h: "{sizes.1}",
        bg: "var(--fg)",
        w: "{sizes.full}",
        position: "absolute",
        opacity: "var(--opacity)",
        bottom: "calc({spacing.4} * -1)",
        transition: "opacity 150ms ease-out",
      },
    },

    _active: {
      color: "color-mix(in oklab, var(--mix-80) var(--fg), {colors.transparent})",
    }
  },

  variants: {
    underline: {
      none: {
        "--opacity": "0",
      },
      always: {
        "--opacity": "1",
      },
    },
    tone: {
      slate: { colorPalette: "slate" },
      gray: { colorPalette: "gray" },
      zinc: { colorPalette: "zinc" },
      neutral: { colorPalette: "neutral" },
      stone: { colorPalette: "stone" },
      red: { colorPalette: "red" },
      orange: { colorPalette: "orange" },
      amber: { colorPalette: "amber" },
      yellow: { colorPalette: "yellow" },
      lime: { colorPalette: "lime" },
      green: { colorPalette: "green" },
      emerald: { colorPalette: "emerald" },
      teal: { colorPalette: "teal" },
      cyan: { colorPalette: "cyan" },
      sky: { colorPalette: "sky" },
      blue: { colorPalette: "blue" },
      indigo: { colorPalette: "indigo" },
      violet: { colorPalette: "violet" },
      purple: { colorPalette: "purple" },
      fuchsia: { colorPalette: "fuchsia" },
      pink: { colorPalette: "pink" },
      rose: { colorPalette: "rose" },
    },
  },

  defaultVariants: {
    tone: "neutral",
    underline: "always",
  },
});
