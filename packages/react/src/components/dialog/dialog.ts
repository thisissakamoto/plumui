import { Dialog } from "@ark-ui/react/dialog";
import { createStyleContext } from "@plumui/styled/jsx";
import { dialogRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

const { withRootProvider, withContext } = createStyleContext(dialogRecipe);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withRootProvider(Dialog.RootProvider);
RootProvider.displayName = "DialogProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider(Dialog.Root);
Root.displayName = "DialogRoot";

export type TriggerProps = ComponentProps<typeof Trigger>;
export const Trigger = withContext(Dialog.Trigger, "trigger");
Trigger.displayName = "DialogTrigger";

export type BackdropProps = ComponentProps<typeof Backdrop>;
export const Backdrop = withContext(Dialog.Backdrop, "backdrop");
Backdrop.displayName = "DialogBackdrop";

export type PositionerProps = ComponentProps<typeof Positioner>;
export const Positioner = withContext(Dialog.Positioner, "positioner");
Positioner.displayName = "DialogPositioner";

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(Dialog.Content, "content");
Content.displayName = "DialogContent";

export type TitleProps = ComponentProps<typeof Title>;
export const Title = withContext(Dialog.Title, "title");
Title.displayName = "DialogTitle";

export type DescriptionProps = ComponentProps<typeof Description>;
export const Description = withContext(Dialog.Description, "description");
Description.displayName = "DialogDescription";

export type CloseTriggerProps = ComponentProps<typeof CloseTrigger>;
export const CloseTrigger = withContext(Dialog.CloseTrigger, "closeTrigger");
CloseTrigger.displayName = "DialogCloseTrigger";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Dialog.Context;
