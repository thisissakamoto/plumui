import { defineRecipe } from "@pandacss/dev";

export const imageRecipe = defineRecipe({
  className: "img",
  base: {
    border: "none",
    display: "block",
    boxSize: "{sizes.auto}",
  },

  variants: {
    radius: {
      xs: { rounded: "{radii.4}" },
      sm: { rounded: "{radii.8}" },
      md: { rounded: "{radii.12}" },
      lg: { rounded: "{radii.16}" },
      xl: { rounded: "{radii.20}" },
      full: { rounded: "{radii.full}" },
      none: { rounded: "{radii.none}" },
    },

    fit: {
      fill: { objectFit: "fill" },
      none: { objectFit: "none" },
      cover: { objectFit: "cover" },
      contain: { objectFit: "contain" },
      scaleDown: { objectFit: "scale-down" },
    },

    align: {
      left: { mr: "auto" },
      right: { ml: "auto" },
      center: { mx: "auto" },
    },
  },

  defaultVariants: {
    fit: "cover",
    radius: "lg",
  },
});
