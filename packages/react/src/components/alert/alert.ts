import { ark } from "@ark-ui/react";
import type { UseCollapsibleContext, UseCollapsibleProps, UseCollapsibleReturn } from "@ark-ui/react/collapsible";
import { Collapsible, useCollapsible, useCollapsibleContext } from "@ark-ui/react/collapsible";
import { createStyleContext } from "@plumui/styled/jsx";
import { alertRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useCollapsible;
export const useContext = useCollapsibleContext;

export type {
  UseCollapsibleProps as UseProps,
  UseCollapsibleReturn as UseReturn,
  UseCollapsibleContext as UseContext,
}

const { withProvider, withContext } = createStyleContext(alertRecipe);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Collapsible.Root, "root");
Root.displayName = "AlertRoot";

export type TriggerProps = ComponentProps<typeof Trigger>;
export const Trigger = withContext(Collapsible.Trigger, "trigger");
Trigger.displayName = "AlertTrigger";

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(Collapsible.Content, "content");
Content.displayName = "AlertContent";

export type TitleProps = ComponentProps<typeof Title>;
export const Title = withContext(ark.h3, "title");
Title.displayName = "AlertTitle";

export type DescriptionProps = ComponentProps<typeof Description>;
export const Description = withContext(ark.p, "description");
Description.displayName = "AlertDescription";

export type ActionProps = ComponentProps<typeof Action>;
export const Action = withContext(ark.button, "action");
Action.displayName = "AlertAction";

export type IndicatorProps = ComponentProps<typeof Indicator>;
export const Indicator = withContext(Collapsible.Indicator, "indicator");
Indicator.displayName = "AlertIndicator";
