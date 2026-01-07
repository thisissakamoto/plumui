import {
  Toggle,
  type UseToggleContext,
  type UseToggleProps,
  type UseToggleReturn,
  useToggle,
  useToggleContext,
} from "@ark-ui/react/toggle";
import { createStyleContext } from "@plumui/styled/jsx";
import { toggleRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useToggle;
export const useContext = useToggleContext;

export type {
  UseToggleContext as UseContext,
  UseToggleProps as UseProps,
  UseToggleReturn as UseReturn,
};

const { withProvider, withContext } = createStyleContext(toggleRecipe);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Toggle.Root, "root");
Root.displayName = "ToggleRoot";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Toggle.Context;

export type IndicatorProps = ComponentProps<typeof Indicator>;
export const Indicator = withContext(Toggle.Indicator, "indicator");
Indicator.displayName = "ToggleIndicator";
