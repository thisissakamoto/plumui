import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const floatingPanelRecipe = defineSlotRecipe({
  className: "floating-panel",
  slots: [
    "root",
    "body",
    "title",
    "header",
    "control",
    "content",
    "trigger",
    "positioner",
    "dragTrigger",
    "closeTrigger",
    "stageTrigger",
    "resizeTrigger",
  ],
  base: {
    body: {
      ...styles.layout.vstack,
      h: "var(--height)",
    },
    content: {
      ...styles.overlay.content,
      display: "flex",
      flexDirection: "column",
      "&[data-maximized]": {
        rounded: "{radii.0}",
      }
    },
    "dragTrigger": {
      ...styles.pressable.button,
      w: "{sizes.full}",
      justifyContent: "start",
      _disabled: { opacity: "1" }
    },
    positioner: styles.layout.base,
    root: styles.layout.box,
    header: styles.layout.hstack,
    control: styles.layout.stack,
    title: styles.typography.title,
    trigger: styles.pressable.button,
    "stageTrigger": styles.pressable.button,
    "closeTrigger": styles.pressable.button,
    "resizeTrigger": styles.pressable.button,
  },
});
