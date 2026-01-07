import { fieldAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const inputGroupRecipe = defineSlotRecipe({
  className: "input-group",
  slots: fieldAnatomy.extendWith("addon", "content", "message", "helper").keys(),
  base: {
    root: {
      "--bg": "",
      "--radii": "",
      "--height": "",
      "--stroke": "",
      "--text-fs": "",
      "--shadow": "",
      "--label-fs": "",
      "--direction": "",

      display: "flex",
      w: "{sizes.full}",
      gap: "{spacing.6}",
      flexDirection: "column",
    },
    content: {
      _focusWithin: styles.form._focusVisible,
      _focusVisible: styles.form._focusVisible,

      bg: "var(--bg)",
      w: "{sizes.full}",
      overflow: "clip",
      flexWrap: "nowrap",
      minH: "var(--height)",
      display: "inline-flex",
      shadow: "var(--shadow)",
      rounded: "var(--radii)",
      color: "var(--colors-system-fg)",
      border: "1px solid var(--stroke)",

      _vertical: {
        flexDirection: "column"
      }
    },
    addon: {
      alignItems: "center",
      display: "inline-flex",
      justifyContent: "center",

      "&[data-stretch=true]": {
        alignSelf: "stretch",
      },

      _vertical: {
        flexDirection: "column"
      }
    },
    label: {
      ...styles.typography.label,
      fontSize: "var(--label-fs)",
    },
    input: {
      ...styles.form.input,
      fontSize: "var(--text-fs)",
    },
    textarea: {
      ...styles.form.textarea,
      fontSize: "var(--text-fs)",
    },
  },
  variants: {
    labelSize: {
      "xs": { root: { "--label-fs": "{fontSizes.10}" } },
      "sm": { root: { "--label-fs": "{fontSizes.12}" } },
      "md": { root: { "--label-fs": "{fontSizes.14}" } },
      "lg": { root: { "--label-fs": "{fontSizes.16}" } },
      "xl": { root: { "--label-fs": "{fontSizes.18}" } },
    },
    textSize: {
      "xs": { root: { "--text-fs": "{fontSizes.10}" } },
      "sm": { root: { "--text-fs": "{fontSizes.12}" } },
      "md": { root: { "--text-fs": "{fontSizes.14}" } },
      "lg": { root: { "--text-fs": "{fontSizes.16}" } },
      "xl": { root: { "--text-fs": "{fontSizes.18}" } },
    },
    layout: {
      stacked: {
        content: {
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
        },
      },
      inline: {
        content: {
          alignItems: "center",
          flexDirection: "row",
        },
      }
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

    size: {
      xs: {
        root: {
          "--height": "{sizes.28}",
        },
      },
      sm: {
        root: {
          "--height": "{sizes.32}",
        },
      },
      md: {
        root: {
          "--height": "{sizes.36}",
        },
      },
      lg: {
        root: {
          "--height": "{sizes.40}",
        },
      },
      xl: {
        root: {
          "--height": "{sizes.44}",
        },
      },
    },

    visual: {
      ghost: {
        root: {
          "--bg": "{colors.transparent}",
        }
      },
      filled: {
        root: {
          "--bg": "{colors.bg.subtle}",
        }
      },
      outlined: {
        root: {
          "--bg": "{colors.bg}",
          "--stroke": "{colors.stroke}",
        }
      },
      underlined: {
        root: {
          "--px": "{spacing.0}",
          "--radii": "{radii.0}",
          borderBottom: "2px solid {colors.stroke}",
        }
      },
      elevated: {
        root: {
          "--bg": "{colors.bg.elevated}",
          "--shadow": "{shadows.xs}, {shadows.ring.offset}",
        }
      }
    },
  },
  defaultVariants: {
    size: "md",
    radius: "md",
    textSize: "md",
    labelSize: "md",
    layout: "inline",
    visual: "elevated",
  },
});
