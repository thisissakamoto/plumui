import { segmentGroupAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const segmentGroupRecipe = defineSlotRecipe({
  className: "segment-group",
  slots: segmentGroupAnatomy.keys(),
  base: {
    label: styles.typography.label,
    itemControl: styles.layout.stack,
    root: {
      "--px": "",
      "--bg": "",
      "--radii": "",
      "--shadow": "",
      "--stroke": "",
      "--text-fs": "",
      "--height": "",
      "--fg-checked": "",
      "--bg-checked": "",
      "--stroke-checked": "",

      zIndex:"1",
      bg: "var(--bg)",
      p: "{spacing.2}",
      gap: "{spacing.4}",
      alignItems: "center",
      flexDirection: "row",
      display: "inline-flex",
      rounded: "var(--radii)",
      border: "1px solid var(--stroke)",
      _vertical:{
        flexDirection: "column",
      }
    },
    indicator: {
      zIndex: "-1",
      w: "var(--width)",
      h: "var(--height)",
      left: "var(--left)",
      shadow: "var(--shadow)",
      bg: "var(--bg-checked)",
      rounded: "calc(var(--radii) - {spacing.2})",
      borderBottom: "2px solid var(--stroke-checked)",
    },
    item: {
      ...styles.pressable.button,

      px: "var(--px)",
      w: "{sizes.full}",
      height: "var(--height)",
      color: "{colors.fg.subtle}",

      "&:hover:not([data-state=checked])": {
        color: "{colors.fg}"
      },

      _checked: {
        color: "var(--fg-checked)",
      }
    },
    itemText: {
      color: "inherit",
      fontWeight: "500",
      textAlign: "center",
      fontSize: "var(--text-fs)",
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
          "--px": "{spacing.8}",
          "--height": "{sizes.24}",
          "--text-fs": "{fontSizes.12}",
        }
      },
      sm: {
        root: {
          "--px": "{spacing.8}",
          "--height": "{sizes.28}",
          "--text-fs": "{fontSizes.14}",
        }
      },
      md: {
        root: {
          "--px": "{spacing.10}",
          "--height": "{sizes.32}",
          "--text-fs": "{fontSizes.14}",
        }
      },
      lg: {
        root: {
          "--px": "{spacing.10}",
          "--height": "{sizes.36}",
          "--text-fs": "{fontSizes.14}",
        }
      },
      xl: {
        root: {
          "--px": "{spacing.10}",
          "--height": "{sizes.40}",
          "--text-fs": "{fontSizes.14}",
        }
      }
    },
    visual: {
      filled: {
        root: {
          "--bg": "{colors.bg.surface}",
          "--stroke": "{colors.transparent}",
          "--fg-checked": "{colors.colorPalette.fg}",
          "--bg-checked": "{colors.colorPalette.fill}",
        }
      },
      underlined: {
        root: {
          "--radii": "{radii.none}",
          "--bg": "{colors.transparent}",
          "--stroke": "{colors.transparent}",
          "--bg-checked": "{colors.transparent}",
          "--fg-checked": "{colors.colorPalette.fg.subtle}",
          "--stroke-checked": "{colors.colorPalette.stroke}",
        }
      },
      ghost: {
        root: {
          p: "{spacing.0}",
          "--bg": "{colors.transparent}",
          "--stroke": "{colors.transparent}",
          "--bg-checked": "{colors.transparent}",
          "--fg-checked": "{colors.colorPalette.fg.subtle}",
        }
      },
      elevated: {
        root: {
          "--bg": "{colors.bg.surface}",
          "--stroke": "{colors.transparent}",
          "--bg-checked": "{colors.bg.segment}",
          "--fg-checked": "{colors.colorPalette.fg.subtle}",
          "--shadow": "{shadows.md}, {shadows.ring.offset}",
        }
      },
    },

    tone: {
      red: {
        root: {
          colorPalette: "red",
        },
      },
      orange: {
        root: {
          colorPalette: "orange",
        },
      },
      amber: {
        root: {
          colorPalette: "amber",
        },
      },
      yellow: {
        root: {
          colorPalette: "yellow",
        },
      },
      lime: {
        root: {
          colorPalette: "lime",
        },
      },
      green: {
        root: {
          colorPalette: "green",
        },
      },
      emerald: {
        root: {
          colorPalette: "emerald",
        },
      },
      teal: {
        root: {
          colorPalette: "teal",
        },
      },
      cyan: {
        root: {
          colorPalette: "cyan",
        },
      },
      sky: {
        root: {
          colorPalette: "sky",
        },
      },
      blue: {
        root: {
          colorPalette: "blue",
        },
      },
      indigo: {
        root: {
          colorPalette: "indigo",
        },
      },
      violet: {
        root: {
          colorPalette: "violet",
        },
      },
      purple: {
        root: {
          colorPalette: "purple",
        },
      },
      fuchsia: {
        root: {
          colorPalette: "fuchsia",
        },
      },
      pink: {
        root: {
          colorPalette: "pink",
        },
      },
      rose: {
        root: {
          colorPalette: "rose",
        },
      },
      slate: {
        root: {
          colorPalette: "slate",
        },
      },
      gray: {
        root: {
          colorPalette: "gray",
        },
      },
      zinc: {
        root: {
          colorPalette: "zinc",
        },
      },
      neutral: {
        root: {
          colorPalette: "neutral",
        },
      },
      stone: {
        root: {
          colorPalette: "stone",
        },
      },
    },
  },
  defaultVariants: {
    size: "lg",
    tone: "blue",
    radius: "full",
    visual: "filled",
  }
})
