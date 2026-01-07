import { collapsibleAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const alertRecipe = defineSlotRecipe({
  className: "alert",
  slots: collapsibleAnatomy
    .extendWith("title", "description", "indicator", "action")
    .keys(),
  base: {
    root: {
      "--fg": "",
      "--py": "",
      "--px": "",
      "--bg": "",
      "--radii": "",
      "--shadow": "",
      "--stroke": "",
      "--text-fs": "",

      px: "var(--px)",
      display: "flex",
      py: "var(--py)",
      bg: "var(--bg)",
      color: "var(--fg)",
      gap: "{spacing.20}",
      flexDirection: "row",
      rounded: "var(--radii)",
      shadow: "var(--shadow)",
      fontSize: "var(--text-fs)",
      border: "1px solid var(--stroke)",
    },
    content: {
      flexWrap: "wrap",
      flexDirection: "row",
      rowGap: "{spacing.2}",
      display: "inline-flex",
      columnGap: "{spacing.8}",
    },
    indicator: { color: "inherit" },
    title: {
      ...styles.typography.title,

      flex: "1",
      color: "inherit",
      fontSize: "inherit",
      lineHeight: "{lineHeights.md}",
    },
    description: {
      ...styles.typography.description,
      fontSize: "inherit",
      color: "{colors.fg.subtle}",
    },
    action: styles.pressable.button,
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
          "--py": "{spacing.8}",
          "--px": "{spacing.12}",
          "--text-fs": "{fontSizes.14}",
        },
      },
      sm: {
        root: {
          "--py": "{spacing.12}",
          "--px": "{spacing.16}",
          "--text-fs": "{fontSizes.14}",
        },
      },
      md: {
        root: {
          "--py": "{spacing.16}",
          "--px": "{spacing.16}",
          "--text-fs": "{fontSizes.14}",
        },
      },
      lg: {
        root: {
          "--px": "{spacing.20}",
          "--text-fs": "{fontSizes.14}",
          "--py": "calc({spacing.16} + 2px)",
        },
      },
      xl: {
        root: {
          "--py": "{spacing.20}",
          "--px": "{spacing.20}",
          "--text-fs": "{fontSizes.14}",
        },
      },
    },

    visual: {
      filled: {
        root: {
          "--fg": "{colors.colorPalette.fg}",
          "--bg": "{colors.colorPalette.fill}",
        },
        description: { color: "inherit" }
      },
      soft: {
        root: {
          "--fg": "{colors.colorPalette.fg.subtle}",
          "--bg": "{colors.colorPalette.fill.subtle}",
        },
        description: { color: "inherit" }
      },
      elevated: {
        root: {
          "--bg": "{colors.bg.elevated}",
          "--fg": "{colors.colorPalette.fg.subtle}",
          "--shadow": "{shadows.sm}, {shadows.ring.offset}",
        }
      }
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
    size: "md",
    tone: "blue",
    radius: "xl",
    visual: "elevated",
  },
});
