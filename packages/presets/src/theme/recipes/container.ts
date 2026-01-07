import { defineRecipe } from "@pandacss/dev";

export const containerRecipe = defineRecipe({
  className: "container",
  base: {
    px: "{spacing.16}",
    mx: "{spacing.auto}",
    boxSize: "{sizes.full}",
  },
  variants: {
    size: {
      xs: { maxW: "400px" },
      sm: { maxW: "480px" },
      md: { maxW: "640px" },
      lg: { maxW: "800px" },
      xl: { maxW: "960px" },
      "2xl": { maxW: "1280px" },
      "3xl": { maxW: "1600px" },
      "4xl": { maxW: "2560px" },
      "5xl": { maxW: "3840px" },
      "6xl": { maxW: "5120px" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
