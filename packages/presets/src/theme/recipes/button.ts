import { defineRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const buttonRecipe = defineRecipe({
  className: "btn",
  description:
    "A versatile button with tone and visual variants using CSS variables",
  base: {
    ...styles.pressable.button,

    "--fg": "",
    "--bg": "",
    "--ring": "",
    "--radii": "",
    "--stroke": "",
    "--height": "",
    "--text-fs": "",
    "--bg-hover": "",

    bg: "var(--bg)",
    fontWeight: "500",
    h: "var(--height)",
    color: "var(--fg)",
    rounded: "var(--radii)",
    fontSize: "var(--text-fs)",
    px: "calc(var(--height) * 0.4)",
    border: "1px solid var(--stroke)",
    transition: `
      transform 250ms ease,
      background-color 100ms ease-out
    `,

    _hover: {
      bg: "var(--bg-hover)",
    },

    _active: {
      scale: "0.97",
      bg: "color-mix(in oklab, var(--bg-hover), var(--mix-5) {colors.transparent})",
    },
  },

  variants: {
    size: {
      xs: {
        "--height": "{sizes.24}",
        "--text-fs": "{fontSizes.12}",
      },
      sm: {
        "--height": "{sizes.28}",
        "--text-fs": "{fontSizes.14}",
      },
      md: {
        "--height": "{sizes.32}",
        "--text-fs": "{fontSizes.14}",
      },
      lg: {
        "--height": "{sizes.36}",
        "--text-fs": "{fontSizes.14}",
      },
      xl: {
        "--height": "{sizes.40}",
        "--text-fs": "{fontSizes.14}",
      },
    },

    radius: {
      xs: { "--radii": "{radii.4}" },
      sm: { "--radii": "{radii.8}" },
      md: { "--radii": "{radii.12}" },
      lg: { "--radii": "{radii.16}" },
      xl: { "--radii": "{radii.20}" },
      none: { "--radii": "{radii.0}" },
      full: { "--radii": "{radii.full}" },
    },

    span: { true: { width: "{sizes.full}" } },
    wide: { true: { width: "{sizes.full}" } },

    visual: {
      filled: {
        "--stroke": "{colors.transparent}",
        "--fg": "{colors.colorPalette.fg}",
        "--bg": "{colors.colorPalette.fill}",
        "--bg-hover": "{colors.colorPalette.fill.hover}",
      },
      soft: {
        "--stroke": "{colors.transparent}",
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
        "--stroke": "{colors.transparent}",
        "--fg": "{colors.colorPalette.fg.subtle}",
      },
      ghost: {
        "--bg": "{colors.transparent}",
        "--stroke": "{colors.transparent}",
        "--fg": "{colors.colorPalette.fg.subtle}",
        "--bg-hover": "{colors.colorPalette.fill.muted}",
      },
      base: {
        "--bg": "{colors.bg}",
        "--stroke": "{colors.transparent}",
        "--fg": "{colors.colorPalette.fg.subtle}",
        "--bg-hover": "{colors.colorPalette.fill.muted}",
      },
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
    size: "lg",
    wide: false,
    tone: "blue",
    radius: "full",
    visual: "filled",
  },
});
