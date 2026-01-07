import { defineSemanticTokens } from "@pandacss/dev";
import {
  amber, amberAlpha, amberDark, amberDarkAlpha,
  blackAlpha,
  blue, blueAlpha, blueDark, blueDarkAlpha,
  cyan, cyanAlpha, cyanDark, cyanDarkAlpha,
  emerald, emeraldAlpha, emeraldDark, emeraldDarkAlpha,
  fuchsia, fuchsiaAlpha, fuchsiaDark, fuchsiaDarkAlpha,
  gray, grayAlpha, grayDark, grayDarkAlpha,
  green, greenAlpha, greenDark, greenDarkAlpha,
  indigo, indigoAlpha, indigoDark, indigoDarkAlpha,
  lime, limeAlpha, limeDark, limeDarkAlpha,
  neutral, neutralAlpha, neutralDark, neutralDarkAlpha,
  orange, orangeAlpha, orangeDark, orangeDarkAlpha,
  pink, pinkAlpha, pinkDark, pinkDarkAlpha,
  purple, purpleAlpha, purpleDark, purpleDarkAlpha,
  red, redAlpha, redDark, redDarkAlpha,
  rose, roseAlpha, roseDark, roseDarkAlpha,
  sky, skyAlpha, skyDark, skyDarkAlpha,
  slate, slateAlpha, slateDark, slateDarkAlpha,
  stone, stoneAlpha, stoneDark, stoneDarkAlpha,
  teal, tealAlpha, tealDark, tealDarkAlpha,
  violet, violetAlpha, violetDark, violetDarkAlpha,
  whiteAlpha,
  yellow, yellowAlpha, yellowDark, yellowDarkAlpha,
  zinc, zincAlpha, zincDark, zincDarkAlpha
} from "@plumui/colors";
import { createSemanticColorTokens } from "../../utils";

const bg = {
  surface: { value: { base: "{colors.neutral.30}" } },
  segment: { value: { base: "{colors.white}", _dark: "{colors.neutral.50}" } },
  DEFAULT: { value: { base: "{colors.white}", _dark: "{colors.neutral.10}" } },
  inverse: { value: { base: "{colors.neutral.100}", _dark: "{colors.white}" }, },
  on: { value: { base: "color-mix(in oklab, {colors.bg.surface}, var(--mix-5) {colors.fg})" } },
  subtle: { value: { base: "color-mix(in oklab, var(--mix-50) {colors.bg.surface}, {colors.transparent})" } },
  elevated: { value: { base: "{colors.white}", _dark: "{colors.neutral.20}" } },
};

const fg = {
  subtle: { value: { base: "{colors.neutral.60}", _dark: "{colors.neutral.70}" } },
  inverse: { value: { base: "{colors.neutral.10}" } },
  DEFAULT: { value: { base: "{colors.neutral.95}", _dark: "{colors.neutral.100}" } },
  muted: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.60}" } },
};

const stroke = {
  DEFAULT: { value: { base: "{colors.neutral.30}" } },
};

const icon = {
  DEFAULT: { value: { base: "{colors.neutral.60}" } },
};

const fill = {
  destructive: {
    DEFAULT: { value: { base: "{colors.red.70}" } },
  },
  success: {
    DEFAULT: { value: { base: "{colors.green.70}" } },
  },
  warning: {
    DEFAULT: { value: { base: "{colors.yellow.70}" } },
  },
  info: {
    DEFAULT: { value: { base: "{colors.blue.70}" } },
  },
  accent: {
    DEFAULT: { value: { base: "{colors.blue.70}" } },
  },
};

