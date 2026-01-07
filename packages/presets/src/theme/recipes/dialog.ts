import { dialogAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const dialogRecipe = defineSlotRecipe({
  className: "dialog",
  slots: dialogAnatomy.keys(),
  base: {
    content: {
      ...styles.overlay.content,
      w: "400px",
    },
    title: styles.typography.title,
    trigger: styles.pressable.button,
    backdrop: styles.overlay.backdrop,
    description: styles.typography.body,
    closeTrigger: styles.pressable.button,
    positioner: {
      ...styles.overlay.positioner,
      p: "{spacing.12"
    },
  },

  variants: {
    placement: {
      auto: {
        positioner: {
          alignItems: "center",
          justifyContent: "end",
          "@media (min-width: 640px)": {
            alignItems: "center",
            justifyContent: "center",
          }
        }
      },
      "top-left": {
        positioner: {
          alignItems: "start",
          justifyContent: "start",
        }
      },
      "top-right": {
        positioner: {
          alignItems: "end",
          justifyContent: "start",
        }
      },
      "bottom-left": {
        positioner: {
          alignItems: "start",
          justifyContent: "end",
        }
      },
      "bottom-right": {
        positioner: {
          alignItems: "end",
          justifyContent: "end",
        }
      },
      "center": {
        positioner: {
          alignItems: "center",
          justifyContent: "center",
        }
      },
      "top-center": {
        positioner: {
          alignItems: "center",
          justifyContent: "start",
        }
      },
      "bottom-center": {
        positioner: {
          alignItems: "center",
          justifyContent: "end",
        }
      }
    }
  },
  defaultVariants: {
    placement: "auto"
  }
});
