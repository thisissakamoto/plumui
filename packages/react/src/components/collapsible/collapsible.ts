import type { UseCollapsibleContext, UseCollapsibleProps, UseCollapsibleReturn } from "@ark-ui/react/collapsible";
import { Collapsible, useCollapsible, useCollapsibleContext } from "@ark-ui/react/collapsible";
import { createStyleContext } from "@plumui/styled/jsx";
import { collapsibleRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useCollapsible;
export const useContext = useCollapsibleContext;

export type {
  UseCollapsibleProps as UseProps,
  UseCollapsibleReturn as UseReturn,
  UseCollapsibleContext as UseContext,
};

const { withRootProvider, withProvider, withContext } = createStyleContext(collapsibleRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(Collapsible.RootProvider);
Provider.displayName = "CollapsibleProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Collapsible.Root, "root");
Root.displayName = "CollapsibleRoot";

export type TriggerProps = ComponentProps<typeof Trigger>;
export const Trigger = withContext(Collapsible.Trigger, "trigger");
Trigger.displayName = "CollapsibleTrigger";

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(Collapsible.Content, "content");
Content.displayName = "CollapsibleContent";

export type IndicatorProps = ComponentProps<typeof Indicator>;
export const Indicator = withContext(Collapsible.Indicator, "indicator");
Indicator.displayName = "CollapsibleIndicator";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Collapsible.Context;
