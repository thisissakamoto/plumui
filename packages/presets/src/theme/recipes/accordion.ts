import { accordionAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const accordionRecipe = defineSlotRecipe({
  className: "accordion",
  slots: accordionAnatomy.keys(),

  base: {
    root: {
      display: "flex",
      w: "{sizes.full}",
      flexDirection: "column"
    },
    item: {
      display: "flex",
      flexDirection: "column",

      "&:not(:last-child)": {
        borderBottom: "1px solid {colors.stroke}"
      }
    },
    itemTrigger: {
      ...styles.pressable.button,

      fontWeight: "500",
      w: "{sizes.full}",
      px: "{spacing.16}",
      py: "{spacing.16}",
      transition: "none",
      color: "{colors.fg}",
      fontSize: "{fontSizes.14}",
      justifyContent: "space-between",

      "&:hover:not([data-state=open])": {
        bg: "{colors.bg.subtle}",
      },

    },
    itemIndicator: {
      flexShrink: "0",
      boxSize: "{sizes.16}",
      color: "{colors.fg.subtle}",
      transition: `
        rotate 200ms ease-out
      `,

      _open: {
        rotate: "-180deg",
      },

      "& > svg": {
        boxSize: "{sizes.16}",
        color: "{colors.fg.subtle}",
      }
    },
    itemContent: {
      maxH: "999px",
      w: "{sizes.full}",
      pb: "{spacing.16}",
      px: "{spacing.16}",
      fontSize: "{fontSizes.14}",
      transition: "padding-bottom 150ms ease-out",

      _open: { pb: "{spacing.0}" },
      _closed: { pb: "{spacing.0}" },
    },
  },
});
