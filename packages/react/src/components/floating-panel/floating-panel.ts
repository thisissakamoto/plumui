import type { UseFloatingPanelContext, UseFloatingPanelProps, UseFloatingPanelReturn } from "@ark-ui/react/floating-panel";
import { FloatingPanel, useFloatingPanel, useFloatingPanelContext } from "@ark-ui/react/floating-panel";
import { createStyleContext } from "@plumui/styled/jsx";
import { floatingPanelRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useFloatingPanel;
export const useContext = useFloatingPanelContext;

export type {
  UseFloatingPanelProps as UseProps,
  UseFloatingPanelReturn as UseReturn,
  UseFloatingPanelContext as UseContext,
}

const { withRootProvider, withProvider, withContext } = createStyleContext(floatingPanelRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(FloatingPanel.RootProvider);
Provider.displayName = "FloatingPanelProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(FloatingPanel.Root, "root");
Root.displayName = "FloatingPanelRoot";

export type TriggerProps = ComponentProps<typeof Trigger>;
export const Trigger = withContext(FloatingPanel.Trigger, "trigger");
Trigger.displayName = "FloatingPanelTrigger";

export type PositionerProps = ComponentProps<typeof Positioner>;
export const Positioner = withContext(FloatingPanel.Positioner, "positioner");
Positioner.displayName = "FloatingPanelPositioner";

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(FloatingPanel.Content, "content");
Content.displayName = "FloatingPanelContent";

export type HeaderProps = ComponentProps<typeof Header>;
export const Header = withContext(FloatingPanel.Header, "header");
Header.displayName = "FloatingPanelHeader";

export type BodyProps = ComponentProps<typeof Body>;
export const Body = withContext(FloatingPanel.Body, "body");
Body.displayName = "FloatingPanelBody";

export type TitleProps = ComponentProps<typeof Title>;
export const Title = withContext(FloatingPanel.Title, "title");
Title.displayName = "FloatingPanelTitle";

export type ControlProps = ComponentProps<typeof Control>;
export const Control = withContext(FloatingPanel.Control, "control");
Control.displayName = "FloatingPanelControl";

export type CloseTriggerProps = ComponentProps<typeof CloseTrigger>;
export const CloseTrigger = withContext(FloatingPanel.CloseTrigger, "closeTrigger");
CloseTrigger.displayName = "FloatingPanelCloseTrigger";

export type DragTriggerProps = ComponentProps<typeof DragTrigger>;
export const DragTrigger = withContext(FloatingPanel.DragTrigger, "dragTrigger");
DragTrigger.displayName = "FloatingPanelDragTrigger";

export type ResizeTriggerProps = ComponentProps<typeof ResizeTrigger>;
export const ResizeTrigger = withContext(FloatingPanel.ResizeTrigger, "resizeTrigger");
ResizeTrigger.displayName = "FloatingPanelResizeTrigger";

export type StageTriggerProps = ComponentProps<typeof StageTrigger>;
export const StageTrigger = withContext(FloatingPanel.StageTrigger, "stageTrigger");
StageTrigger.displayName = "FloatingPanelStageTrigger";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = FloatingPanel.Context;
