import { collapsibleAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const collapsibleRecipe = defineSlotRecipe({
  className: "collapsible",
  slots: collapsibleAnatomy.extendWith("indicator").keys(),
  base: {
    indicator: {
      ...styles.layout.base,

      transition: "rotate 150ms ease-out",

      _open: {
        rotate: "180deg",
      },
    },
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    trigger: styles.pressable.button,
  },
});
