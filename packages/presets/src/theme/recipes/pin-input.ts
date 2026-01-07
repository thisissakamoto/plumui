import { pinInputAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const pinInputRecipe = defineSlotRecipe({
  className: "pinInput",
  slots: pinInputAnatomy.keys(),
  base: {
    root: styles.layout.center,
    label: styles.typography.label,
    control: {
      ...styles.layout.stack,

      w: "{sizes.full}",
      gap: "{spacing.8}",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      ...styles.form.input,

      w: "{sizes.full}",
      px: "{spacing.0}",
      textAlign: "center",
    },
  }
})
