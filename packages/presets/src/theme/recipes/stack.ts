import { defineRecipe } from "@pandacss/dev";

export const stackRecipe = defineRecipe({
  className: "stack",
  base: {
    display: "flex",
  },
  variants: {
    place: {
      "top": { alignItems: "flex-start", justifyContent: "center" },
      "top-end": { alignItems: "flex-start", justifyContent: "flex-end" },
      "top-start": { alignItems: "flex-start", justifyContent: "flex-start" },
      "center": { alignItems: "center", justifyContent: "center" },
      "center-end": { alignItems: "center", justifyContent: "flex-end" },
      "center-start": { alignItems: "center", justifyContent: "flex-start" },
      "bottom": { alignItems: "flex-end", justifyContent: "center" },
      "bottom-end": { alignItems: "flex-end", justifyContent: "flex-end" },
      "bottom-start": { alignItems: "flex-end", justifyContent: "flex-start" },
    },
    layout: {
      inline: { flexDirection: "row" },
      stacked: { flexDirection: "column" },
    },
    items: {
      center: { alignItems: "center" },
      start: { alignItems: "flex-start" },
      end: { alignItems: "flex-end" },
      stretch: { alignItems: "stretch" },
      baseline: { alignItems: "baseline" },
    },
    justify: {
      center: { justifyContent: "center" },
      start: { justifyContent: "flex-start" },
      end: { justifyContent: "flex-end" },
      between: { justifyContent: "space-between" },
      around: { justifyContent: "space-around" },
      evenly: { justifyContent: "space-evenly" },
    },
    wrap: {
      true: { flexWrap: "wrap" },
      false: { flexWrap: "nowrap" },
    },
  },
  defaultVariants: {
    items: "start",
    justify: "start",
    layout: "inline",
    wrap: false,
  },
});
