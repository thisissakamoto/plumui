import { menuAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const menuRecipe = defineSlotRecipe({
  className: "menu",
  slots: menuAnatomy.keys(),
  base: {
    arrow: styles.overlay.arrow,
    item: styles.pressable.item,
    content: styles.overlay.content,
    indicator: styles.layout.base,
    itemGroup: styles.layout.base,
    triggerItem: styles.layout.base,
    trigger: styles.pressable.button,
    itemText: styles.typography.body,
    arrowTip: styles.overlay.arrowTip,
    itemIndicator: styles.layout.base,
    contextTrigger: styles.pressable.button,
    itemGroupLabel: styles.typography.label,
  },
});
