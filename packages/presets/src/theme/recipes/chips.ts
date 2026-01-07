import { checkboxAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const chipsRecipe = defineSlotRecipe({
  className: "chips",
  slots: checkboxAnatomy.extendWith("item").keys(),
  base: {
    root: {
      ...styles.layout.base,

      "--bg": "",
      "--fg": "",
      "--px": "",
      "--radii": "",
      "--shadow": "",
      "--height": "",
      "--stroke": "",
      "--text-fs": "",
      "--bg-hover": "",
      "--bg-checked": "",
      "--fg-checked": "",
      "--stroke-checked": "",

      flexWrap: "wrap",
      gap: "{spacing.4}",
      alignItems: "center",
      display: "inline-flex",
    },
    item: {
      ...styles.pressable.button,

      px: "var(--px)",
      bg: "var(--bg)",
      gap: "{sizes.4}",
      h: "var(--height)",
      color: "var(--fg)",
      shadow: "var(--shadow)",
      rounded: "var(--radii)",
      fontSize: "var(--text-fs)",
      border: "1px solid var(--stroke)",

      _checked: {
        bg: "var(--bg-checked)",
        color: "var(--fg-checked)",
        borderColor: "var(--stroke-checked)",
      },
      "&:hover:not([data-state=checked])": {
        bg: "var(--bg-hover)"
      },
    },
    label: {
      ...styles.typography.label,

      color: "inherit",
      fontSize: "inherit",
    },
    indicator: {
      ...styles.layout.base,
      color: "inherit",
    },
  },
  variants: {
    radius: {
      xs: {
        root: { "--radii": "{radii.4}" }
      },
      sm: {
        root: { "--radii": "{radii.8}" }
      },
      md: {
        root: { "--radii": "{radii.12}" }
      },
      lg: {
        root: { "--radii": "{radii.16}" }
      },
      xl: {
        root: { "--radii": "{radii.20}" }
      },
      full: {
        root: { "--radii": "{radii.full}" }
      },
      none: {
        root: { "--radii": "{radii.none}" }
      },
    },

    size: {
      xs: {
        root: {
          "--px": "{spacing.8}",
          "--height": "{sizes.24}",
          "--text-fs": "{fontSizes.12}",
        },
      },
      sm: {
        root: {
          "--px": "{spacing.10}",
          "--height": "{sizes.28}",
          "--text-fs": "{fontSizes.14}",
        },
      },
      md: {
        root: {
          "--px": "{spacing.12}",
          "--height": "{sizes.32}",
          "--text-fs": "{fontSizes.14}",
        },
      },
      lg: {
        root: {
          "--px": "{spacing.12}",
          "--height": "{sizes.36}",
          "--text-fs": "{fontSizes.14}",
        },
      },
      xl: {
        root: {
          "--px": "{spacing.16}",
          "--height": "{sizes.40}",
          "--text-fs": "{fontSizes.14}",
        },
      },
    },
    visual: {
      filled: {
        root: {
          "--fg": "{colors.fg}",
          "--bg": "{colors.bg.subtle}",
          "--bg-hover": "{colors.bg.surface}",
          "--fg-checked": "{colors.colorPalette.fg}",
          "--bg-checked": "{colors.colorPalette.fill}",
        },
      },
      outlined: {
        root: {
          "--fg": "{colors.fg}",
          "--stroke": "{colors.stroke}",
          "--bg": "{colors.transparent}",
          "--bg-hover": "{colors.bg.subtle}",
          "--bg-checked": "{colors.transparent}",
          "--fg-checked": "{colors.colorPalette.fg.subtle}",
          "--stroke-checked": "{colors.colorPalette.stroke}",
        },
      },
      soft: {
        root: {
          "--fg": "{colors.fg}",
          "--bg": "{colors.bg.subtle}",
          "--bg-hover": "{colors.bg.surface}",
          "--fg-checked": "{colors.colorPalette.fg.subtle}",
          "--bg-checked": "{colors.colorPalette.fill.subtle.hover}",
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
    size: "md",
    tone: "blue",
    radius: "full",
    visual: "filled",
  },
});
