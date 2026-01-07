import {
  Select,
  type UseSelectContext,
  type UseSelectItemContext,
  type UseSelectProps,
  type UseSelectReturn,
  useSelect,
  useSelectContext,
  useSelectItemContext,
} from "@ark-ui/react/select";
import { createStyleContext } from "@plumui/styled/jsx";
import { selectRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useSelect;
export const useContext = useSelectContext;
export const useItemContext = useSelectItemContext;

export type {
  UseSelectProps as UseProps,
  UseSelectReturn as UseReturn,
  UseSelectContext as UseContext,
  UseSelectItemContext as UseItemContext,
};

const { withProvider, withContext } = createStyleContext(selectRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(Select.RootProvider, "root");
Provider.displayName = "SelectProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Select.Root, "root");
Root.displayName = "SelectRoot";

export type ClearTriggerProps = ComponentProps<typeof ClearTrigger>;
export const ClearTrigger = withContext(Select.ClearTrigger, "clearTrigger");
ClearTrigger.displayName = "SelectClearTrigger";

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(Select.Content, "content");
Content.displayName = "SelectContent";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Select.Context;

export type ItemContextProps = ComponentProps<typeof ItemContext>;
export const ItemContext = Select.ItemContext;

export type ControlProps = ComponentProps<typeof Control>;
export const Control = withContext(Select.Control, "control");
Control.displayName = "SelectControl";

export type IndicatorProps = ComponentProps<typeof Indicator>;
export const Indicator = withContext(Select.Indicator, "indicator");
Indicator.displayName = "SelectIndicator";

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(Select.Item, "item");
Item.displayName = "SelectItem";

export type ItemGroupProps = ComponentProps<typeof ItemGroup>;
export const ItemGroup = withContext(Select.ItemGroup, "itemGroup");
ItemGroup.displayName = "SelectItemGroup";

export type ItemGroupLabelProps = ComponentProps<typeof ItemGroupLabel>;
export const ItemGroupLabel = withContext(Select.ItemGroupLabel, "itemGroupLabel");
ItemGroupLabel.displayName = "SelectItemGroupLabel";

export type ItemIndicatorProps = ComponentProps<typeof ItemIndicator>;
export const ItemIndicator = withContext(Select.ItemIndicator, "itemIndicator");
ItemIndicator.displayName = "SelectItemIndicator";

export type ItemTextProps = ComponentProps<typeof ItemText>;
export const ItemText = withContext(Select.ItemText, "itemText");
ItemText.displayName = "SelectItemText";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(Select.Label, "label");
Label.displayName = "SelectLabel";

export type PositionerProps = ComponentProps<typeof Positioner>;
export const Positioner = withContext(Select.Positioner, "positioner");
Positioner.displayName = "SelectPositioner";

export type TriggerProps = ComponentProps<typeof Trigger>;
export const Trigger = withContext(Select.Trigger, "trigger");
Trigger.displayName = "SelectTrigger";

export type ValueTextProps = ComponentProps<typeof ValueText>;
export const ValueText = withContext(Select.ValueText, "valueText");
ValueText.displayName = "SelectValueText";

export type HiddenSelectProps = ComponentProps<typeof HiddenSelect>;
export const HiddenSelect = Select.HiddenSelect;
HiddenSelect.displayName = "SelectHiddenSelect";
