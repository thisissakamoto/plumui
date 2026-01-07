import { defineRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const iconButtonRecipe = defineRecipe({
  className: "icon-btn",
  description:
    "A versatile button with tone and visual variants using CSS variables",
  base: {
    ...styles.pressable.button,

    "--fg": "",
    "--bg": "",
    "--size": "",
    "--radii": "",
    "--stroke": "",
    "--bg-hover": "",


    bg: "var(--bg)",
    fontWeight: "500",
    color: "var(--fg)",
    boxSize: "var(--size)",
    rounded: "var(--radii)",
    fontSize: "{fontSizes.14}",
    border: "1px solid var(--stroke)",

    _hover: {
      bg: "var(--bg-hover)",
    },
    _active: {
      bg: "color-mix(in oklab, var(--bg-hover), {colors.transparent} 4%)",
    },
  },

  variants: {
    size: {
      xs: {
        "--size": "{sizes.20}",
      },
      sm: {
        "--size": "{sizes.24}",
      },
      md: {
        "--size": "{sizes.28}",
      },
      lg: {
        "--size": "{sizes.32}",
      },
      xl: {
        "--size": "{sizes.36}",
      },
      "2xl": {
        "--size": "{sizes.40}",
      },
      "3xl": {
        "--size": "{sizes.48}",
      },
      auto: {
        "--size": "{sizes.auto}",
      },
    },

    radius: {
      xs: {
        "--radii": "{radii.4}",
      },
      sm: {
        "--radii": "{radii.8}",
      },
      md: {
        "--radii": "{radii.12}",
      },
      lg: {
        "--radii": "{radii.16}",
      },
      xl: {
        "--radii": "{radii.20}",
      },
      full: {
        "--radii": "{radii.full}",
      },
      none: {
        "--radii": "{radii.none}",
      },
    },

    visual: {
      filled: {
        "--fg": "{colors.colorPalette.fg}",
        "--bg": "{colors.colorPalette.fill}",
        "--bg-hover": "{colors.colorPalette.fill.hover}",
      },
      soft: {
        "--fg": "{colors.colorPalette.fg.subtle}",
        "--bg": "{colors.colorPalette.fill.subtle}",
        "--bg-hover": "{colors.colorPalette.fill.subtle.hover}",
      },
      outlined: {
        "--bg": "{colors.transparent}",
        "--fg": "{colors.colorPalette.fg.subtle}",
        "--stroke": "{colors.colorPalette.stroke}",
        "--bg-hover": "{colors.colorPalette.fill.muted}",
      },
      surface: {
        "--bg": "{colors.bg.surface}",
        "--bg-hover": "{colors.bg.on}",
        "--fg": "{colors.colorPalette.fg.subtle}",
      },
      ghost: {
        "--bg": "{colors.transparent}",
        "--fg": "{colors.colorPalette.fg.subtle}",
        "--bg-hover": "{colors.colorPalette.fill.muted}",
      },
      flat: {
        "--bg": "{colors.transparent}",
        "--bg-hover": "{colors.transparent}",
        "--fg": "{colors.colorPalette.fg.subtle}",
      },
    },

    stretch: {
      true: {
        h: "{sizes.full}",
        alignSelf: "stretch",
      }
    },

    tone: {
      blue: { colorPalette: "blue" },
      red: { colorPalette: "red" },
      green: { colorPalette: "green" },
      orange: { colorPalette: "orange" },
      purple: { colorPalette: "purple" },
      gray: { colorPalette: "gray" },
      amber: { colorPalette: "amber" },
      cyan: { colorPalette: "cyan" },
      indigo: { colorPalette: "indigo" },
      pink: { colorPalette: "pink" },
      teal: { colorPalette: "teal" },
      yellow: { colorPalette: "yellow" },
      lime: { colorPalette: "lime" },
      sky: { colorPalette: "sky" },
      slate: { colorPalette: "slate" },
      violet: { colorPalette: "violet" },
      zinc: { colorPalette: "zinc" },
      neutral: { colorPalette: "neutral" },
      stone: { colorPalette: "stone" },
      emerald: { colorPalette: "emerald" },
      fuchsia: { colorPalette: "fuchsia" },
      rose: { colorPalette: "rose" },
    },
  },

  defaultVariants: {
    size: "lg",
    tone: "blue",
    radius: "full",
    stretch: false,
    visual: "filled",
  },
});
