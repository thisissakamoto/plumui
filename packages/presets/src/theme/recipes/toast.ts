import { toastAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const toastRecipe = defineSlotRecipe({
  className: "toast",
  slots: toastAnatomy.keys(),
  base: {
    title: {
      ...styles.typography.subtitle,
      fontSize: "{fontSizes.14}"
    },
    root: {
      ...styles.layout.base,
      bg: "{colors.bg}",
      scale: "var(--scale, 1)",
      translate: "0% var(--y)",
      zIndex: "var(--z-index)",
    },
    closeTrigger: styles.pressable.button,
    actionTrigger: styles.pressable.button,
    description: styles.typography.description,
  },
})
