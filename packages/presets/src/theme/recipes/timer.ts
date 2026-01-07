import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const timerRecipe = defineSlotRecipe({
  className: "timer",
  slots: ["root", "control", "area", "item", "separator", "actionTrigger"],
  base: {
    root: styles.layout.base,
    area: styles.layout.hstack,
    control: styles.layout.stack,
    "item": {
      ...styles.typography.title,
      fontSize: "{fontSizes.28}"
    },
    separator: {
      ...styles.typography.subtitle,
      fontSize: "{fontSizes.16}"
    },
    "actionTrigger": styles.pressable.button
  }
})
