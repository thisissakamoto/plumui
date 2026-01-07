import {
  createToaster,
  Toast,
  Toaster,
  type UseToastContext,
  useToastContext,
} from "@ark-ui/react/toast";
import { createStyleContext } from "@plumui/styled/jsx";
import { toastRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const useContext = useToastContext;
export const create: typeof createToaster = createToaster;

export type {
  UseToastContext as UseContext,
};

const { withProvider, withContext } = createStyleContext(toastRecipe);

export type GroupProps = ComponentProps<typeof Group>;
export const Group = withProvider(Toaster, "group");
Group.displayName = "ToastGroup";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withContext(Toast.Root, "root");
Root.displayName = "ToastRoot";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Toast.Context;

export type TitleProps = ComponentProps<typeof Title>;
export const Title = withContext(Toast.Title, "title");
Title.displayName = "ToastTitle";

export type DescriptionProps = ComponentProps<typeof Description>;
export const Description = withContext(Toast.Description, "description");
Description.displayName = "ToastDescription";

export type ActionTriggerProps = ComponentProps<typeof ActionTrigger>;
export const ActionTrigger = withContext(Toast.ActionTrigger, "actionTrigger");
ActionTrigger.displayName = "ToastActionTrigger";

export type CloseTriggerProps = ComponentProps<typeof CloseTrigger>;
export const CloseTrigger = withContext(Toast.CloseTrigger, "closeTrigger");
CloseTrigger.displayName = "ToastCloseTrigger";
