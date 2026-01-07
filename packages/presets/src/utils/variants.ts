const tone = [
  "amber",
  "blue",
  "cyan",
  "emerald",
  "fuchsia",
  "gray",
  "green",
  "indigo",
  "lime",
  "neutral",
  "orange",
  "pink",
  "purple",
  "red",
  "rose",
  "sky",
  "slate",
  "stone",
  "teal",
  "violet",
  "yellow",
  "zinc",
] as const;
const visual = ["filled"] as const;
const size = ["xs", "sm", "md", "lg", "xl"] as const;
const radius = ["none", "xs", "sm", "md", "lg", "xl", "full"] as const;
const layout = ["stacked", "inline"] as const;
const orientation = ["horizontal", "vertical"] as const;

const variants = {
  tone,
  size,
  radius,
  visual,
  layout,
  orientation,
};


export type Variants = typeof variants;
export type VariantsKey = keyof Variants;

export const getVariants = <K extends VariantsKey>(key: K) => {
  const defaultValues = variants[key] as Variants[K];

  return {
    values: defaultValues,
    extendWith: <T extends string[]>(...values: T) => {
      const extendedValues = [...defaultValues, ...values] as const;

      return {
        values: extendedValues,
      }
    }
  }
};
