import { paginationAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const paginationRecipe = defineSlotRecipe({
  className: "pagination",
  slots: paginationAnatomy.keys(),
  base: {
    ellipsis: { display: "inline-flex" },
    root: styles.layout.base,
    item: styles.pressable.button,
    nextTrigger: styles.pressable.button,
    prevTrigger: styles.pressable.button,
  },
});
