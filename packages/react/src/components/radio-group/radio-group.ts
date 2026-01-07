import {
  RadioGroup,
  type UseRadioGroupContext,
  type UseRadioGroupItemContext,
  type UseRadioGroupProps,
  type UseRadioGroupReturn,
  useRadioGroup,
  useRadioGroupContext,
  useRadioGroupItemContext,
} from "@ark-ui/react/radio-group";
import { createStyleContext } from "@plumui/styled/jsx";
import { radioGroupRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useRadioGroup;
export const useContext = useRadioGroupContext;
export const useItemContext = useRadioGroupItemContext;

export type {
  UseRadioGroupContext as UseContext,
  UseRadioGroupItemContext as UseItemContext,
  UseRadioGroupProps as UseProps,
  UseRadioGroupReturn as UseReturn,
};

const { withProvider, withContext } = createStyleContext(radioGroupRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(RadioGroup.RootProvider, "root");
Provider.displayName = "RadioGroupProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(RadioGroup.Root, "root");
Root.displayName = "RadioGroupRoot";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = RadioGroup.Context;

export type IndicatorProps = ComponentProps<typeof Indicator>;
export const Indicator = withContext(RadioGroup.Indicator, "indicator");
Indicator.displayName = "RadioGroupIndicator";

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(RadioGroup.Item, "item");
Item.displayName = "RadioGroupItem";

export type ItemControlProps = ComponentProps<typeof ItemControl>;
export const ItemControl = withContext(RadioGroup.ItemControl, "itemControl");
ItemControl.displayName = "RadioGroupItemControl";

export type ItemHiddenInputProps = ComponentProps<typeof ItemHiddenInput>;
export const ItemHiddenInput = RadioGroup.ItemHiddenInput;
ItemHiddenInput.displayName = "RadioGroupItemHiddenInput";

export type ItemTextProps = ComponentProps<typeof ItemText>;
export const ItemText = withContext(RadioGroup.ItemText, "itemText");
ItemText.displayName = "RadioGroupItemText";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(RadioGroup.Label, "label");
Label.displayName = "RadioGroupLabel";

export type ItemIndicatorProps = ComponentProps<typeof ItemIndicator>;
export const ItemIndicator = withContext(RadioGroup.ItemText, "itemIndicator");
ItemIndicator.displayName = "RadioGroupItemIndicator";
