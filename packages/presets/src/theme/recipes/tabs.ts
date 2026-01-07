import { tabsAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const tabsRecipe = defineSlotRecipe({
  className: "tabs",
  slots: tabsAnatomy.extendWith("panel").keys(),
  base: {
    root: {
      "--px": "",
      "--height": "",
      "--bg": "",
      "--radii": "",
      "--shadow": "",
      "--text-fs": "",
      "--fg-selected": "",
      "--stroke-selected": "",
      "--bg-selected": "",

      display: "inline-flex",
      flexDirection: "column",

      _vertical: {
        flexDirection: "column",
      },
    },
    trigger: {
      ...styles.pressable.button,

      px: "var(--px)",
      fontWeight: "500",
      w: "{sizes.full}",
      h: "var(--height)",
      rounded: "var(--radii)",
      fontSize: "var(--text-fs)",
      bg: "{colors.transparent}",
      color: "{colors.fg.subtle}",

      "&:hover:not([data-selected])": { color: "{colors.fg}" },

      _selected: {
        color: "var(--fg-selected)",
      }
    },
    indicator: {
      zIndex: "-1",
      w: "var(--width)",
      h: "var(--height)",
      shadow: "var(--shadow)",
      bg: "var(--bg-selected)",
      rounded: "calc(var(--radii) - {spacing.2})",
      borderBottom: "2px solid var(--stroke-selected)",
    },
    list: {
      zIndex: "1",
      bg: "var(--bg)",
      display: "flex",
      p: "{spacing.2}",
      gap: "{spacing.4}",
      position: "relative",
      rounded: "var(--radii)",
      _vertical: { flexDirection: "column" }
    },
    content: {
      w: "full",
    },
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
          "--fg-selected": "{colors.colorPalette.fg}",
          "--bg-selected": "{colors.colorPalette.fill}",
        }
      },
      underlined: {
        root: {
          "--radii": "{radii.none}",
          "--bg": "{colors.transparent}",
          "--fg-selected": "{colors.colorPalette.fg.subtle}",
          "--stroke-selected": "{colors.colorPalette.stroke}",
        }
      },
      elevated: {
        root: {
          "--shadow": "{shadows.md}",
          "--bg": "{colors.bg.surface}",
          "--bg-selected": "{colors.bg.segment}",
          "--fg-selected": "{colors.colorPalette.fill}",
        }
      },
      ghost: {
        root: {
          "--bg": "{colors.transparent}",
          "--bg-selected": "{colors.transparent}",
          "--fg-selected": "{colors.colorPalette.fg.subtle}",
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
});
