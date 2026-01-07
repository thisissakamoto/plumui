import type { ColorScale } from "@plumui/colors";

type ModeScale = {
  base?: ColorScale;
  alpha?: ColorScale;
};

type Props = {
  dark?: ModeScale;
  light?: ModeScale;
  extend?: Record<string, any>;
};

// tailwindcss scale and semantic scale
const scale = {
  tw: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  semantic: ["10", "20", "30", "40", "50", "60", "70", "80", "90", "95", "100"],
} as const;

type SemanticKey = (typeof scale.semantic)[number];
type TwKey = (typeof scale.tw)[number];

export const createSemanticColorTokens = ({
  dark,
  light,
  extend,
}: Props) => {
  const darkBase = dark?.base;
  const darkAlpha = dark?.alpha;
  const lightBase = light?.base;
  const lightAlpha = light?.alpha;

  const colors: Record<string, unknown> = {};

  scale.tw.forEach((twScale, idx) => {
    const semanticScale = scale.semantic[idx] as SemanticKey;
    const key = twScale as TwKey;

    if(lightBase && darkBase) {
      const baseLight = lightBase[key];
      const baseDark = darkBase[key];

      if (baseLight || baseDark) {
        colors[semanticScale] = {
          value: {
            ...(baseLight && { base: baseLight }),
            ...(baseDark && { _dark: baseDark }),
          },
        };
      };
    };

    if(darkAlpha && lightAlpha) {
     const alphaLight = lightAlpha[key];
     const alphaDark = darkAlpha[key];

     if (alphaLight || alphaDark) {
       colors[`a${semanticScale}`] = {
         value: {
           ...(alphaLight && { base: alphaLight }),
           ...(alphaDark && { _dark: alphaDark }),
         },
       };
      };
    };
  });

  return {
    ...colors,
    ...(extend ?? {}),
  };
};
