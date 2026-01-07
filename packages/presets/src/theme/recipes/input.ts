import { defineRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const inputRecipe = defineRecipe({
  className: "input",
  base: {
    ...styles.form.input,
    _focusVisible: styles.form._focusVisible,

    "--px": "",
    "--bg": "",
    "--radii": "",
    "--height": "",
    "--shadow": "",
    "--stroke": "",
    "--text-fs": "",

    px: "var(--px)",
    bg: "var(--bg)",
    h: "var(--height)",
    shadow: "var(--shadow)",
    rounded: "var(--radii)",
    fontSize: "var(--text-fs)",
    border: "1px solid var(--stroke)",
  },
  variants: {
    radius: {
      xs: { "--radii": "{radii.4}" },
      sm: { "--radii": "{radii.8}" },
      md: { "--radii": "{radii.12}" },
      lg: { "--radii": "{radii.16}" },
      xl: { "--radii": "{radii.20}" },
      none: { "--radii": "{radii.0}" },
      full: { "--radii": "{radii.full}" },
    },
    size: {
      xs: {
        "--px": "{spacing.10}",
        "--height": "{sizes.28}",
        "--text-fs": "{fontSizes.14}",
      },
      sm: {
        "--px": "{spacing.12}",
        "--height": "{sizes.32}",
        "--text-fs": "{fontSizes.14}",
      },
      md: {
        "--px": "{spacing.12}",
        "--height": "{sizes.36}",
        "--text-fs": "{fontSizes.14}",
      },
      lg: {
        "--px": "{spacing.16}",
        "--height": "{sizes.40}",
        "--text-fs": "{fontSizes.14}",
      },
      xl: {
        "--px": "{spacing.16}",
        "--height": "{sizes.44}",
        "--text-fs": "{fontSizes.14}",
      },
    },
    visual: {
      ghost: {
        "--bg": "{colors.transparent}",
      },
      filled: {
        "--bg": "{colors.bg.surface}",
      },
      outlined: {
        "--bg": "{colors.bg}",
        "--stroke": "{colors.stroke}",
      },
      underlined: {
        "--px": "{spacing.0}",
        "--radii": "{radii.0}",
        borderBottom: "2px solid {colors.stroke}",
      },
      elevated: {
        "--bg": "{colors.bg.elevated}",
        "--shadow": "{shadows.xs}, {shadows.ring.offset}",
      }
    },
  },

  defaultVariants: {
    size: "md",
    radius: "md",
    visual: "elevated",
  },
});
