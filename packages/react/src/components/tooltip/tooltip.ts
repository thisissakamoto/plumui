import {
  Tooltip,
  type UseTooltipContext,
  type UseTooltipProps,
  type UseTooltipReturn,
  useTooltip,
  useTooltipContext,
} from "@ark-ui/react/tooltip";
import { createStyleContext } from "@plumui/styled/jsx";
import { tooltipRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useTooltip;
export const useContext = useTooltipContext;

export type {
  UseTooltipContext as UseContext,
  UseTooltipProps as UseProps,
  UseTooltipReturn as UseReturn,
};

const { withRootProvider, withContext } = createStyleContext(tooltipRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(Tooltip.RootProvider);
Provider.displayName = "TooltipProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider(Tooltip.Root);
Root.displayName = "TooltipRoot";

export type ArrowProps = ComponentProps<typeof Arrow>;
export const Arrow = withContext(Tooltip.Arrow, "arrow");
Arrow.displayName = "TooltipArrow";

export type ArrowTipProps = ComponentProps<typeof ArrowTip>;
export const ArrowTip = withContext(Tooltip.ArrowTip, "arrowTip");
ArrowTip.displayName = "TooltipArrowTip";

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(Tooltip.Content, "content");
Content.displayName = "TooltipContent";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Tooltip.Context;

export type PositionerProps = ComponentProps<typeof Positioner>;
export const Positioner = withContext(Tooltip.Positioner, "positioner");
Positioner.displayName = "TooltipPositioner";

export type TriggerProps = ComponentProps<typeof Trigger>;
export const Trigger = withContext(Tooltip.Trigger, "trigger");
Trigger.displayName = "TooltipTrigger";
