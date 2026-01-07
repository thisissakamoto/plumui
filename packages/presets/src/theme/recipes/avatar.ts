import { avatarAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const avatarRecipe = defineSlotRecipe({
  className: "avatar",
  slots: avatarAnatomy.keys(),
  base: {
    root: {
      "--fg": "",
      "--bg": "",
      "--size": "",
      "--radii": "",
      "--stroke": "",
      "--text-fs": "",

      bg: "var(--bg)",
      overflow: "hidden",
      alignItems: "center",
      boxSize: "var(--size)",
      display: "inline-flex",
      rounded: "var(--radii)",
      justifyContent: "center",
      border: "1px solid var(--stroke)",
    },
    image: styles.media.image,
    fallback: {
      "&:not([data-state=hidden])": {
        ...styles.typography.title,
        color: "var(--fg)",
        alignItems: "center",
        display: "inline-flex",
        boxSize: "{sizes.full}",
        justifyContent: "center",
        fontSize: "var(--text-fs)",
        backgroundColor: "inherit",
        lineHeight: "{lineHeights.none}",
      }
    },
  },

  variants: {
    size: {
      xs: {
        root: {
          "--size": "{sizes.24}",
          "--text-fs": "{fontSizes.12}",
        },
      },
      sm: {
        root: {
          "--size": "{sizes.28}",
          "--text-fs": "{fontSizes.14}",
        },
      },
      md: {
        root: {
          "--size": "{sizes.32}",
          "--text-fs": "{fontSizes.14}",
        },
      },
      lg: {
        root: {
          "--size": "{sizes.36}",
          "--text-fs": "{fontSizes.14}",
        },
      },
      xl: {
        root: {
          "--size": "{sizes.40}",
          "--text-fs": "{fontSizes.16}",
        },
      },
      "2xl": {
        root: {
          "--size": "{sizes.48}",
          "--text-fs": "{fontSizes.16}",
        },
      },
      "3xl": {
        root: {
          "--size": "{sizes.56}",
          "--text-fs": "{fontSizes.16}",
        },
      },
    },
    radius: {
      xs: {
        root: { "--radii": "{radii.4}" },
      },
      sm: {
        root: { "--radii": "{radii.8}" },
      },
      md: {
        root: { "--radii": "{radii.12}" },
      },
      lg: {
        root: { "--radii": "{radii.16}" },
      },
      xl: {
        root: { "--radii": "{radii.20}" },
      },
      none: {
        root: { "--radii": "{radii.0}" },
      },
      full: {
        root: { "--radii": "{radii.full}" },
      },
    },

    visual: {
      filled: {
        root: {
          "--fg": "{colors.colorPalette.fg}",
          "--bg": "{colors.colorPalette.fill}",
        }
      },
      soft: {
        root: {
          "--fg": "{colors.colorPalette.fg.subtle}",
          "--bg": "{colors.colorPalette.fill.subtle}",
        }
      },
    },

    tone: {
      blue: { root: { colorPalette: "blue" } },
      red: { root: { colorPalette: "red" } },
      green: { root: { colorPalette: "green" } },
      orange: { root: { colorPalette: "orange" } },
      purple: { root: { colorPalette: "purple" } },
      gray: { root: { colorPalette: "gray" } },
      amber: { root: { colorPalette: "amber" } },
      cyan: { root: { colorPalette: "cyan" } },
      indigo: { root: { colorPalette: "indigo" } },
      pink: { root: { colorPalette: "pink" } },
      teal: { root: { colorPalette: "teal" } },
      yellow: { root: { colorPalette: "yellow" } },
      lime: { root: { colorPalette: "lime" } },
      sky: { root: { colorPalette: "sky" } },
      slate: { root: { colorPalette: "slate" } },
      violet: { root: { colorPalette: "violet" } },
      fuchsia: { root: { colorPalette: "fuchsia" } },
      emerald: { root: { colorPalette: "emerald" } },
      rose: { root: { colorPalette: "rose" } },
      zinc: { root: { colorPalette: "zinc" } },
      neutral: { root: { colorPalette: "neutral" } },
      stone: { root: { colorPalette: "stone" } },
    },
  },

  defaultVariants: {
    size: "lg",
    radius: "full",
    visual: "soft",
    tone: "neutral",
  },
});
