import { defineRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const downloadRecipe = defineRecipe({
  className: "download",
  base: styles.pressable.button
});
