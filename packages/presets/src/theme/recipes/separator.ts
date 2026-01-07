import { defineRecipe } from "@pandacss/dev";

export const separatorRecipe = defineRecipe({
  className: "separator",
  base: {
    "--space-x": "",
    "--space-y": "",
    "--border": "",

    flexShrink: "0",
    display: "block",
    alignSelf: "stretch",
    mx: "var(--space-x)",
    my: "var(--space-y)",

    _horizontal: {
      w: "{sizes.full}",
      borderBottom: "var(--border) solid {colors.stroke}",
    },

    _vertical: {
      h: "{sizes.auto}",
      borderLeft: "var(--border) solid {colors.stroke}",
    },
  },
  variants: {
    thickness: {
      none: {
        "--border": "0px",
      },
      thin: {
        "--border": "1px",
      },
      thick: {
        "--border": "2px",
      },
    },
    spaceX: {
      xs: { "--space-x": "{spacing.2}" },
      sm: { "--space-x": "{spacing.4}" },
      md: { "--space-x": "{spacing.8}" },
      lg: { "--space-x": "{spacing.12}" },
      xl: { "--space-x": "{spacing.16}" },
      "2xl": { "--space-x": "{spacing.20}" },
      "3xl": { "--space-x": "{spacing.24}" },
      "4xl": { "--space-x": "{spacing.32}" },
      "5xs": { "--space-x": "{spacing.40}" },
      "6xl": { "--space-x": "{spacing.48}" },
      "7xl": { "--space-x": "{spacing.64}" },
      "8xl": { "--space-x": "{spacing.80}" },
      "9xl": { "--space-x": "{spacing.124}" },
    },
    spaceY: {
      xs: { "--space-y": "{spacing.2}" },
      sm: { "--space-y": "{spacing.4}" },
      md: { "--space-y": "{spacing.8}" },
      lg: { "--space-y": "{spacing.12}" },
      xl: { "--space-y": "{spacing.16}" },
      "2xl": { "--space-y": "{spacing.20}" },
      "3xl": { "--space-y": "{spacing.24}" },
      "4xl": { "--space-y": "{spacing.32}" },
      "5xs": { "--space-y": "{spacing.40}" },
      "6xl": { "--space-y": "{spacing.48}" },
      "7xl": { "--space-y": "{spacing.64}" },
      "8xl": { "--space-y": "{spacing.80}" },
      "9xl": { "--space-y": "{spacing.124}" },
    }
  },
  defaultVariants: {
    thickness: "thin",
  },
});
