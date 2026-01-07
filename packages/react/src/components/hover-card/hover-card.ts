import type {
  UseHoverCardContext,
  UseHoverCardProps,
  UseHoverCardReturn,
} from "@ark-ui/react/hover-card";
import { HoverCard, useHoverCard, useHoverCardContext,
} from "@ark-ui/react/hover-card";
import { createStyleContext } from "@plumui/styled/jsx";
import { hoverCardRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useHoverCard;
export const useContext = useHoverCardContext;

export type {
  UseHoverCardProps as UseProps,
  UseHoverCardReturn as UseReturn,
  UseHoverCardContext as UseContext,
}

const { withRootProvider, withContext } = createStyleContext(hoverCardRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(HoverCard.RootProvider);
Provider.displayName = "HoverCardProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider(HoverCard.Root);
Root.displayName = "HoverCardRoot";

export type ArrowProps = ComponentProps<typeof Arrow>;
export const Arrow = withContext(HoverCard.Arrow, "arrow");
Arrow.displayName = "HoverCardArrow";

export type ArrowTipProps = ComponentProps<typeof ArrowTip>;
export const ArrowTip = withContext(HoverCard.ArrowTip, "arrowTip");
ArrowTip.displayName = "HoverCardArrowTip";

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(HoverCard.Content, "content");
Content.displayName = "HoverCardContent";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = HoverCard.Context

export type PositionerProps = ComponentProps<typeof Positioner>;
export const Positioner = withContext(HoverCard.Positioner, "positioner");
Positioner.displayName = "HoverCardPositioner";

export type TriggerProps = ComponentProps<typeof Trigger>;
export const Trigger = withContext(HoverCard.Trigger, "trigger");
Trigger.displayName = "HoverCardTrigger";
