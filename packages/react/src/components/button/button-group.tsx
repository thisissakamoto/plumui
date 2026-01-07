import { type Assign, ark, type HTMLArkProps } from "@ark-ui/react";
import { createStyleContext, } from "@plumui/styled/jsx";
import { buttonGroupRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";
import React from "react";


const { withProvider, withContext } = createStyleContext(buttonGroupRecipe);

export const Root = withProvider(ark.div, "root");
Root.displayName = "ButtonGroupRoot";
export type RootProps = ComponentProps<typeof Root>;

type ItemBaseProps = Assign<HTMLArkProps<"div">, {
  iconOnly?: boolean;
  pressable?: boolean;
}>
export const ItemBase = React.forwardRef<HTMLDivElement, ItemBaseProps>((props, ref) => {
  const { iconOnly = false, pressable = true, ...rest } = props;

  return <ark.div role="button" ref={ref} data-icon-only={iconOnly} data-pressable={pressable}  {...rest} />
});

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(ItemBase, "item");
Item.displayName = "ButtonGroupItem";
