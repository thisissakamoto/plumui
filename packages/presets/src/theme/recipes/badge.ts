import { defineRecipe } from "@pandacss/dev";

export const badgeRecipe = defineRecipe({
  className: "badge",
  base: {
    "--fg":  "",
    "--bg":  "",
    "--size": "",
    "--radii": "",
    "--text-fs": "",
    "--stroke":  "",

    bg: "var(--bg)",
    lineHeight: "1",
    h: "var(--size)",
    fontWeight: "500",
    color: "var(--fg)",
    alignItems: "center",
    display: "inline-flex",
    rounded: "var(--radii)",
    justifyContent: "center",
    fontSize: "var(--text-fs)",
    px: "calc(var(--size) * 0.4)",
    border: "1px solid var(--stroke)",
  },
  variants: {
    iconOnly: {
      true: {
        px: "{sizes.0}",
        boxSize: "var(--size)",
      }
    },
    size: {
      "2xs": {
        "--size": "{sizes.16}",
        "--text-fs": "{fontSizes.12}",
      },
      xs: {
        "--size": "{sizes.20}",
        "--text-fs": "{fontSizes.14}",
      },
      sm: {
        "--size": "{sizes.24}",
        "--text-fs": "{fontSizes.14}",
      },
      md: {
        "--size": "{sizes.28}",
        "--text-fs": "{fontSizes.14}",
      },
      lg: {
        "--size": "{sizes.32}",
        "--text-fs": "{fontSizes.14}",
      },
      xl: {
        "--size": "{sizes.36}",
        "--text-fs": "{fontSizes.14}",
      },
      "2xl": {
        "--size": "{sizes.40}",
        "--text-fs": "{fontSizes.14}",
      },
    },

    radius: {
      none: {
        "--radii": "{radii.0}",
      },
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
    },

    visual: {
      filled: {
        "--fg": "{colors.colorPalette.fg}",
        "--bg": "{colors.colorPalette.fill}",
      },
      soft: {
        "--fg": "{colors.colorPalette.fg.subtle}",
        "--bg": "{colors.colorPalette.fill.subtle}",
      },
      outlined: {
        "--fg": "{colors.colorPalette.fg.subtle}",
        "--stroke": "{colors.colorPalette.stroke}",
      },
      surface: {
        "--bg": "{colors.bg.surface}",
        "--fg": "{colors.colorPalette.fg.subtle}",
      },
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
    size: "md",
    tone: "blue",
    radius: "full",
    iconOnly: false,
    visual: "filled",
  },
});
