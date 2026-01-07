import { selectAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const selectRecipe = defineSlotRecipe({
  className: "select",
  slots: selectAnatomy.keys(),
  base: {
    valueText: {
      textAlign: "start",
      color: "{colors.fg}",
      fontSize: "{fontSizes.14",
    },
    item: styles.pressable.item,
    control: styles.layout.stack,
    label: styles.typography.label,
    content: {
      ...styles.overlay.content,
      w: "var(--reference-width)",
    },
    trigger: styles.pressable.button,
    "itemText": styles.typography.body,
    "clearTrigger": styles.pressable.button,
    "itemGroupLabel": styles.typography.label,
    positioner: {
      w: "var(--reference-width)",
    }
  }
})
