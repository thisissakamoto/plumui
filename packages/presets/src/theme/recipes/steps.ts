import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const stepsRecipe = defineSlotRecipe({
  className: "steps",
  slots: ["root", "content", "list", "item", "trigger", "indicator", "separator", "completedContent", "nextTrigger", "prevTrigger", "progress", "trigger"],
  base: {
    list: { display: "flex" },
    content: { w: "{sizes.full}" },
    trigger: styles.pressable.button,
    prevTrigger: styles.pressable.button,
    nextTrigger: styles.pressable.button,
    completedContent: { w: "{sizes.full}" },
  }
});
