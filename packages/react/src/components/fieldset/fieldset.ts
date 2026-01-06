import type { UseFieldsetContext, UseFieldsetProps, UseFieldsetReturn } from "@ark-ui/react/fieldset";
import { Fieldset, useFieldset, useFieldsetContext } from "@ark-ui/react/fieldset";
import { createStyleContext } from "@plumui/styled/jsx";
import { fieldsetRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useFieldset;
export const useContext = useFieldsetContext;

export type {
  UseFieldsetProps as UseProps,
  UseFieldsetReturn as UseReturn,
  UseFieldsetContext as UseContext,
};

const { withRootProvider, withProvider, withContext } = createStyleContext(fieldsetRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(Fieldset.RootProvider);
Provider.displayName = "FieldsetProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Fieldset.Root, "root");
Root.displayName = "FieldsetRoot";

export type LegendProps = ComponentProps<typeof Legend>;
export const Legend = withContext(Fieldset.Legend, "legend");
Legend.displayName = "FieldsetLegend";

export type HelperTextProps = ComponentProps<typeof HelperText>;
export const HelperText = withContext(Fieldset.HelperText, "helperText");
HelperText.displayName = "FieldsetHelperText";

export type ErrorTextProps = ComponentProps<typeof ErrorText>;
export const ErrorText = withContext(Fieldset.ErrorText, "errorText");
ErrorText.displayName = "FieldsetErrorText";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Fieldset.Context;
