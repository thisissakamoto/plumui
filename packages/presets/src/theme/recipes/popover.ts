import { popoverAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const popoverRecipe = defineSlotRecipe({
  className: "popover",
  slots: popoverAnatomy.keys(),
  base: {
    arrow: styles.overlay.arrow,
    content: styles.overlay.content,
    trigger: styles.pressable.button,
    title: styles.typography.title,
    arrowTip: styles.overlay.arrowTip,
    closeTrigger: styles.pressable.button,
    description: styles.typography.description,
  }
})
