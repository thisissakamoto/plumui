import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const listboxRecipe = defineSlotRecipe({
  className: "listbox",
  slots: [
    "root",
    "label",
    "item",
    "input",
    "empty",
    "content",
    "itemText",
    "itemGroup",
    "valueText",
    "itemIndicator",
    "itemGroupLabel",
  ],
  base: {
    root: {
      ...styles.layout.base,
      _focusVisible: {
        border: "none",
        outline: "none",
      }
    },
    content: {
      ...styles.layout.vstack,
      _focusVisible: {
        border: "none",
        outline: "none",
      }
    },
    input: styles.form.input,
    label: styles.typography.label,
    empty: styles.layout.base,
    item: styles.pressable.item,
    itemGroup: styles.layout.base,
    itemText: styles.typography.body,
    itemIndicator: styles.layout.base,
    valueText: styles.typography.title,
    itemGroupLabel: styles.typography.label,
  },
});
