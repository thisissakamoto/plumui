import { defineRecipe } from "@pandacss/dev";

export const highlightRecipe = defineRecipe({
  className: "highlight",
  base: {
    "--px": "",
    "--py": "",
    "--radius": "",
    "--alpha": "",
    "--fg": "",
    "--bg": "",
    "--stroke": "",

    "mark": {
      px: "var(--px)",
      py: "var(--py)",
      bg: "var(--bg)",
      display: "inline",
      position: "relative",
      color: "var(--fg)",
      opacity: "var(--alpha)",
      rounded: "var(--radius)",
      border: "1px solid var(--stroke)",
    }
  },
  variants: {
    radius: {
      xs: { "--radius": "{radii.4}"},
      sm: { "--radius": "{radii.8}"},
      md: { "--radius": "{radii.12}"},
      lg: { "--radius": "{radii.16}"},
      xl: { "--radius": "{radii.20}"},
      none: { "--radius": "{radii.0}"},
      full: {"--radius": "{radii.full}"},
    },
    intensity: {
      soft: {
        "--alpha": "0.6"
      },
      normal: {
        "--alpha": "0.8"
      },
      strong: {
        "--alpha": "1"
      },
    },
    size: {
      xs: {
        "--py": "{spacing.1}",
        "--px": "{spacing.6}",
      },
      sm: {
        "--py": "{spacing.2}",
        "--px": "{spacing.8}",
      },
      md: {
        "--py": "{spacing.2}",
        "--px": "{spacing.8}",
      },
      lg: {
        "--py": "{spacing.4}",
        "--px": "{spacing.10}",
      },
      xl: {
        "--py": "{spacing.6}",
        "--px": "{spacing.12}",
      }
    },

    visual: {
      filled: {
        "--fg": "{colors.colorPalette.fg}",
        "--bg": "{colors.colorPalette.fill}",
      },
      ghost: {
        "--px": "{spacing.0}",
        "--bg": "{colors.transparent}",
        "--fg": "{colors.colorPalette.fg.subtle}",
      },
      soft: {
        "--fg": "{colors.colorPalette.fg.subtle}",
        "--bg": "{colors.colorPalette.fill.subtle}",
      },
      outlined: {
        "--bg": "{colors.transparent}",
        "--fg": "{colors.colorPalette.fg.subtle}",
        "--stroke": "{colors.colorPalette.stroke}",
      },
      underlined  : {
        "--px": "{spacing.0}",
        "--bg": "{colors.transparent}",
        "--fg": "{colors.colorPalette.fg.subtle}",
        "mark": {
          textDecoration: "underline"
        }
      },
    },

    tone: {
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
      slate: { colorPalette: "slate" },
      gray: { colorPalette: "gray" },
      zinc: { colorPalette: "zinc" },
      neutral: { colorPalette: "neutral" },
      stone: { colorPalette: "stone" },
    },
  },
  defaultVariants: {
    size: "md",
    tone: "blue",
    radius: "md",
    visual: "filled",
    intensity: "strong",
  }
})
