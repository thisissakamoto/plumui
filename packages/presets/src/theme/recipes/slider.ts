import { sliderAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const sliderRecipe = defineSlotRecipe({
  className: "slider",
  slots: sliderAnatomy.extendWith("stepGroup", "step").keys(),
  base: {
    root: {
      "--track-size": "",
      "--step-size": "",
      "--track-outer-size": "",
      "--track-inner-width": "",
      "--track-outer-height": "",
      "--track-inner-height": "",
      "--bg": "{colors.colorPalette.fill}",

      _vertical: {
        flexDirection: "row",
      },

      display: "flex",
      flexDirection: "column",
    },
    control: styles.layout.base,
    track: {
      _vertical: {
        h: "{sizes.auto}",
        borderBlockEndColor: "var(--bg)",
        borderBlock: "calc(var(--track-outer-size) / 2) solid {colors.transparent}",
        w: "var(--track-size)",
      },

      _horizontal: {
        w: "{sizes.auto}",
        borderInlineStartColor: "var(--bg)",
        borderInline: "calc(var(--track-outer-size) / 2) solid {colors.transparent}",
        h: "var(--track-size)",
      },

      rounded: "full",
      overflow: "hidden",
      bg: "{colors.bg.surface}",
    },
    range: {
      bg: "var(--bg)",
      alignItems: "center",
      justifyContent: "end",
      display: "inline-flex",
      _vertical: { w: "{sizes.full}" },
      _horizontal: { h: "{sizes.full}" },
    },
    thumb: {
      _focusVisible: styles.pressable._focusVisible,
      _disabled: styles.pressable._disabled,

      zIndex: 1,
      cursor: "grab",
      bg: "var(--bg)",
      alignItems: "center",
      display: "inline-flex",
      rounded: "{radii.full}",
      justifyContent: "center",
      transition: `transform 150ms ease-out`,

      _before: {
        content: "''",
        bg: "{colors.white}",
        shadow: "{shadows.sm}",
        rounded: "{radii.full}",
        w: "var(--track-inner-width)",
        h: "var(--track-inner-height)",
      },

      _dragging: {
        _before: {
          scale: "0.9"
        }
      },

      _vertical: {
        left: "50%",
        w: "{sizes.full}",
        translate: "-50%",
        h: "var(--track-outer-size)",
        _before: {
          h: "var(--track-inner-width)",
          w: "var(--track-inner-height)",
        }
      },

      _horizontal: {
        top: "50%",
        h: "{sizes.full}",
        translate: "0% -50%",
        w: "var(--track-outer-size)",
      },
    },
    stepGroup: {
      _vertical: {
        left: "-100%",
        alignSelf: "stretch"
      },
      _horizontal: {
        top: "calc(var(--track-size) * -1)",
      },
    },
    step: {
      _disabled: styles.pressable._disabled,

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxSize: "var(--track-size)",

      _before: {
        content: "''",
        bg: "{colors.bg.on}",
        rounded: "{radii.full}",
        boxSize: "var(--step-size)",
      },

      "&[data-state=under-value]": {
        _before: {
          bg: "{colors.colorPalette.fg}"
        }
      },
    },
    markerGroup: styles.layout.base,
    marker: {
      fontSize: "{fontSizes.14}",
    },
    label: styles.typography.label,
    "valueText": styles.typography.body,
  },
  variants: {
    size: {
      xs: {
        root: {
          "--tih": "",
          "--tiw": "",
          "--track-outer-size": "{sizes.20}",
          "--track-size": "{sizes.10}",
          "--step-size": "{sizes.6}",
          "--track-inner-width": "{sizes.18}",
          "--track-inner-height": "{sizes.8}",
        },
      },
      sm: {
        root: {
          "--track-outer-size": "{sizes.20}",
          "--track-size": "{sizes.12}",
          "--step-size": "{sizes.6}",
          "--track-inner-width": "{sizes.18}",
          "--track-inner-height": "{sizes.10}",
        }
      },
      md: {
        root: {
          "--track-outer-size": "{sizes.24}",
          "--track-size": "{sizes.16}",
          "--step-size": "{sizes.6}",
          "--track-inner-width": "{sizes.20}",
          "--track-inner-height": "{sizes.12}",
        }
      },
      lg: {
        root: {
          "--track-outer-size": "{sizes.28}",
          "--track-size": "{sizes.20}",
          "--step-size": "{sizes.6}",
          "--track-inner-width": "{sizes.24}",
          "--track-inner-height": "{sizes.16}",
        }
      },
      xl: {
        root: {
          "--track-outer-size": "{sizes.36}",
          "--track-size": "{sizes.24}",
          "--step-size": "{sizes.8}",
          "--track-inner-width": "{sizes.32}",
          "--track-inner-height": "{sizes.20}",
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
    tone: "blue",
  }
})
