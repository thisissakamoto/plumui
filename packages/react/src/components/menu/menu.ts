import type { UseMenuContext, UseMenuItemContext, UseMenuProps, UseMenuReturn } from "@ark-ui/react/menu";
import { Menu, useMenu, useMenuItemContext } from "@ark-ui/react/menu";
import { createStyleContext } from "@plumui/styled/jsx";
import { menuRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export { useMenuContext as useContext } from "@ark-ui/react/menu";

export const use = useMenu;
export const useItemContext = useMenuItemContext;

export type {
  UseMenuProps as UseProps,
  UseMenuReturn as UseReturn,
  UseMenuContext as UseContext,
  UseMenuItemContext as UseItemContext,
}

const { withRootProvider, withContext } = createStyleContext(menuRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(Menu.RootProvider);
Provider.displayName = "MenuProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider(Menu.Root);
Root.displayName = "MenuRoot";

export type TriggerProps = ComponentProps<typeof Trigger>;
export const Trigger = withContext(Menu.Trigger, "trigger");
Trigger.displayName = "MenuTrigger";

export type PositionerProps = ComponentProps<typeof Positioner>;
export const Positioner = withContext(Menu.Positioner, "positioner");
Positioner.displayName = "MenuPositioner";

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(Menu.Content, "content");
Content.displayName = "MenuContent";

export type ArrowProps = ComponentProps<typeof Arrow>;
export const Arrow = withContext(Menu.Arrow, "arrow");
Arrow.displayName = "MenuArrow";

export type ArrowTipProps = ComponentProps<typeof ArrowTip>;
export const ArrowTip = withContext(Menu.ArrowTip, "arrowTip");
ArrowTip.displayName = "MenuArrowTip";

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(Menu.Item, "item");
Item.displayName = "MenuItem";

export type ItemGroupProps = ComponentProps<typeof ItemGroup>;
export const ItemGroup = withContext(Menu.ItemGroup, "itemGroup");
ItemGroup.displayName = "MenuItemGroup";

export type ItemGroupLabelProps = ComponentProps<typeof ItemGroupLabel>;
export const ItemGroupLabel = withContext(Menu.ItemGroupLabel, "itemGroupLabel");
ItemGroupLabel.displayName = "MenuItemGroupLabel";

export type ItemTextProps = ComponentProps<typeof ItemText>;
export const ItemText = withContext(Menu.ItemText, "itemText");
ItemText.displayName = "MenuItemText";

export type ItemIndicatorProps = ComponentProps<typeof ItemIndicator>;
export const ItemIndicator = withContext(Menu.ItemIndicator, "itemIndicator");
ItemIndicator.displayName = "MenuItemIndicator";

export type SeparatorProps = ComponentProps<typeof Separator>;
export const Separator = withContext(Menu.Separator, "separator");
Separator.displayName = "MenuSeparator";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Menu.Context;

export type ItemContextProps = ComponentProps<typeof ItemContext>;
export const ItemContext = Menu.ItemContext;
