import { numberInputAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const numberInputRecipe = defineSlotRecipe({
  className: "number-input",
  slots: numberInputAnatomy.keys(),
  base: {
    root: styles.layout.base,
    input: styles.form.input,
    scrubber: styles.layout.base,
    label: styles.typography.label,
    decrementTrigger: {
      ...styles.pressable.button,

      px: "{spacing.12}",
      boxSize: "{sizes.full}"
    },
    incrementTrigger: {
      ...styles.pressable.button,

      px: "{spacing.12}",
      boxSize: "{sizes.full}"
    },
    valueText: { color: "var(--colors-system-fg)"},
  }
})
