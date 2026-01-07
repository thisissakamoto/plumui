import { defineRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const textareaRecipe = defineRecipe({
  className: "textarea",
  base: {
    ...styles.form.textarea,

    "--py": "",
    "--bg": "",
    "--px": "",
    "--radii": "",
    "--stroke": "",
    "--height": "",
    "--shadow": "",
    "--text-fs": "",

    px: "var(--px)",
    py: "var(--py)",
    bg: "var(--bg)",
    minH: "var(--height)",
    shadow: "var(--shadow)",
    rounded: "var(--radii)",
    fontSize: "var(--text-fs)",
    border: "1px solid var(--stroke)",
  },
  variants: {
    radius: {
      xs: { "--radii": "{radii.4}"},
      sm: { "--radii": "{radii.6}"},
      md: { "--radii": "{radii.8}"},
      lg: { "--radii": "{radii.10}"},
      xl: { "--radii": "{radii.12}"},
      none: { "--radii": "{radii.0}"},
      full: {"--radii": "{radii.full}"},
    },
    size: {
      xs: {
        "--py": "{spacing.8}",
        "--px": "{spacing.10}",
        "--height": "{sizes.28}",
        "--text-fs": "{fontSizes.14}",
      },
      sm: {
        "--py": "{spacing.8}",
        "--px": "{spacing.12}",
        "--height": "{sizes.32}",
        "--text-fs": "{fontSizes.14}",
      },
      md: {
        "--py": "{spacing.8}",
        "--px": "{spacing.12}",
        "--height": "{sizes.36}",
        "--text-fs": "{fontSizes.14}",
      },
      lg: {
        "--py": "{spacing.8}",
        "--px": "{spacing.12}",
        "--height": "{sizes.40}",
        "--text-fs": "{fontSizes.14}",
      },
      xl: {
        "--py": "{spacing.10}",
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
        "--bg": "{colors.bg.subtle}",
      },
      outlined: {
        "--bg": "{colors.bg}",
        "--stroke": "{colors.stroke}",
      },
      underlined: {
        "--p": "{spacing.0}",
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
    radius: "lg",
    visual: "elevated",
  },
});
