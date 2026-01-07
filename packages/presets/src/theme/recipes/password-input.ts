import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const passwordInputRecipe = defineSlotRecipe({
  className: "password",
  slots: ["root", "label", "control", "visibilityTrigger", "indicator", "input"],
  base: {
    root: styles.layout.base,
    input: styles.form.input,
    indicator: styles.layout.base,
    label: styles.typography.label,
    control: styles.layout.stack,
    "visibilityTrigger": {
      ...styles.pressable.button,

      px: "{spacing.12}",
      boxSize: "{sizes.full}",
    },
  },
  variants: {},
})
