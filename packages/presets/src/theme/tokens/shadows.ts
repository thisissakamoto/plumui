import { defineSemanticTokens } from "@pandacss/dev";

export const shadows = defineSemanticTokens.shadows({
  ring: {
    DEFAULT: {
      value: {
        base: "0 0 0 1px {colors.stroke}",
      }
    },
    offset: {
      value: {
        base: "0 0 0 1px {colors.neutral.a40}",
      }
    }
  },
  xs: {
    value: {
      base: "0 1px 1px 0 {colors.black.a20}",
    },
  },

  sm: {
    value: {
      base: "0 2px 4px 0 {colors.black.a20}",
    },
  },

  md: {
    value: {
      base: "0 4px 8px -1px {colors.black.a20}",
    },
  },

  lg: {
    value: {
      base:
        "0 8px 16px -3px {colors.black.a20}, 0 2px 4px -1px {colors.black.a20}",
    },
  },

  xl: {
    value: {
      base:
        "0 16px 32px -6px {colors.black.a20}, 0 4px 8px -2px {colors.black.a20}",
    },
  },

  "2xl": {
    value: {
      base:
        "0 32px 64px -12px {colors.black.a20}, 0 8px 16px -4px {colors.black.a20}",
    },
  },
});
