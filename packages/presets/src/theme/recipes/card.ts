import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const cardRecipe = defineSlotRecipe({
  className: "card",
  slots: ["root", "header", "title", "subtitle", "description", "media", "body", "footer"],
  base: {
    root: {
      "--px": "",
      "--py": "",
      "--radii": "",
      "--stroke": "",
      "--sahdow": "",
      "--direction": "",
      "--bg": "{colors.bg}",

      bg: "var(--bg)",
      display: "flex",
      overflow: "clip",
      w: "{sizes.full}",
      shadow: "var(--shadow)",
      rounded: "var(--radii)",
      border: "1px solid var(--stroke)",
      flexDirection: "var(--direction)",

      _vertical: {
        flexDirection: "column",
      },
      _horizontal: {
        flexDirection: "row",
      }
    },
    body: {
      ...styles.layout.stack,

      _vertical: {
        flexDirection: "column",
      },
      _horizontal: {
        flexDirection: "row",
      }
    },
    footer: {
      ...styles.layout.stack,

      _vertical: {
        flexDirection: "column",
      },
      _horizontal: {
        flexDirection: "row",
      }
    },
    header: {
      ...styles.layout.stack,

      _vertical: {
        flexDirection: "column",
      },
      _horizontal: {
        flexDirection: "row",
      }
    },
    media: styles.layout.box,
    title: styles.typography.subtitle,
    subtitle: styles.typography.subtitle,
    description: styles.typography.body,
  },
  variants: {
    radius: {
      xs: {
        root: {"--radii": "{radii.4}"},
      },
      sm: {
        root: {"--radii": "{radii.8}"},
      },
      md: {
        root: {"--radii": "{radii.12}"},
      },
      lg: {
        root: {"--radii": "{radii.16}"},
      },
      xl: {
        root: {"--radii": "{radii.20}"},
      },
      "2xl": {
        root: {"--radii": "{radii.24}"},
      },
      "3xl": {
        root: {"--radii": "{radii.28}"},
      },
      full: {
        root: {"--radii": "{radii.full}"},
      },
      none: {
        root: {"--radii": "{radii.nonw}"},
      }
    },
    visual: {
      outlined: {
        root: {
          "--stroke": "{colors.stroke}",
          "--bg": "{colors.transparent}",
        }
      },
      filled: {
        root: {
          "--bg": "{colors.bg.subtle}"
        }
      },
      elevated: {
        root: {
          "--bg": "{colors.bg.elevated}",
          "--shadow": "{shadows.md}, {shadows.ring.offset}",
        }
      },
    }
  },
  defaultVariants: {
    radius: "xl",
    visual: "elevated",
  }
});
