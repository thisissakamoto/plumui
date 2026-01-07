import { defineRecipe } from "@pandacss/dev";

export const aspectRatioRecipe = defineRecipe({
  className: "aspect-ratio",
  description: "A component for maintaining consistent aspect ratios for its children.",
  base: {
    "--ratio": "",
    "--radii": "",
    "--object-fit": "",

    h: "{sizes.full}",
    w: "{sizes.full}",
    bg: "{colors.bg.subtle",
    aspectRatio: "var(--ratio)",

    "& > *": {
      width: "{sizes.full}",
      height: "{sizes.full}",
      objectFit: "var(--object-fit)"
    },
  },
  variants: {
    radius: {
      xs: { "--radii": "{radii.4}" },
      sm: { "--radii": "{radii.8}" },
      md: { "--radii": "{radii.12}" },
      lg: { "--radii": "{radii.16}" },
      xl: { "--radii": "{radii.20}" },
      none: { "--radii": "{radii.0}" },
      full: { "--radii": "{radii.full}" },
    },
    ratio: {
      "photo": { "--ratio": "3/2" },
      "square": { "--ratio": "1/1" },
      "video": { "--ratio": "16/9" },
      "portrait": { "--ratio": "9/16" },
      "landscape": { "--ratio": "16/9" },
      "golden": { "--ratio": "1.618/1" },
      "widescreen": { "--ratio": "21/9" },
      "cinematic": { "--ratio": "2.39/1" },
      "photo-classic": { "--ratio": "4/3" },
    },
    fit: {
      fill: { "--object-fit": "fill" },
      cover: { "--object-fit": "cover" },
      contain: { "--object-fit": "contain" },
    },
  },
  defaultVariants: {
    fit: "cover",
    radius: "md",
    ratio: "video",
  },
});
