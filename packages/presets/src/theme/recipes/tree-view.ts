import { treeViewAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const treeViewRecipe = defineSlotRecipe({
  className: "tree-view",
  slots: treeViewAnatomy.extendWith("branchIndentGuide").keys(),
  base: {
    tree: {
      ...styles.layout.vstack,
      gap: "{spacing.2}"
    },
    branchText: {
      ...styles.typography.description,
      flex: "1",
      fontWeight: "400",
      fontSize: "inherit",
    },
    itemText: {
      ...styles.typography.description,
      flex: "1",
      fontWeight: "400",
      fontSize: "inherit",
    },
    branchIndentGuide: {
      mr: "{spacing.4}",
      ml: "{spacing.20}",
      height: "var(--height)",
    },
    root: styles.layout.vstack,
    branch: styles.layout.vstack,

    branchIndicator: {
      color: "{colors.fg.subtle}",

      "&[data-state=open]": {
        rotate: "180deg",
      }
    },
    item: {
      ...styles.pressable.item,

      gap: "{spacing.6}",
      fontSize: "{fontSizes.13}",
      color: "{colors.fg.subtle}",
    },
    branchControl: {
      ...styles.pressable.item,

      gap: "{spacing.6}",
      fontSize: "{fontSizes.13}",
      color: "{colors.fg.subtle}",
    },
  },
})
