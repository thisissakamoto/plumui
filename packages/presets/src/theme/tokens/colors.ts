import { defineTokens } from "@pandacss/dev";


export const colors = defineTokens.colors({
  white: { value: "#FFFFFF" },
  black: { value: "#000000" },
  current: { value: "currentColor" },
  transparent: { value: "color-mix(in oklab, {colors.bg.inverse} 0%, transparent)" },
});
