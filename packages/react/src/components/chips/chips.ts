import type {UseCheckboxContext, UseCheckboxGroupContext, UseCheckboxGroupProps, UseCheckboxGroupReturn, UseCheckboxProps, UseCheckboxReturn } from "@ark-ui/react/checkbox";
import { Checkbox, useCheckbox, useCheckboxContext, useCheckboxGroup, useCheckboxGroupContext } from "@ark-ui/react/checkbox";
import { createStyleContext } from "@plumui/styled/jsx";
import { chipsRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useCheckbox;
export const useGroup = useCheckboxGroup;
export const useContext = useCheckboxContext;
export const useGroupContext = useCheckboxGroupContext;

export type {
  UseCheckboxContext as UseContext,
  UseCheckboxGroupContext as UseGroupContext,
  UseCheckboxGroupProps as UseGroupProps,
  UseCheckboxGroupReturn as UseGroupReturn,
  UseCheckboxProps as UseProps,
  UseCheckboxReturn as UseReturn
}

const { withRootProvider, withProvider, withContext } = createStyleContext(chipsRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(Checkbox.GroupProvider);
Provider.displayName = "CheckboxProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Checkbox.Group, "root");
Root.displayName = "CheckboxRoot";

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withProvider(Checkbox.Root, "item");
Item.displayName = "CheckboxItem";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(Checkbox.Label, "label");
Label.displayName = "CheckboxLabel";

export type ControlProps = ComponentProps<typeof Control>;
export const Control = withContext(Checkbox.Control, "control");
Control.displayName = "CheckboxControl";

export type IndicatorProps = ComponentProps<typeof Indicator>;
export const Indicator = withContext(Checkbox.Indicator, "indicator");
Indicator.displayName = "CheckboxIndicator";

export type HiddenInputProps = ComponentProps<typeof HiddenInput>;
export const HiddenInput = Checkbox.HiddenInput;
HiddenInput.displayName = "CheckboxHiddenInput";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Checkbox.Context;
