import { splitterAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const splitterRecipe = defineSlotRecipe({
  className: "splitter",
  slots: splitterAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      gap: "{spacing.6}",
      alignItems: "center",
      _vertical: {
        flexDirection: "column"
      }
    },
    panel: {
      boxSize: "{sizes.full}",
      bg: "var(--colors-system-bg-surface)",
    },
    "resizeTrigger": {
      ...styles.pressable.button,

      flexShrink: "0",
      w: "{sizes.6}",
      h: "{sizes.24}",
      rounded: "{radii.full}",
      bg: "{colors.bg.surface}",

      _vertical: {
        h: "{sizes.6}",
        w: "{sizes.24}",
      },
    }
  },
})
