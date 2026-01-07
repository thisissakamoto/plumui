import { signaturePadAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const signaturePadRecipe = defineSlotRecipe({
  className: "signature-pad",
  slots: signaturePadAnatomy.keys(),
  base: {
    segment: {
      fill: "{colors.colorPalette.fill}",
    },
    control: {
      ...styles.layout.base,
      _focusVisible: styles.pressable._focusVisible,
    },
    root: styles.layout.base,
    label: styles.typography.label,
    "clearTrigger": {
      ...styles.pressable.button,
      zIndex: "2",
    },
  },

  variants: {
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
    tone: "neutral",
  }
});
