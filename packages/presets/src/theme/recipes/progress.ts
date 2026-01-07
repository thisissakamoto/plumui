import { progressAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const progressRecipe = defineSlotRecipe({
  className: "progress",
  slots: progressAnatomy.keys(),
  base: {
    root: {
      ...styles.layout.base,

      "--size": "",
      "--radii": "",
      "--percent": "",
      "--thickness": "",
      "--height": "",
    },
    label: styles.typography.label,
    valueText: styles.typography.body,
    circleTrack: {
      stroke: "{colors.stroke}",
    },
    track: {
      w: "{sizes.full}",
      h: "var(--height)",
      overflow: "hidden",
      rounded: "var(--radii)",
      bg: "{colors.bg.surface}",
    },
    range: {
      h: "{sizes.full}",
      bg: "{colors.colorPalette.fill}",
    },
    circleRange: {
      stroke: "{colors.colorPalette.fill}",
    }
  },
  variants: {
    size: {
      "xs": {
        root: { "--size": "{sizes.20}", "--height": "{sizes.2}" }
      },
      "sm": {
        root: { "--size": "{sizes.24}", "--height": "{sizes.4}" }
      },
      "md": {
        root: { "--size": "{sizes.28}", "--height": "{sizes.6}" }
      },
      "lg": {
        root: { "--size": "{sizes.32}", "--height": "{sizes.8}" }
      },
      "xl": {
        root: { "--size": "{sizes.40}", "--height": "{sizes.10}" }
      },
    },
    thickness: {
      "2": {
        root: { "--thickness": "{sizes.2}", }
      },
      "4": {
        root: { "--thickness": "{sizes.4}", }
      },
      "6": {
        root: { "--thickness": "{sizes.6}", }
      },
      "8": {
        root: { "--thickness": "{sizes.8}", }
      },
      "10": {
        root: { "--thickness": "{sizes.10}", }
      }
    },
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
    tone: {
      red: { root: { colorPalette: "red" } },
      orange: { root: { colorPalette: "orange" } },
      amber: { root: { colorPalette: "amber" } },
      yellow: { root: { colorPalette: "yellow" } },
      lime: { root: { colorPalette: "lime" } },
      green: { root: { colorPalette: "green" } },
      emerald: { root: { colorPalette: "emerald" } },
      teal: { root: { colorPalette: "teal" } },
      cyan: { root: { colorPalette: "cyan" } },
      sky: { root: { colorPalette: "sky" } },
      blue: { root: { colorPalette: "blue" } },
      indigo: { root: { colorPalette: "indigo" } },
      violet: { root: { colorPalette: "violet" } },
      purple: { root: { colorPalette: "purple" } },
      fuchsia: { root: { colorPalette: "fuchsia" } },
      pink: { root: { colorPalette: "pink" } },
      rose: { root: { colorPalette: "rose" } },
      slate: { root: { colorPalette: "slate" } },
      gray: { root: { colorPalette: "gray" } },
      zinc: { root: { colorPalette: "zinc" } },
      neutral: { root: { colorPalette: "neutral" } },
      stone: { root: { colorPalette: "stone" } },
    }
  },
  defaultVariants: {
    size: "sm",
    tone: "blue",
    radius: "md",
    thickness: "2",
  }
})
