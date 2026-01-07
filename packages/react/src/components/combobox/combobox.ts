import type { ComboboxInputValueChangeDetails, UseComboboxContext, UseComboboxItemContext, UseComboboxProps, UseComboboxReturn, UseListCollectionProps } from "@ark-ui/react/combobox";
import { Combobox, useCombobox, useComboboxContext, useComboboxItemContext, useListCollection } from "@ark-ui/react/combobox";
import { createStyleContext } from "@plumui/styled/jsx";
import { comboboxRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export { useFilter } from '@ark-ui/react/locale'

export const use = useCombobox;
export const useContext = useComboboxContext;
export const useCollection = useListCollection;
export const useItemContext = useComboboxItemContext;

export type {
  UseComboboxProps as UseProps,
  UseComboboxReturn as UseReturn,
  UseComboboxContext as UseContext,
  UseComboboxItemContext as UseItemContext,
  UseListCollectionProps as UseCollectionProps,
  ComboboxInputValueChangeDetails as InputValueChangeDetails,
}

const { withRootProvider, withProvider, withContext } = createStyleContext(comboboxRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(Combobox.RootProvider);
Provider.displayName = "ComboboxProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Combobox.Root, "root");
Root.displayName = "ComboboxRoot";

export type ClearTriggerProps = ComponentProps<typeof ClearTrigger>;
export const ClearTrigger = withContext(Combobox.ClearTrigger, "clearTrigger");
ClearTrigger.displayName = "ComboboxClearTrigger";

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(Combobox.Content, "content");
Content.displayName = "ComboboxContent";

export type EmptyProps = ComponentProps<typeof Empty>;
export const Empty = withContext(Combobox.Empty, "empty");
Empty.displayName = "ComboboxEmpty";

export type ControlProps = ComponentProps<typeof Control>;
export const Control = withContext(Combobox.Control, "control");
Control.displayName = "ComboboxControl";

export type InputProps = ComponentProps<typeof Input>;
export const Input = withContext(Combobox.Input, "input");
Input.displayName = "ComboboxInput";

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(Combobox.Item, "item");
Item.displayName = "ComboboxItem";

export type ItemGroupProps = ComponentProps<typeof ItemGroup>;
export const ItemGroup = withContext(Combobox.ItemGroup, "itemGroup");
ItemGroup.displayName = "ComboboxItemGroup";

export type ItemGroupLabelProps = ComponentProps<typeof ItemGroupLabel>;
export const ItemGroupLabel = withContext(Combobox.ItemGroupLabel, "itemGroupLabel");
ItemGroupLabel.displayName = "ComboboxItemGroupLabel";

export type ItemIndicatorProps = ComponentProps<typeof ItemIndicator>;
export const ItemIndicator = withContext(Combobox.ItemIndicator, "itemIndicator");
ItemIndicator.displayName = "ComboboxItemIndicator";

export type ItemTextProps = ComponentProps<typeof ItemText>;
export const ItemText = withContext(Combobox.ItemText, "itemText");
ItemText.displayName = "ComboboxItemText";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(Combobox.Label, "label");
Label.displayName = "ComboboxLabel";

export type ListProps = ComponentProps<typeof List>;
export const List = withContext(Combobox.List, "list");
List.displayName = "ComboboxList";

export type TriggerProps = ComponentProps<typeof Trigger>;
export const Trigger = withContext(Combobox.Trigger, "trigger");
Trigger.displayName = "ComboboxTrigger";

export type PositionerProps = ComponentProps<typeof Positioner>;
export const Positioner = withContext(Combobox.Positioner, "positioner");
Positioner.displayName = "ComboboxPositioner";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Combobox.Context;

export type ItemContextProps = ComponentProps<typeof ItemContext>;
export const ItemContext = Combobox.ItemContext;
