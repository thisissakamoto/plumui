import {
  TagsInput,
  type UseTagsInputContext,
  type UseTagsInputItemContext,
  type UseTagsInputProps,
  type UseTagsInputReturn,
  useTagsInput,
  useTagsInputContext,
  useTagsInputItemContext,
} from "@ark-ui/react/tags-input";
import { createStyleContext } from "@plumui/styled/jsx";
import { tagsInputRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useTagsInput;
export const useContext = useTagsInputContext;
export const useItemContext = useTagsInputItemContext;

export type {
  UseTagsInputContext as UseContext,
  UseTagsInputProps as UseProps,
  UseTagsInputReturn as UseReturn,
  UseTagsInputItemContext as UseItemContext,
};

const { withProvider, withContext } = createStyleContext(tagsInputRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(TagsInput.RootProvider, "root");
Provider.displayName = "TagsInputProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(TagsInput.Root, "root");
Root.displayName = "TagsInputRoot";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = TagsInput.Context;

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(TagsInput.Label, "label");
Label.displayName = "TagsInputLabel";

export type ControlProps = ComponentProps<typeof Control>;
export const Control = withContext(TagsInput.Control, "control");
Control.displayName = "TagsInputControl";

export type InputProps = ComponentProps<typeof Input>;
export const Input = withContext(TagsInput.Input, "input");
Input.displayName = "TagsInputInput";

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(TagsInput.Item, "item");
Item.displayName = "TagsInputItem";

export type ItemInputProps = ComponentProps<typeof ItemInput>;
export const ItemInput = withContext(TagsInput.ItemInput, "itemInput");
ItemInput.displayName = "TagsInputItemInput";

export type ItemTextProps = ComponentProps<typeof ItemText>;
export const ItemText = withContext(TagsInput.ItemText, "itemText");
ItemText.displayName = "TagsInputItemText";

export type ItemDeleteTriggerProps = ComponentProps<typeof ItemDeleteTrigger>;
export const ItemDeleteTrigger = withContext(TagsInput.ItemDeleteTrigger, "itemDeleteTrigger");
ItemDeleteTrigger.displayName = "TagsInputItemDeleteTrigger";

export type ClearTriggerProps = ComponentProps<typeof ClearTrigger>;
export const ClearTrigger = withContext(TagsInput.ClearTrigger, "clearTrigger");
ClearTrigger.displayName = "TagsInputClearTrigger";

export type HiddenInputProps = ComponentProps<typeof HiddenInput>;
export const HiddenInput = TagsInput.HiddenInput;
HiddenInput.displayName = "TagsInputHiddenInput";
