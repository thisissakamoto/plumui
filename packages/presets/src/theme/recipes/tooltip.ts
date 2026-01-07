import { tooltipAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const tooltipRecipe = defineSlotRecipe({
  className: "tooltip",
  slots: tooltipAnatomy.keys(),
  base: {
    arrow: styles.overlay.arrow,
    content: styles.typography.body,
    trigger: styles.pressable.button,
    "arrowTip": styles.overlay.arrowTip,
  }
})
