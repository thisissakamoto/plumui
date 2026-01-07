import { defineRecipe } from "@pandacss/dev";

export const skeletonRecipe = defineRecipe({
  className: "skeleton",
  base: {
    display: "inline",
    overflow: "hidden",
    boxDecorationBreak: "clone",
    color: "{colors.transparent}",
  },
  variants: {
    effect: {
      pulse: {
        animation: "2s alternate-reverse infinite pulse"
      },
      shimmer: {
        position: "relative",
        bg: "{colors.bg.surface}",
        _after: {
          content: "''",
          inset: "{spacing.0}",
          position: "absolute",
          translate: "-100% 0%",
          animation: "2s linear infinite shine",
          bg: `linear-gradient(to right in oklab, transparent 0%, color-mix(in oklab, {colors.bg.surface}, {colors.bg.inverse} 6%) 50%, transparent 100%)`,
        },
      }
    },
    radius: {
      xs: { rounded: "{radii.4}" },
      sm: { rounded: "{radii.8}" },
      md: { rounded: "{radii.12}" },
      lg: { rounded: "{radii.16}" },
      xl: { rounded: "{radii.20}" },
      full: { rounded: "{radii.full}" },
      none: { rounded: "0" },
    }
  },
  defaultVariants: {
    effect: "pulse",
    radius: "md",
  }
});
