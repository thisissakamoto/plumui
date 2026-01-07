import {
  SegmentGroup,
  type UseSegmentGroupContext,
  type UseSegmentGroupItemContext,
  type UseSegmentGroupProps,
  type UseSegmentGroupReturn,
  useSegmentGroup,
  useSegmentGroupContext,
  useSegmentGroupItemContext,
} from "@ark-ui/react/segment-group";
import { createStyleContext } from "@plumui/styled/jsx";
import { segmentGroupRecipe } from "@plumui/styled/recipes";

export const use = useSegmentGroup;
export const useContext = useSegmentGroupContext;
export const useItemContext = useSegmentGroupItemContext;

export type {
  UseSegmentGroupContext as UseContext,
  UseSegmentGroupItemContext as UseItemContext,
  UseSegmentGroupProps as UseProps,
  UseSegmentGroupReturn as UseReturn,
};

const { withContext, withProvider } = createStyleContext(segmentGroupRecipe);

export type ProviderProps = React.ComponentProps<typeof Provider>;
export const Provider = withProvider(SegmentGroup.RootProvider, "root");
Provider.displayName = "SegmentGroupProvider";

export type RootProps = React.ComponentProps<typeof Root>;
export const Root = withProvider(SegmentGroup.Root, "root");
Root.displayName = "SegmentGroupRoot";

export type ContextProps = React.ComponentProps<typeof Context>;
export const Context = SegmentGroup.Context;

export type IndicatorProps = React.ComponentProps<typeof Indicator>;
export const Indicator = withContext(SegmentGroup.Indicator, "indicator");
Indicator.displayName = "SegmentGroupIndicator";

export type ItemProps = React.ComponentProps<typeof Item>;
export const Item = withContext(SegmentGroup.Item, "item");
Item.displayName = "SegmentGroupItem";

export type ItemContextProps = React.ComponentProps<typeof ItemContext>;
export const ItemContext = SegmentGroup.ItemContext;

export type ItemControlProps = React.ComponentProps<typeof ItemControl>;
export const ItemControl = withContext(SegmentGroup.ItemControl, "itemControl");
ItemControl.displayName = "SegmentGroupItemControl";

export type ItemHiddenInputProps = React.ComponentProps<typeof ItemHiddenInput>;
export const ItemHiddenInput = SegmentGroup.ItemHiddenInput;
ItemHiddenInput.displayName = "SegmentGroupItemHiddenInput";

export type ItemTextProps = React.ComponentProps<typeof ItemText>;
export const ItemText = withContext(SegmentGroup.ItemText, "itemText");
ItemText.displayName = "SegmentGroupItemText";

export type LabelProps = React.ComponentProps<typeof Label>;
export const Label = withContext(SegmentGroup.Label, "label");
Label.displayName = "SegmentGroupLabel";
