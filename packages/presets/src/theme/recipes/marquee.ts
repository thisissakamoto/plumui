import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const marqueeRecipe = defineSlotRecipe({
  className: 'marquee',
  slots: ["root", "content", "edge", "item", "viewport"],
  base: {
    content: {
      ...styles.layout.hstack,

      minW: "max-content",
      gap: "var(--marquee-spacing)",

      "&[data-side=start], &[data-side=end]": {
        animation: "marqueeX var(--marquee-duration) linear var(--marquee-delay) var(--marquee-loop-count) forwards",
      }
    },
    viewport: {
      ...styles.layout.hstack,

      w: "{sizes.full}",
    },
    item: {
      minW: "max-content"
    },
    edge: {
      w: "20%",
      zIndex: "9",

      "&[data-side=start]": {
        bg: "linear-gradient(to right, {colors.bg}, {colors.transparent})"
      },
      "&[data-side=end]": {
        bg: "linear-gradient(to left, {colors.bg}, {colors.transparent})"
      }
    }
  }
});
