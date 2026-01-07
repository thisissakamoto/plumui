import { tagsInputAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const tagsInputRecipe = defineSlotRecipe({
  className: "tags-input",
  slots: tagsInputAnatomy.keys(),
  base: {
    control: {
      ...styles.layout.stack,
      h: "auto",
    },
    input: {
      ...styles.form.input,
      flex: "50 1 40px",
      w: "{sizes.full}",
    },
    itemText: {
      ...styles.typography.body,

      fontSize: "{fontSizes.14}",
      lineHeight: "{lineHeights.sm}",
    },
    item: styles.pressable.button,
    "clearTrigger": styles.pressable.button,
    itemInput: {
      ...styles.form.input,

      px: "{spacing.4}",
    },
    label: styles.typography.label,
    itemDeleteTrigger: styles.pressable.button,
  },
});
