import {
  RatingGroup,
  type UseRatingGroupContext,
  type UseRatingGroupItemContext,
  type UseRatingGroupProps,
  type UseRatingGroupReturn,
  useRatingGroup,
  useRatingGroupContext,
  useRatingGroupItemContext,
} from "@ark-ui/react/rating-group";
import { createStyleContext } from "@plumui/styled/jsx";
import { ratingGroupRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useRatingGroup;
export const useContext = useRatingGroupContext;
export const useItemContext = useRatingGroupItemContext;

export type {
  UseRatingGroupContext as UseContext,
  UseRatingGroupItemContext as UseItemContext,
  UseRatingGroupProps as UseProps,
  UseRatingGroupReturn as UseReturn,
};

const { withProvider, withContext } = createStyleContext(ratingGroupRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(RatingGroup.RootProvider, "root");
Provider.displayName = "RatingGroupProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(RatingGroup.Root, "root");
Root.displayName = "RatingGroupRoot";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = RatingGroup.Context;

export type ItemContextProps = ComponentProps<typeof ItemContext>;
export const ItemContext = RatingGroup.ItemContext;

export type ControlProps = ComponentProps<typeof Control>;
export const Control = withContext(RatingGroup.Control, "control");
Control.displayName = "RatingGroupControl";

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(RatingGroup.Item, "item");
Item.displayName = "RatingGroupItem";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(RatingGroup.Label, "label");
Label.displayName = "RatingGroupLabel";

export type HiddenInputProps = ComponentProps<typeof HiddenInput>;
export const HiddenInput = RatingGroup.HiddenInput;
HiddenInput.displayName = "RatingGroupHiddenInput";
