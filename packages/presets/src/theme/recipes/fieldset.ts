import { fieldsetAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const fieldsetRecipe = defineSlotRecipe({
  className: "fieldset",
  slots: fieldsetAnatomy.keys(),
  base: {
    root: {
      border: "none",
    },
    legend: styles.typography.title,
    helperText: styles.typography.description,
    errorText: {
      ...styles.typography.body,
      color: "{colors.fg.destructive}",
    },
  },
});
