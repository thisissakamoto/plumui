import { toggleGroupAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe, defineStyles } from "@pandacss/dev";
import { styles } from "./styles";

const _checked = defineStyles({
  bg: "var(--bg-active)",
  color: "var(--fg-active)",
});

export const toggleGroupRecipe = defineSlotRecipe({
  className: "toggle-group",
  slots: toggleGroupAnatomy.keys(),
  base: {
    root: {
      "--size": "",
      "--radii": "",
      "--stroke": "",
      "--text-fs": "",
      "--bg-active": "",
      "--fg-active": "",
      "--direction": "row",


      w: "fit",
      overflow: "clip",
      gap: "{spacing.0}",
      display: "inline-flex",
      rounded: "var(--radii)",
      border: "1px solid var(--stroke)",

      _vertical: {
        flexDirection: "column",
      },

      _horizontal: {
        flexDirection: "row",
      }
    },
    item: {
      ...styles.pressable.button,
      _checked,


      h: "var(--size)",
      minW: "var(--size)",
      color: "{colors.fg}",
      position: "relative",
      fontSize: "var(--text-fs)",
      borderColor: "var(--stroke)",

      "&:hover:not([data-state=on])": {
        bg: "{colors.bg.subtle}",
      },

      "&:not(:first-child)": {
        _before: {
          top: "50%",
          height: "80%",
          content: '""',
          opacity: "0.8",
          display: "block",
          width: "{sizes.1}",
          left: "{spacing.0}",
          bg: "var(--stroke)",
          position: "absolute",
          translate: "0% -50%",
        }
      },

      _vertical: {
        "&:not(:first-child)": {
          _before: {
            left: "50%",
            width: "80%",
            top: "{spacing.0}",
            height: "{sizes.1}",
            translate: "-50% 0%",
          }
        }
      }

    }
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
    },
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
    visual: {
      outlined: {
        root: {
          "--stroke": "{colors.stroke}",
          "--fg-active": "{colors.colorPalette.fg.subtle}",
          "--bg-active": "{colors.colorPalette.fill.subtle}",
        },
      },
      filled: {
        root: {
          "--stroke": "{colors.stroke}",
          "--fg-active": "{colors.colorPalette.fg}",
          "--bg-active": "{colors.colorPalette.fill}",
        },
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
    tone: "neutral",
    radius: "full",
    visual: "outlined",
  }
})
