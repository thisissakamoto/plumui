import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const scrollAreaRecipe = defineSlotRecipe({
  className: "scroll-area",
  slots: ["root", "viewport", "content", "scrollbar", "thumb", "corner"],
  base: {
    root: {
      "--width": "",
      "--height": "",

      boxSize: "auto",
    },
    viewport: {
      overflow: "auto",
      scrollbarWidth: "none",
      boxSize: "{sizes.full}",
      overscrollBehavior: "contain",
    },
    scrollbar: {
      mx: "{sizes.6}",
      my: "{sizes.8}",
      display: "flex",
      w: "var(--width)",
      alignItems: "center",
      rounded: "{radii.full}",
      flexDirection: "column",
    },
    thumb: {
      w: "{sizes.full}",
      rounded: "{radii.full}",
      bg: "color-mix(in oklab, var(--mix-90) {colors.colorPalette.fill}, {colors.transparent})",
    },
    content: styles.layout.vstack,
  },
  variants: {
    size: {
      xs: {
        root: {
          "--width": "{sizes.1}",
        }
      },
      sm: {
        root: {
          "--width": "{sizes.2}",
        }
      },
      md: {
        root: {
          "--width": "{sizes.4}",
        }
      },
      lg: {
        root: {
          "--width": "{sizes.6}",
        }
      },
      xl: {
        root: {
          "--width": "{sizes.8}",
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
