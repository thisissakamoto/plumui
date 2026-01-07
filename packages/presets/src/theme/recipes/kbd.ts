import { defineSlotRecipe } from "@pandacss/dev";

export const kbdRecipe = defineSlotRecipe({
  className: "kbd",
  slots: ["root", "item"],
  base: {
    root: {
      "--bg": "",
      "--fg": "",
      "--size": "",
      "--radii": "",
      "--stroke": "",
      "--text-fs": "",

      gap: "6",
      lineHeight: "1",
      alignItems: "center",
      display: "inline-flex",
      fontSize: "var(--text-fs)",
    },
    item: {
      bg: "var(--bg)",
      lineHeight: "1",
      flexShrink: "0",
      color: "var(--fg)",
      fontWeight: "500",
      fontSize: "inherit",
      alignItems: "center",
      h: "var(--size)",
      minW: "var(--size)",
      display: "inline-flex",
      rounded: "var(--radii)",
      justifyContent: "center",
      border: "1px solid var(--stroke)",
    }
  },

  variants: {
    radius: {
      xs: {
        root: {
          "--radii": "{radii.4}",
        },
      },
      sm: {
        root: {
          "--radii": "{radii.8}",
        },
      },
      md: {
        root: {
          "--radii": "{radii.12}",
        },
      },
      lg: {
        root: {
          "--radii": "{radii.16}",
        },
      },
      xl: {
        root: {
          "--radii": "{radii.20}",
        },
      },
      full: {
        root: {
          "--radii": "{radii.full}",
        },
      },
      none: {
        root: {
          "--radii": "{radii.0}",
        },
      }
    },
    size: {
      xs: {
        root: {
          "--size": "{sizes.20}",
          "--text-fs": "{fontSizes.14}",
        }
      },
      sm: {
        root: {
          "--size": "{sizes.24}",
          "--text-fs": "{fontSizes.14}",
        }
      },
      md: {
        root: {
          "--size": "{sizes.28}",
          "--text-fs": "{fontSizes.14}",
        }
      },
      lg: {
        root: {
          "--size": "{sizes.32}",
          "--text-fs": "{fontSizes.14}",
        }
      },
      xl: {
        root: {
          "--size": "{sizes.36}",
          "--text-fs": "{fontSizes.14}",
        }
      },
    },
    visual: {
      soft: {
        root: {
          "--fg": "{colors.colorPalette.fg.subtle}",
          "--bg": "{colors.colorPalette.fill.subtle}",
        }
      },
      filled: {
        root: {
          "--fg": "{colors.colorPalette.fg}",
          "--bg": "{colors.colorPalette.fill}",
        }
      },
      outlined: {
        root: {
          "--bg": "{colors.transparent}",
          "--fg": "{colors.colorPalette.fg.subtle}",
          "--stroke": "{colors.colorPalette.stroke}",
        }
      },
      ghost: {
        root: {
          "--bg": "{colors.transparent}",
          "--stroke": "{colors.transparent}",
          "--fg": "{colors.colorPalette.fg.subtle}",
        }
      },
      surface: {
        root: {
          "--bg": "{colors.bg.surface}",
          "--stroke": "{colors.transparent}",
          "--fg": "{colors.colorPalette.fg.subtle}",
        }
      },
    },

    tone: {
      red: { root: { colorPalette: "red" } },
      orange: { root: { colorPalette: "orange" } },
      amber: { root: { colorPalette: "amber" } },
      yellow: { root: { colorPalette: "yellow" } },
      lime: { root: { colorPalette: "lime" } },
      green: { root: { colorPalette: "green" } },
      emerald: { root: { colorPalette: "emerald" } },
      teal: { root: { colorPalette: "teal" } },
      cyan: { root: { colorPalette: "cyan" } },
      sky: { root: { colorPalette: "sky" } },
      blue: { root: { colorPalette: "blue" } },
      indigo: { root: { colorPalette: "indigo" } },
      violet: { root: { colorPalette: "violet" } },
      purple: { root: { colorPalette: "purple" } },
      fuchsia: { root: { colorPalette: "fuchsia" } },
      pink: { root: { colorPalette: "pink" } },
      rose: { root: { colorPalette: "rose" } },
      slate: { root: { colorPalette: "slate" } },
      gray: { root: { colorPalette: "gray" } },
      zinc: { root: { colorPalette: "zinc" } },
      neutral: { root: { colorPalette: "neutral" } },
      stone: { root: { colorPalette: "stone" } },
    },
  },

  defaultVariants: {
    size: "lg",
    radius: "md",
    visual: "soft",
    tone: "neutral",
  },
});
