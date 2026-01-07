import { toggleGroupAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const buttonGroupRecipe = defineSlotRecipe({
  className: "button-group",
  slots: toggleGroupAnatomy.keys(),
  base: {
    root: {
      "--fg": "",
      "--bg": "",
      "--size": "",
      "--radii": "",
      "--stroke": "",
      "--text-fs": "",
      "--bg-hover": "",

      w: "fit",
      gap: "0",
      fontWeight: "500",
      position: "relative",
      display: "inline-flex",

      "& > *:not(:first-of-type)::before": {
        w: "1px",
        h: "50%",
        left: "-1px",
        content: "''",
        opacity: "0.15",
        rounded: "{radii.4}",
        position: "absolute",
        bg: "{colors.current}",
      },

      "& > *:not(:first-of-type)": {
        borderLeft: "none",
      },

      "& > *:first-of-type": {
        borderRight: "none",
        borderTopLeftRadius: "var(--radii)",
        borderBottomLeftRadius: "var(--radii)",
      },

      "& > *:last-of-type": {
        borderTopRightRadius: "var(--radii)",
        borderBottomRightRadius: "var(--radii)",
      }
    },
    item: {
      ...styles.pressable.button,

      bg: "var(--bg)",
      h: "var(--size)",
      color: "var(--fg)",
      minW: "var(--size)",
      fontSize: "var(--text-fs)",
      px: "calc(var(--size) * 0.4)",
      border: "1px solid var(--stroke)",

      _hover: {
        bg: "var(--bg-hover)",
      },

      _active: {
        bg: "color-mix(in oklab, var(--bg-hover), var(--mix-5) {colors.transparent})"
      },

      "&[data-icon-only=true]": {
        px: "{spacing.0}",
        boxSize: "var(--size)"
      },

      "&[data-pressable=false]": {
        "--bg-hover": "{colors.transparent}",
      }
    }
  },
  variants: {
    detach: {
      true: {
        root: {
          border: "none",
          gap: "{spacing.4}",

          "& > button:not(:first-of-type)::before": {
            opacity: "0",
            content: "''",
          }
        },
        item: {
          rounded: "var(--radii)",
          border: "1px solid var(--stroke)",
        },
      }
    },
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
          "--text-fs": "{fontSizes.14}",
        },
      },
    },
    radius: {
      xs: {
        root: {"--radii": "{radii.4}"}
      },
      sm: {
        root: {"--radii": "{radii.8}"}
      },
      md: {
        root: {"--radii": "{radii.12}"}
      },
      lg: {
        root: {"--radii": "{radii.16}"}
      },
      xl: {
        root: {"--radii": "{radii.20}"}
      },
      full: {
        root: {"--radii": "{radii.full}"}
      },
      none: {
        root: {"--radii": "{radii.0}"}
      }
    },
    visual: {
      outlined: {
        root: {
          "--bg": "{colors.transparent}",
          "--fg": "{colors.colorPalette.fg.subtle}",
          "--stroke": "{colors.colorPalette.stroke}",
          "--bg-hover": "{colors.colorPalette.fill.muted}",
        },
      },
      filled: {
        root: {
          "--fg": "{colors.colorPalette.fg}",
          "--bg": "{colors.colorPalette.fill}",
          "--bg-hover": "{colors.colorPalette.fill.hover}",
        },
      },
      soft: {
        root: {
          "--stroke": "{colors.transparent}",
          "--fg": "{colors.colorPalette.fg.subtle}",
          "--bg": "{colors.colorPalette.fill.subtle}",
          "--bg-hover": "{colors.colorPalette.fill.subtle.hover}",
        },
      },
      ghost: {
        root: {
          "--bg": "{colors.transparent}",
          "--stroke": "{colors.transparent}",
          "--fg": "{colors.colorPalette.fg.subtle}",
          "--bg-hover": "{colors.colorPalette.fill.muted}",
        },
      },
      surface: {
        root: {
          "--bg": "{colors.bg.surface}",
          "--bg-hover": "{colors.bg.on}",
          "--stroke": "{colors.transparent}",
          "--fg": "{colors.colorPalette.fg.subtle}",
        },
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
    detach: false,
    tone: "neutral",
    visual: "filled",
  }
})
