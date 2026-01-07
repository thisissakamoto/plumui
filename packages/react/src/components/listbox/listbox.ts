import type { UseListboxContext, UseListboxItemContext, UseListboxProps, UseListboxReturn } from "@ark-ui/react/listbox";
import { createListCollection, Listbox, useListbox, useListboxContext, useListboxItemContext } from "@ark-ui/react/listbox";
import { createStyleContext } from "@plumui/styled/jsx";
import type { ComponentProps } from "@plumui/styled/types";
import { listboxRecipe } from "packages/styled/dist/recipes";

export const use = useListbox;
export const useContext = useListboxContext;
export const useItemContext = useListboxItemContext;
export const createCollection = createListCollection;

export type {
  UseListboxProps as UseProps,
  UseListboxReturn as UseReturn,
  UseListboxContext as UseContext,
  UseListboxItemContext as UseItemContext,
}

const { withRootProvider, withProvider, withContext } = createStyleContext(listboxRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(Listbox.RootProvider);
Provider.displayName = "ListboxProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Listbox.Root, "root");
Root.displayName = "ListboxRoot";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(Listbox.Label, "label");
Label.displayName = "ListboxLabel";

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(Listbox.Content, "content");
Content.displayName = "ListboxContent";

export type ItemGroupProps = ComponentProps<typeof ItemGroup>;
export const ItemGroup = withContext(Listbox.ItemGroup, "itemGroup");
ItemGroup.displayName = "ListboxItemGroup";

export type ItemGroupLabelProps = ComponentProps<typeof ItemGroupLabel>;
export const ItemGroupLabel = withContext(Listbox.ItemGroupLabel, "itemGroupLabel");
ItemGroupLabel.displayName = "ListboxItemGroupLabel";

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(Listbox.Item, "item");
Item.displayName = "ListboxItem";

export type ItemTextProps = ComponentProps<typeof ItemText>;
export const ItemText = withContext(Listbox.ItemText, "itemText");
ItemText.displayName = "ListboxItemText";

export type InputProps = ComponentProps<typeof Input>;
export const Input = withContext(Listbox.Input, "input");
Input.displayName = "ListboxInput";

export type EmptyProps = ComponentProps<typeof Empty>;
export const Empty = withContext(Listbox.Empty, "empty");
Empty.displayName = "ListboxEmpty";

export type ValueTextProps = ComponentProps<typeof ValueText>;
export const ValueText = withContext(Listbox.ValueText, "valueText");
ValueText.displayName = "ListboxValueText";

export type ItemIndicatorProps = ComponentProps<typeof ItemIndicator>;
export const ItemIndicator = withContext(Listbox.ItemIndicator, "itemIndicator");
ItemIndicator.displayName = "ListboxItemIndicator";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Listbox.Context;

export type ItemContextProps = ComponentProps<typeof ItemContext>;
export const ItemContext = Listbox.ItemContext;
