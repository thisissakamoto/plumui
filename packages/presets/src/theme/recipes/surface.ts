import { defineRecipe } from "@pandacss/dev";

export const surfaceRecipe = defineRecipe({
  className: "surface",
  base: {
    "--bg": "",
    "--radii": "",

    bg: "var(--bg)",
    w: "{sizes.full}",
    display: "inline-flex",
    rounded: "var(--radii)",
  },
  variants: {
    orientation:{
      vertical: {
        flexDirection: "column"
      },
      horizontal: {
        flexDirection: "row",
      }
    },
    contrast: {
      low: {
        "--bg": "color-mix(in oklab, var(--mix-5) {colors.bg.surface}, var(--mix-5) {colors.fg})",
      },
      mid: {
        "--bg": "color-mix(in oklab, var(--mix-40) {colors.bg.surface}, var(--mix-5) {colors.fg})",
      },
      high: {
        "--bg": "color-mix(in oklab, var(--mix-95) {colors.bg.surface}, var(--mix-5) {colors.fg})",
      },
      max: {
        "--bg": "color-mix(in oklab, var(--mix-0) {colors.bg.surface}, var(--mix-0) {colors.fg})",
      }
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
      }
    }
  },
  defaultVariants: {
    radius: "lg",
    contrast: "max",
  }
});
