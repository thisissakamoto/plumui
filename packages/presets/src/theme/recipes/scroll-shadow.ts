import { defineRecipe } from "@pandacss/dev";

export const scrollShadowRecipe = defineRecipe({
  className: "scroll-shadow",
  base: {
    position: "relative",

    _horizontal: {
      overflowX: "auto",
    },

    _vertical: {
      overflowY: "auto",
    },

    _focusVisible: {
      border: "none",
      outline: "none",
    },

    "&[data-hide-scrollbar=true]": {
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    }
  },
  variants: {
    visual: {
      fade: {
        _vertical: {
          "&[data-top-scroll=true]": {
            "--scroll-linear-gradient": "0deg, {colors.bg} calc(100% - var(--scroll-shadow-size)), {colors.transparent}",
            maskImage: "linear-gradient(var(--scroll-linear-gradient))",
          },
          "&[data-bottom-scroll=true]": {
            "--scroll-linear-gradient": "180deg, {colors.bg} calc(100% - var(--scroll-shadow-size)), {colors.transparent}",
            maskImage: "linear-gradient(var(--scroll-linear-gradient))",
          },
          "&[data-top-bottom-scroll=true]": {
            "--scroll-linear-gradient": "{colors.bg}, {colors.bg}, {colors.transparent} 0, {colors.bg} var(--scroll-shadow-size), {colors.bg} calc(100% - var(--scroll-shadow-size)), {colors.transparent}",
            maskImage: "linear-gradient(var(--scroll-linear-gradient))",
          },
        },
        _horizontal: {
          "&[data-left-scroll=\"true\"]": {
            "--scroll-linear-gradient": "270deg, {colors.bg} calc(100% - var(--scroll-shadow-size)), {colors.transparent}",
            maskImage: "linear-gradient(var(--scroll-linear-gradient))",
          },
          "&[data-right-scroll=\"true\"]": {
            "--scroll-linear-gradient": "90deg, {colors.bg} calc(100% - var(--scroll-shadow-size)), {colors.transparent}",
            maskImage: "linear-gradient(var(--scroll-linear-gradient))",
          },
          "&[data-left-right-scroll=\"true\"]": {
            "--scroll-linear-gradient": "to right, {colors.bg}, {colors.bg}, {colors.transparent} 0, {colors.bg} var(--scroll-shadow-size), {colors.bg} calc(100% - var(--scroll-shadow-size)), {colors.transparent}",
            maskImage: "linear-gradient(var(--scroll-linear-gradient))",
          },
        },
      },
    },
  },
  defaultVariants: {
    visual: "fade",
  }
});
