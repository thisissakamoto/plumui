import { toggleGroupAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const toggleRecipe = defineSlotRecipe({
  className: "toggle",
  slots: toggleGroupAnatomy.extendWith("indicator").keys(),
  base: {
    root: {
      ...styles.pressable.button,

      "--bg": "",
      "--fg": "",
      "--size": "",
      "--radii": "",
      "--bg-pressed": "",
      "--fg-pressed": "",

      minW: "var(--size)",
      minH: "var(--size)",
      rounded: "var(--radii)",
      color: "var(--fg, {colors.fg})",
      border: "1px solid var(--stroke)",
      bg: "var(--bg, {colors.transparent})",
      _hover: {
        bg: "{colors.bg.subtle}",
      },
      _pressed: {
        bg: "var(--bg-pressed)",
        color: "var(--fg-pressed)",
        _hover: { bg: "var(--bg-pressed)" }
      },
    },
  },
  variants: {
    size: {
      xs: {
        root: {
          "--size": "{sizes.24}",
        }
      },
      sm: {
        root: {
          "--size": "{sizes.28}",
        }
      },
      md: {
        root: {
          "--size": "{sizes.32}",
        }
      },
      lg: {
        root: {
          "--size": "{sizes.36}",
        }
      },
      xl: {
        root: {
          "--size": "{sizes.40}",
        }
      },
    },
    radius: {
      none: {
        root: {
          "--radii": "{radii.none}",
        }
      },
      xs: {
        root: {
          "--radii": "{radii.4}",
        }
      },
      sm: {
        root: {
          "--radii": "{radii.6}"
        }
      },
      md: {
        root: {
          "--radii": "{radii.8}",
        }
      },
      lg: {
        root: {
          "--radii": "{radii.10}",
        }
      },
      xl: {
        root: {
          "--radii": "{radii.12}",
        }
      },
      full: {
        root: {
          "--radii": "{radii.full}",
        }
      },
    },
    visual: {
      filled: {
        root: {
          "--fg-pressed": "{colors.colorPalette.fg}",
          "--bg-pressed": "{colors.colorPalette.fill}",
        }
      },
      soft: {
        root: {
          "--fg-pressed": "{colors.colorPalette.fg.subtle}",
          "--bg-pressed": "{colors.colorPalette.fill.subtle}",
        }
      },
      surface: {
        root: {
          "--bg": "{colors.bg.surface}",
          "--bg-pressed": "{colors.bg.surface}",
          "--fg-pressed": "{colors.colorPalette.fg.subtle}",
        }
      }
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
    radius: "xl",
    tone: "neutral",
    visual: "filled",
  }
});
