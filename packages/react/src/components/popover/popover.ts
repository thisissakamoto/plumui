import {
  Popover,
  type UsePopoverContext,
  type UsePopoverProps,
  type UsePopoverReturn,
  usePopover,
  usePopoverContext,
} from "@ark-ui/react/popover";
import { createStyleContext } from "@plumui/styled/jsx";
import { popoverRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = usePopover;
export const useContext = usePopoverContext;

export type {
  UsePopoverContext as UseContext,
  UsePopoverProps as UseProps,
  UsePopoverReturn as UseReturn,
};

const { withRootProvider, withContext } = createStyleContext(popoverRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(Popover.RootProvider);
Provider.displayName = "PopoverProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider(Popover.Root);
Root.displayName = "PopoverRoot";

export type AnchorProps = ComponentProps<typeof Anchor>;
export const Anchor = withContext(Popover.Anchor, "anchor");
Anchor.displayName = "PopoverAnchor";

export type ArrowProps = ComponentProps<typeof Arrow>;
export const Arrow = withContext(Popover.Arrow, "arrow");
Arrow.displayName = "PopoverArrow";

export type ArrowTipProps = ComponentProps<typeof ArrowTip>;
export const ArrowTip = withContext(Popover.ArrowTip, "arrowTip");
ArrowTip.displayName = "PopoverArrowTip";

export type CloseTriggerProps = ComponentProps<typeof CloseTrigger>;
export const CloseTrigger = withContext(Popover.CloseTrigger, "closeTrigger");
CloseTrigger.displayName = "PopoverCloseTrigger";

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(Popover.Content, "content");
Content.displayName = "PopoverContent";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Popover.Context;

export type DescriptionProps = ComponentProps<typeof Description>;
export const Description = withContext(Popover.Description, "description");
Description.displayName = "PopoverDescription";

export type PositionerProps = ComponentProps<typeof Positioner>;
export const Positioner = withContext(Popover.Positioner, "positioner");
Positioner.displayName = "PopoverPositioner";

export type TitleProps = ComponentProps<typeof Title>;
export const Title = withContext(Popover.Title, "title");
Title.displayName = "PopoverTitle";

export type TriggerProps = ComponentProps<typeof Trigger>;
export const Trigger = withContext(Popover.Trigger, "trigger");
Trigger.displayName = "PopoverTrigger";

export type IndicatorProps = ComponentProps<typeof Indicator>;
export const Indicator = withContext(Popover.Indicator, "indicator");
Indicator.displayName = "PopoverIndicator";
