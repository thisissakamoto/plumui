import { defineRecipe } from "@pandacss/dev"

export const sectionRecipe = defineRecipe({
  className: "section",
  base: {
    w: '{sizes.full}',
  },
  variants: {
    content: {
      end: { alignContent: 'end' },
      start: { alignContent: 'start' },
      center: { alignContent: 'center' },
    },
    screen: {
      full: { minHeight: 'dvh' },
      fit: { minHeight: 'fit-content' },
    }
  },
  defaultVariants: {
    screen: 'fit',
    content: 'center',
  }
});
