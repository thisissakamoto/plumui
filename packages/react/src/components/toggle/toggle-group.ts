import {
	ToggleGroup,
	type UseToggleGroupContext,
	type UseToggleGroupProps,
	type UseToggleGroupReturn,
	useToggleGroup,
	useToggleGroupContext,
} from "@ark-ui/react/toggle-group";
import { createStyleContext } from "@plumui/styled/jsx";
import { toggleGroupRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useToggleGroup;
export const useContext = useToggleGroupContext;

export type {
	UseToggleGroupContext as UseContext,
	UseToggleGroupProps as UseProps,
	UseToggleGroupReturn as UseReturn,
};

const { withProvider, withContext } = createStyleContext(toggleGroupRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(ToggleGroup.RootProvider, "root");
Provider.displayName = "ToggleGroupProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(ToggleGroup.Root, "root");
Root.displayName = "ToggleGroupRoot";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = ToggleGroup.Context;

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(ToggleGroup.Item, "item");
Item.displayName = "ToggleGroupItem";
