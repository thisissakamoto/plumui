import { defineTokens } from "@pandacss/dev";

export const fonts = defineTokens.fonts({
  sans: {
    value:
    "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI Variable Display, Segoe UI, Helvetica, Apple Color Emoji, Arial, sans-serif, Segoe UI Emoji, Segoe UI Symbol"
  },
  mono: {
    value:
      "monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New",
  },
});
