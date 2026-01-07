import {
  Tour,
  type UseTourContext,
  type UseTourProps,
  type UseTourReturn,
  useTour,
  useTourContext,
} from "@ark-ui/react/tour";
import { createStyleContext } from "@plumui/styled/jsx";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useTour;
export const useContext = useTourContext;

export type {
  UseTourContext as UseContext,
  UseTourProps as UseProps,
  UseTourReturn as UseReturn,
};

const { withProvider, withContext } = createStyleContext();

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Tour.Root, "root");
Root.displayName = "TourRoot";

export type PositionerProps = ComponentProps<typeof Positioner>;
export const Positioner = withContext(Tour.Positioner, "positioner");
Positioner.displayName = "TourPositioner";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Tour.Context;

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(Tour.Content, "content");
Content.displayName = "TourContent";

export type TitleProps = ComponentProps<typeof Title>;
export const Title = withContext(Tour.Title, "title");
Title.displayName = "TourTitle";

export type DescriptionProps = ComponentProps<typeof Description>;
export const Description = withContext(Tour.Description, "description");
Description.displayName = "TourDescription";

export type ActionTriggerProps = ComponentProps<typeof ActionTrigger>;
export const ActionTrigger = withContext(Tour.ActionTrigger, "actionTrigger");
ActionTrigger.displayName = "TourActionTrigger";

export type CloseTriggerProps = ComponentProps<typeof CloseTrigger>;
export const CloseTrigger = withContext(Tour.CloseTrigger, "closeTrigger");
CloseTrigger.displayName = "TourCloseTrigger";

export type ArrowProps = ComponentProps<typeof Arrow>;
export const Arrow = withContext(Tour.Arrow, "arrow");
Arrow.displayName = "TourArrow";

export type ArrowTipProps = ComponentProps<typeof ArrowTip>;
export const ArrowTip = withContext(Tour.ArrowTip, "arrowTip");
ArrowTip.displayName = "TourArrowTip";

export type ControlProps = ComponentProps<typeof Control>;
export const Control = withContext(Tour.Control, "control");
Control.displayName = "TourControl";

export type BackdropProps = ComponentProps<typeof Backdrop>;
export const Backdrop = withContext(Tour.Backdrop, "backdrop");
Backdrop.displayName = "TourBackdrop";

export type ProgressTextProps = ComponentProps<typeof ProgressText>;
export const ProgressText = withContext(Tour.ProgressText, "progressText");
ProgressText.displayName = "TourProgressText";

export type SpotlightProps = ComponentProps<typeof Spotlight>;
export const Spotlight = withContext(Tour.Spotlight, "spotlight");
Spotlight.displayName = "TourSpotlight";
