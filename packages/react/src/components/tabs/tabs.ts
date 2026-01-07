import {
  Tabs,
  type UseTabsContext,
  type UseTabsProps,
  type UseTabsReturn,
  useTabs,
  useTabsContext,
} from "@ark-ui/react/tabs";
import { createStyleContext } from "@plumui/styled/jsx";
import { tabsRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useTabs;
export const useContext = useTabsContext;

export type {
  UseTabsContext as UseContext,
  UseTabsProps as UseProps,
  UseTabsReturn as UseReturn,
};

const { withProvider, withContext } = createStyleContext(tabsRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(Tabs.RootProvider, "root");
Provider.displayName = "TabsProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Tabs.Root, "root");
Root.displayName = "TabsRoot";

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(Tabs.Content, "content");
Content.displayName = "TabsContent";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Tabs.Context;

export type ListProps = ComponentProps<typeof List>;
export const List = withContext(Tabs.List, "list");
List.displayName = "TabsList";

export type PanelProps = ComponentProps<typeof Panel>;
export const Panel = withContext("div", "panel");
Panel.displayName = "TabsPanel";

export type TriggerProps = ComponentProps<typeof Trigger>;
export const Trigger = withContext(Tabs.Trigger, "trigger");
Trigger.displayName = "TabsTrigger";

export type IndicatorProps = ComponentProps<typeof Indicator>;
export const Indicator = withContext(Tabs.Indicator, "indicator");
Indicator.displayName = "TabsIndicator";
