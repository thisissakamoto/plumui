import { defineRecipe } from "@pandacss/dev";

export const gridRecipe = defineRecipe({
  className: "grid",
  description: "Reusable grid layout component",

  base: {
    display: "grid",
    w: "{sizes.full}",
    gap: "{spacing.4}",
  },

  variants: {
    cols: {
      "1":  { gridTemplateColumns: "repeat(1, 1fr)" },
      "2":  { gridTemplateColumns: "repeat(2, 1fr)" },
      "3":  { gridTemplateColumns: "repeat(3, 1fr)" },
      "4":  { gridTemplateColumns: "repeat(4, 1fr)" },
      "5":  { gridTemplateColumns: "repeat(5, 1fr)" },
      "6":  { gridTemplateColumns: "repeat(6, 1fr)" },
      "7":  { gridTemplateColumns: "repeat(7, 1fr)" },
      "8":  { gridTemplateColumns: "repeat(8, 1fr)" },
      "9":  { gridTemplateColumns: "repeat(9, 1fr)" },
      "10": { gridTemplateColumns: "repeat(10, 1fr)" },
      "11": { gridTemplateColumns: "repeat(11, 1fr)" },
      "12": { gridTemplateColumns: "repeat(12, 1fr)" },
    },

    rows: {
      "1":  { gridTemplateRows: "repeat(1, 1fr)" },
      "2":  { gridTemplateRows: "repeat(2, 1fr)" },
      "3":  { gridTemplateRows: "repeat(3, 1fr)" },
      "4":  { gridTemplateRows: "repeat(4, 1fr)" },
      "5":  { gridTemplateRows: "repeat(5, 1fr)" },
      "6":  { gridTemplateRows: "repeat(6, 1fr)" },
      "7":  { gridTemplateRows: "repeat(7, 1fr)" },
      "8":  { gridTemplateRows: "repeat(8, 1fr)" },
      "9":  { gridTemplateRows: "repeat(9, 1fr)" },
      "10": { gridTemplateRows: "repeat(10, 1fr)" },
      "11": { gridTemplateRows: "repeat(11, 1fr)" },
      "12": { gridTemplateRows: "repeat(12, 1fr)" },
    },

    items: {
      end:     { alignItems: "end" },
      start:   { alignItems: "start" },
      center:  { alignItems: "center" },
      stretch: { alignItems: "stretch" },
    },

    justify: {
      end:     { justifyItems: "end" },
      start:   { justifyItems: "start" },
      center:  { justifyItems: "center" },
      stretch: { justifyItems: "stretch" },
    },

    flow: {
      row:       { gridAutoFlow: "row" },
      col:       { gridAutoFlow: "column" },
      dense:     { gridAutoFlow: "dense" },
      rowDense:  { gridAutoFlow: "row dense" },
      colDense:  { gridAutoFlow: "column dense" },
    },

    place: {
      end:     { placeItems: "end" },
      start:   { placeItems: "start" },
      center:  { placeItems: "center" },
      stretch: { placeItems: "stretch" },
    },

    colSpan: {
      "1":  { gridColumn: "span 1 / span 1" },
      "2":  { gridColumn: "span 2 / span 2" },
      "3":  { gridColumn: "span 3 / span 3" },
      "4":  { gridColumn: "span 4 / span 4" },
      "5":  { gridColumn: "span 5 / span 5" },
      "6":  { gridColumn: "span 6 / span 6" },
      "7":  { gridColumn: "span 7 / span 7" },
      "8":  { gridColumn: "span 8 / span 8" },
      "9":  { gridColumn: "span 9 / span 9" },
      "10": { gridColumn: "span 10 / span 10" },
      "11": { gridColumn: "span 11 / span 11" },
      "12": { gridColumn: "span 12 / span 12" },
      full: { gridColumn: "1 / -1" },
    },

    rowSpan: {
      "1":  { gridRow: "span 1 / span 1" },
      "2":  { gridRow: "span 2 / span 2" },
      "3":  { gridRow: "span 3 / span 3" },
      "4":  { gridRow: "span 4 / span 4" },
      "5":  { gridRow: "span 5 / span 5" },
      "6":  { gridRow: "span 6 / span 6" },
      "7":  { gridRow: "span 7 / span 7" },
      "8":  { gridRow: "span 8 / span 8" },
      "9":  { gridRow: "span 9 / span 9" },
      "10": { gridRow: "span 10 / span 10" },
      "11": { gridRow: "span 11 / span 11" },
      "12": { gridRow: "span 12 / span 12" },
      full: { gridRow: "1 / -1" },
    },
  },

  defaultVariants: {
    cols: "1",
    rows: "1",
    flow: "row",
    items: "stretch",
    place: "stretch",
    justify: "stretch",
  },
});
