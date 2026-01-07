import { defineRecipe } from "@pandacss/dev";

export const textRecipe = defineRecipe({
  className: "text",
  base: {
    color: "inherit",
    fontSize: "inherit",
    fontFamily: "inherit",
  },
  variants: {
    break: {
      wrap: { textWrap: "wrap" },
      pretty: { textWrap: "pretty" },
      balance: { textWrap: "balance" },
      nowrap: { textWrap: "nowrap" },
    },
    align: {
      left: { textAlign: "left" },
      right: { textAlign: "right" },
      center: { textAlign: "center" },
      justify: { textAlign: "justify" },
    },
    size: {
      "8": { fontSize: "{fontSizes.8}", lineHeight: "{lineHeights.md}", letterSpacing: "{letterSpacings.md}" },
      "10": { fontSize: "{fontSizes.10}", lineHeight: "{lineHeights.md}", letterSpacing: "{letterSpacings.md}" },
      "12": { fontSize: "{fontSizes.12}", lineHeight: "{lineHeights.sm}", letterSpacing: "{letterSpacings.md}" },
      "13": { fontSize: "{fontSizes.13}", lineHeight: "{lineHeights.sm}", letterSpacing: "{letterSpacings.md}" },
      "14": { fontSize: "{fontSizes.14}", lineHeight: "{lineHeights.md}", letterSpacing: "{letterSpacings.md}" },
      "16": { fontSize: "{fontSizes.16}", lineHeight: "{lineHeights.md}", letterSpacing: "{letterSpacings.md}" },
      "18": { fontSize: "{fontSizes.18}", lineHeight: "{lineHeights.md}", letterSpacing: "{letterSpacings.md}" },
      "20": { fontSize: "{fontSizes.20}", lineHeight: "{lineHeights.md}", letterSpacing: "{letterSpacings.md}" },
      "24": { fontSize: "{fontSizes.24}", lineHeight: "{lineHeights.sm}", letterSpacing: "{letterSpacings.md}" },
      "28": { fontSize: "{fontSizes.28}", lineHeight: "{lineHeights.sm}", letterSpacing: "{letterSpacings.md}" },
      "32": { fontSize: "{fontSizes.32}", lineHeight: "{lineHeights.xs}", letterSpacing: "{letterSpacings.sm}" },
      "36": { fontSize: "{fontSizes.36}", lineHeight: "{lineHeights.xs}", letterSpacing: "{letterSpacings.sm}" },
      "40": { fontSize: "{fontSizes.40}", lineHeight: "{lineHeights.xs}", letterSpacing: "{letterSpacings.md}" },
      "48": { fontSize: "{fontSizes.48}", lineHeight: "{lineHeights.xs}", letterSpacing: "{letterSpacings.md}" },
      "56": { fontSize: "{fontSizes.56}", lineHeight: "{lineHeights.xs}", letterSpacing: "{letterSpacings.md}" },
      "64": { fontSize: "{fontSizes.64}", lineHeight: "{lineHeights.xs}", letterSpacing: "{letterSpacings.md}" },
      "80": { fontSize: "{fontSizes.80}", lineHeight: "{lineHeights.xs}", letterSpacing: "{letterSpacings.md}" },
      "96": { fontSize: "{fontSizes.96}", lineHeight: "{lineHeights.xs}", letterSpacing: "{letterSpacings.md}" },
      "128": {
        fontSize: "{fontSizes.128}",
        lineHeight: "{lineHeights.xs}",
        letterSpacing: "{letterSpacings.xs}",
      },
    },
    weight: {
      thin: { fontWeight: "100" },
      light: { fontWeight: "200" },
      regular: { fontWeight: "400" },
      medium: { fontWeight: "500" },
      semibold: { fontWeight: "600" },
      bold: { fontWeight: "700" },
      extrabold: { fontWeight: "800" },
      black: { fontWeight: "900" },
    },
    case: {
      normal: { textTransform: "none" },
      upper: { textTransform: "uppercase" },
      lower: { textTransform: "lowercase" },
      title: { textTransform: "capitalize" },
    },
    truncate: {
      true: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      },
    },
    trim: {
      none: {},
      cap: {
        textBox: "cap",
      },
      both: {
        textBox: "cap",
        textBoxTrim: "both",
      },
    },


  },
  defaultVariants: {
    break: "pretty",
  },
});
