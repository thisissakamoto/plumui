import { switchAnatomy } from "@ark-ui/anatomy";
import {defineSlotRecipe} from "@pandacss/dev";
import { styles } from "./styles";

export const switchRecipe = defineSlotRecipe({
  className: "switch",
  slots: switchAnatomy.keys(),
  base: {
    root: {
      ...styles.pressable.button,

      "--thumb-width": "",
      "--thumb-height": "",
      "--control-width": "",
      "--control-height": "",

      justifyContent: "space-between"
    },
    label: styles.typography.label,
    control: {
      _focusVisible: styles.pressable._focusVisible,
      _disabled: styles.pressable._disabled,

      rounded: "full",
      w: "var(--control-width)",
      h: "var(--control-height)",
      alignItems: "center",
      display: "inline-flex",
      justifyContent: "start",
      bg: "{colors.bg.surface}",
      transition: `
      background-color 200ms ease-in-out
      transform 200ms ease-in-out`,

      _checked: {
        bg: "{colors.colorPalette.fill}"
      },

      _active: {
        scale: "0.98",
      },
    },
    thumb: {
      rounded: "full",
      bg: "{colors.white}",
      shadow: "{shadows.sm}",
      display: "inline-block",
      w: "var(--thumb-width)",
      h: "var(--thumb-height)",
      marginInlineStart: "{sizes.2}",
      transition: "margin 350ms cubic-bezier(.32, .72, 0, 1)",

      _active: {
        scale: "0.98",
      },

      _checked: {
        bg: "{colors.colorPalette.fg.inverse}",
        marginInlineStart: "calc(var(--control-width) - var(--thumb-width) - 2px)",
      }
    },
  },
  variants: {
    size: {
      xs: {
        root: {
          "--thumb-width": "{sizes.18}",
          "--thumb-height": "{sizes.12}",
          "--control-width": "{sizes.32}",
          "--control-height": "{sizes.16}",
        }
      },
      sm: {
        root: {
          "--thumb-width": "{sizes.20}",
          "--thumb-height": "{sizes.14}",
          "--control-width": "{sizes.36}",
          "--control-height": "{sizes.18}",
        }
      },
      md: {
        root: {
          "--thumb-width": "{sizes.22}",
          "--thumb-height": "{sizes.16}",
          "--control-width": "{sizes.40}",
          "--control-height": "{sizes.20}",
        }
      },
      lg: {
        root: {
          "--thumb-width": "{sizes.24}",
          "--thumb-height": "{sizes.18}",
          "--control-width": "{sizes.44}",
          "--control-height": "{sizes.22}",
        }
      },
      xl: {
        root: {
          "--thumb-width": "calc({sizes.24} + 2px)",
          "--thumb-height": "{sizes.20}",
          "--control-width": "{sizes.48}",
          "--control-height": "{sizes.24}",
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
    size: "md",
    tone: "blue",
  }
})
