import { radioGroupAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const radioGroupRecipe = defineSlotRecipe({
  className: "radio-group",
  slots: radioGroupAnatomy.extendWith("itemIndicator").keys(),
  base: {
    label: styles.typography.label,
    itemText: styles.typography.subtitle,
    root: {
      display: "flex",
      flexDirection: "column",

      "--radii": "",
      "--size": "",
    },
    item: {
      w: "{sizes.full}",
      gap: "{sizes.12}",
      cursor: "pointer",
      display: "inline-flex",
    },
    itemControl: {
      ...styles.pressable.button,

      boxSize: "var(--size)",
      rounded: "var(--radii)",
      bg: "{colors.bg.elevated}",
      transition: "all .25s ease-out",
      shadow: "{shadows.sm}, {shadows.ring.offset}",

      _checked: {
        bg: "{colors.colorPalette.fill}"
      }
    },
    itemIndicator: {
      ...styles.layout.center,
      position: "relative",
      rounded: "var(--radii)",
      boxSize: "{sizes.full}",

      _before: {
        scale: "1",
        opacity: "0",
        content: "''",
        position: "absolute",
        bg: "{colors.white}",
        rounded: "{sizes.full}",
        boxSize: "{sizes.full}",
        transition: `
          transform .4s linear,
        `
      },

      _checked: {
        _before: {
          opacity: "1",
          scale: "0.425",
        }
      },
    }
  },
  variants: {
    radius: {
      xs: {
        root: {
          "--radii": "{radii.2}",
        },
      },
      sm: {
        root: {
          "--radii": "{radii.4}",
        },
      },
      md: {
        root: {
          "--radii": "{radii.6}",
        },
      },
      lg: {
        root: {
          "--radii": "{radii.8}",
        },
      },
      xl: {
        root: {
          "--radii": "{radii.12}",
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
          "--size": "{sizes.12}",
        }
      },
      sm: {
        root: {
          "--size": "{sizes.16}",
        }
      },
      md: {
        root: {
          "--size": "{sizes.20}",
        }
      },
      lg: {
        root: {
          "--size": "{sizes.24}",
        }
      },
      xl: {
        root: {
          "--size": "{sizes.28}",
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
    size: "sm",
    tone: "blue",
    radius: "full",
  },
})
