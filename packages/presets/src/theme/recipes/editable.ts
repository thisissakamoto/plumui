import { editableAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const editableRecipe = defineSlotRecipe({
  className: "editable",
  slots: editableAnatomy.keys(),
  base: {
    root: {
      ...styles.layout.vstack,
    },
    preview: {
      ...styles.typography.body,
      minW: "160px",
      py: "{spacing.4}",
      px: "{spacing.8}",
      rounded: "{radii.8}",
      color: "{colors.fg}",

      _hover: {
        bg: "{colors.bg.subtle}"
      }
    },
    input: styles.form.input,
    area: styles.layout.base,
    label: styles.typography.label,
    control: styles.layout.stack,
    editTrigger: styles.pressable.button,
    cancelTrigger: styles.pressable.button,
    submitTrigger: styles.pressable.button,
  },
});
