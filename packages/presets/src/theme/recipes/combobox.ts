import { comboboxAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

;

export const comboboxRecipe = defineSlotRecipe({
  className: "combobox",
  slots: comboboxAnatomy.extendWith("empty").keys(),
  base: {
    root: {
      ...styles.layout.base,
      gap: "{spacing.6}",
    },
    trigger: styles.pressable.button,
    list: {
      ...styles.layout.vstack,
      gap: "{spacing.2}"
    },
    input: styles.form.input,
    item: styles.pressable.item,
    control: styles.layout.stack,
    itemGroup: styles.layout.base,
    label: styles.typography.label,
    content: styles.overlay.content,
    itemText: {
      ...styles.typography.subtitle,
      flex: "1",
      fontSize: "inherit",
    },
    itemIndicator: styles.layout.base,
    clearTrigger: styles.pressable.button,
    itemGroupLabel: styles.typography.label,
    empty: {
      ...styles.layout.center,
      ...styles.typography.body,

      minH: "160px",
    }
  },
});