export const colors = defineSemanticTokens.colors({
  bg,
  fg,
  icon,
  fill,
  stroke,
  white: createSemanticColorTokens({
    dark: { alpha: whiteAlpha },
    light: { alpha: whiteAlpha },
  }),
  black: createSemanticColorTokens({
    dark: { alpha: blackAlpha },
    light: { alpha: blackAlpha },
  }),
  gray: createSemanticColorTokens({
    light: {
      base: gray,
      alpha: grayAlpha
    },
    dark: {
      base: grayDark,
      alpha: grayDarkAlpha
    },
    extend: {
      stroke: { value: { base: "{colors.gray.30}" } },
      fg: {
        DEFAULT: { value: { base: "{colors.white}", _dark: "{colors.gray.10}" } },
        subtle: { value: { base: "{colors.gray.95}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.gray.95}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.gray.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-10) {colors.gray.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-20) {colors.gray.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.gray.fill}, {colors.transparent})" } },
      },
    }
  }),
  neutral: createSemanticColorTokens({
    light: {
      base: neutral,
      alpha: neutralAlpha
    },
    dark: {
      base: neutralDark,
      alpha: neutralDarkAlpha
    },
    extend: {
      stroke: { value: { base: "{colors.neutral.30}" } },
      fg: {
        DEFAULT: { value: { base: "{colors.white}", _dark: "{colors.neutral.10}" } },
        subtle: { value: { base: "{colors.neutral.95}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.neutral.95}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.neutral.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-10) {colors.neutral.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-20) {colors.neutral.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.neutral.fill}, {colors.transparent})" } },
      },
    }
  }),
  slate: createSemanticColorTokens({
    light: {
      base: slate,
      alpha: slateAlpha
    },
    dark: {
      base: slateDark,
      alpha: slateDarkAlpha
    },
    extend: {
      stroke: { value: { base: "{colors.slate.30}" } },
      fg: {
        DEFAULT: { value: { base: "{colors.white}", _dark: "{colors.slate.10}" } },
        subtle: { value: { base: "{colors.slate.95}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.slate.95}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.slate.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-10) {colors.slate.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-20) {colors.slate.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.slate.fill}, {colors.transparent})" } },
      },
    }
  }),
  stone: createSemanticColorTokens({
    light: {
      base: stone,
      alpha: stoneAlpha
    },
    dark: {
      base: stoneDark,
      alpha: stoneDarkAlpha
    },
    extend: {
      stroke: { value: { base: "{colors.stone.30}" } },
      fg: {
        DEFAULT: { value: { base: "{colors.white}", _dark: "{colors.stone.10}" } },
        subtle: { value: { base: "{colors.stone.95}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.stone.95}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.stone.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-10) {colors.stone.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-20) {colors.stone.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.stone.fill}, {colors.transparent})" } },
      },
    }
  }),
  zinc: createSemanticColorTokens({
    light: {
      base: zinc,
      alpha: zincAlpha
    },
    dark: {
      base: zincDark,
      alpha: zincDarkAlpha
    },
    extend: {
      stroke: { value: { base: "{colors.zinc.30}" } },
      fg: {
        DEFAULT: { value: { base: "{colors.white}", _dark: "{colors.zinc.10}" } },
        subtle: { value: { base: "{colors.zinc.95}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.zinc.95}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.zinc.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-10) {colors.zinc.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-20) {colors.zinc.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.zinc.fill}, {colors.transparent})" } },
      },
    }
  }),

  // other tones
  amber: createSemanticColorTokens({
    light: {
      base: amber,
      alpha: amberAlpha
    },
    dark: {
      base: amberDark,
      alpha: amberDarkAlpha
    },
    extend: {
      stroke: { value: { base: "{colors.amber.60}" } },
      fg: {
        DEFAULT: { value: { base: "{colors.amber.100}", _dark: "{colors.amber.10}" } },
        subtle: { value: { base: "{colors.amber.80}", _dark: "{colors.amber.70}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.amber.60}", _dark: "{colors.amber.50}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.amber.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-20) {colors.amber.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-30) {colors.amber.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.amber.fill}, {colors.transparent})" } },
      },
    }
  }),
  blue: createSemanticColorTokens({
    light: {
      base: blue,
      alpha: blueAlpha
    },
    dark: {
      base: blueDark,
      alpha: blueDarkAlpha
    },
    extend: {
      stroke: { value: { base: "{colors.blue.60}" } },
      fg: {
        DEFAULT: { value: { base: "{colors.white}" } },
        subtle: { value: { base: "{colors.blue.80}", _dark: "{colors.blue.70}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.blue.70}", _dark: "{colors.blue.60}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.blue.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-10) {colors.blue.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-20) {colors.blue.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.blue.fill}, {colors.transparent})" } },
      },
    }
  }),
  cyan: createSemanticColorTokens({
    light: {
      base: cyan,
      alpha: cyanAlpha
    },
    dark: {
      base: cyanDark,
      alpha: cyanDarkAlpha
    },
    extend: {
      stroke: { value: { base: "{colors.cyan.60}" } },
      fg: {
        DEFAULT: { value: { base: "{colors.cyan.100}", _dark: "{colors.cyan.10}" } },
        subtle: { value: { base: "{colors.cyan.80}", _dark: "{colors.cyan.70}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.cyan.50}", _dark: "{colors.cyan.60}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.cyan.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-20) {colors.cyan.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-30) {colors.cyan.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.cyan.fill}, {colors.transparent})" } },
      },
    }
  }),
  emerald: createSemanticColorTokens({
    light: {
      base: emerald,
      alpha: emeraldAlpha
    },
    dark: {
      base: emeraldDark,
      alpha: emeraldDarkAlpha
    },
    extend: {
      stroke: { value: { base: "{colors.emerald.60}" } },
      fg: {
        DEFAULT: { value: { base: "{colors.white}" } },
        subtle: { value: { base: "{colors.emerald.80}", _dark: "{colors.emerald.70}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.emerald.70}", _dark: "{colors.emerald.50}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.emerald.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-20) {colors.emerald.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-30) {colors.emerald.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.emerald.fill}, {colors.transparent})" } },
      },
    }
  }),
  fuchsia: createSemanticColorTokens({
    light: {
      base: fuchsia,
      alpha: fuchsiaAlpha
    },
    dark: {
      base: fuchsiaDark,
      alpha: fuchsiaDarkAlpha
    },
    extend: {
      stroke: { value: { base: "{colors.fuchsia.60}" } },
      fg: {
        DEFAULT: { value: { base: "{colors.white}" } },
        subtle: { value: { base: "{colors.fuchsia.80}", _dark: "{colors.fuchsia.70}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.fuchsia.70}", _dark: "{colors.fuchsia.50}" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-20) {colors.fuchsia.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-30) {colors.fuchsia.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.fuchsia.fill}, {colors.transparent})" } },
      },
    }
  }),
  green: createSemanticColorTokens({
    light: {
      base: green,
      alpha: greenAlpha
    },
    dark: {
      base: greenDark,
      alpha: greenDarkAlpha
    },
    extend: {
      stroke: { value: { base: "{colors.green.60}" } },
      fg: {
        DEFAULT: { value: { base: "{colors.white}" } },
        subtle: { value: { base: "{colors.green.80}", _dark: "{colors.green.70}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.green.80}", _dark: "{colors.green.40}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.green.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-20) {colors.green.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-30) {colors.green.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.green.fill}, {colors.transparent})" } },
      },
    }
  }),
  indigo: createSemanticColorTokens({
    light: {
      base: indigo,
      alpha: indigoAlpha
    },
    dark: {
      base: indigoDark,
      alpha: indigoDarkAlpha
    },
    extend: {
      stroke: { value: { base: "{colors.indigo.60}" } },
      fg: {
        DEFAULT: { value: { base: "{colors.white}" } },
        subtle: { value: { base: "{colors.indigo.80}", _dark: "{colors.indigo.70}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.indigo.70}", _dark: "{colors.indigo.60}" } },
        subtle: {
          DEFAULT: { value: { base: "color-mix(in oklab, var(--mix-20) {colors.indigo.fill}, {colors.transparent})" } },
          hover: { value: { base: "color-mix(in oklab, var(--mix-30) {colors.indigo.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.indigo.fill}, {colors.transparent})" } },
      }
    }
  }),
  lime: createSemanticColorTokens({
    light: {
      base: lime,
      alpha: limeAlpha
    },
    dark: {
      base: limeDark,
      alpha: limeDarkAlpha
    },
    extend: {
      stroke: { value: { base: "{colors.lime.60}" } },
      fg: {
        DEFAULT: { value: { base: "{colors.lime.100}", _dark: "{colors.lime.10}" } },
        subtle: { value: { base: "{colors.lime.80}", _dark: "{colors.lime.70}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.lime.60}", _dark: "{colors.lime.60}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.lime.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-20) {colors.lime.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-30) {colors.lime.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.lime.fill}, {colors.transparent})" } },
      },
    }
  }),
  orange: createSemanticColorTokens({
    light: {
      base: orange,
      alpha: orangeAlpha
    },
    dark: {
      base: orangeDark,
      alpha: orangeDarkAlpha
    },
    extend: {
      stroke: { value: { base: "{colors.orange.60}" } },
      fg: {
        DEFAULT: { value: { base: "{colors.white}" } },
        subtle: { value: { base: "{colors.orange.80}", _dark: "{colors.orange.70}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.orange.70}", _dark: "{colors.orange.50}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.orange.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-20) {colors.orange.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-30) {colors.orange.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.orange.fill}, {colors.transparent})" } },
      },
    }
  }),
  pink: createSemanticColorTokens({
    light: {
      base: pink,
      alpha: pinkAlpha
    },
    dark: {
      base: pinkDark,
      alpha: pinkDarkAlpha
    },
    extend: {
      stroke: { value: { base: "{colors.pink.60}" } },
      fg: {
        DEFAULT: { value: { base: "{colors.white}" } },
        subtle: { value: { base: "{colors.pink.80}", _dark: "{colors.pink.70}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.pink.70}", _dark: "{colors.pink.50}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.pink.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-20) {colors.pink.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-30) {colors.pink.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.pink.fill}, {colors.transparent})" } },
      },
    }
  }),
  purple: createSemanticColorTokens({
    light: {
      base: purple,
      alpha: purpleAlpha
    },
    dark: {
      base: purpleDark,
      alpha: purpleDarkAlpha
    },
    extend: {
      fg: {
        DEFAULT: { value: { base: "{colors.white}" } },
        subtle: { value: { base: "{colors.purple.80}", _dark: "{colors.purple.70}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.purple.70}", _dark: "{colors.purple.50}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.purple.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-20) {colors.purple.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-30) {colors.purple.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.purple.fill}, {colors.transparent})" } },
      },
      stroke: { value: { base: "{colors.purple.60}" } },
    }
  }),
  red: createSemanticColorTokens({
    light: {
      base: red,
      alpha: redAlpha
    },
    dark: {
      base: redDark,
      alpha: redDarkAlpha
    },
    extend: {
      stroke: { value: { base: "{colors.red.60}" } },
      fg: {
        DEFAULT: { value: { base: "{colors.white}" } },
        subtle: { value: { base: "{colors.red.80}", _dark: "{colors.red.70}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.red.70}", _dark: "{colors.red.50}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.red.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-20) {colors.red.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-30) {colors.red.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.red.fill}, {colors.transparent})" } },
      },
    }
  }),
  rose: createSemanticColorTokens({
    light: {
      base: rose,
      alpha: roseAlpha
    },
    dark: {
      base: roseDark,
      alpha: roseDarkAlpha
    },
    extend: {
      stroke: { value: { base: "{colors.rose.60}" } },
      fg: {
        DEFAULT: { value: { base: "{colors.white}" } },
        subtle: { value: { base: "{colors.rose.80}", _dark: "{colors.rose.70}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.rose.70}", _dark: "{colors.rose.50}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.rose.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-20) {colors.rose.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-30) {colors.rose.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.rose.fill}, {colors.transparent})" } },
      },
    }
  }),
  sky: createSemanticColorTokens({
    light: {
      base: sky,
      alpha: skyAlpha
    },
    dark: {
      base: skyDark,
      alpha: skyDarkAlpha
    },
    extend: {
      fg: {
        DEFAULT: { value: { base: "{colors.white}" } },
        subtle: { value: { base: "{colors.sky.80}", _dark: "{colors.sky.70}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.sky.70}", _dark: "{colors.sky.50}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.sky.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-20) {colors.sky.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-30) {colors.sky.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.sky.fill}, {colors.transparent})" } },
      },
      stroke: { value: { base: "{colors.sky.60}" } },
    }
  }),
  teal: createSemanticColorTokens({
    light: {
      base: teal,
      alpha: tealAlpha
    },
    dark: {
      base: tealDark,
      alpha: tealDarkAlpha
    },
    extend: {
      fg: {
        DEFAULT: { value: { base: "{colors.white}" } },
        subtle: { value: { base: "{colors.teal.80}", _dark: "{colors.teal.70}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.teal.80}", _dark: "{colors.teal.40}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.teal.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-20) {colors.teal.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-30) {colors.teal.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.teal.fill}, {colors.transparent})" } },
      },
      stroke: { value: { base: "{colors.teal.60}" } },
    }
  }),
  violet: createSemanticColorTokens({
    light: {
      base: violet,
      alpha: violetAlpha
    },
    dark: {
      base: violetDark,
      alpha: violetDarkAlpha
    },
    extend: {
      fg: {
        DEFAULT: { value: { base: "{colors.white}" } },
        subtle: { value: { base: "{colors.violet.80}", _dark: "{colors.violet.70}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.violet.70}", _dark: "{colors.violet.60}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.violet.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-10) {colors.violet.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-20) {colors.violet.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.violet.fill}, {colors.transparent})" } },
      },
      stroke: { value: { base: "{colors.violet.60}" } },
    }
  }),
  yellow: createSemanticColorTokens({
    light: {
      base: yellow,
      alpha: yellowAlpha
    },
    dark: {
      base: yellowDark,
      alpha: yellowDarkAlpha
    },
    extend: {
      fg: {
        DEFAULT: { value: { base: "{colors.yellow.100}", _dark: "{colors.yellow.10}" } },
        subtle: { value: { base: "{colors.yellow.80}", _dark: "{colors.yellow.70}" } },
      },
      fill: {
        DEFAULT: { value: { base: "{colors.yellow.60}" } },
        muted: { value: { base: "color-mix(in oklab, var(--mix-5) {colors.yellow.fill}, {colors.transparent})" } },
        subtle: {
          DEFAULT: {
            value: { base: "color-mix(in oklab, var(--mix-20) {colors.yellow.fill}, {colors.transparent})" }
          },
          hover: { value: { base: "color-mix(in oklab, var(--mix-30) {colors.yellow.fill}, {colors.transparent})" } },
        },
        hover: { value: { base: "color-mix(in oklab, var(--mix-90) {colors.yellow.fill}, {colors.transparent})" } },
      },
      stroke: { value: { base: "{colors.yellow.60}" } },
    }
  }),
});
