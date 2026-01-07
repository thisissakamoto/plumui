import { Marquee } from "@ark-ui/react";
import { createStyleContext } from "@plumui/styled/jsx"
import { marqueeRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

const { withProvider, withRootProvider, withContext } = createStyleContext(marqueeRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(Marquee.RootProvider);
Provider.displayName = "MarqueeProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Marquee.Root, 'root');
Provider.displayName = "MarqueeRoot";

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(Marquee.Content, 'content');
Provider.displayName = "MarqueeContent";

export type EdgeProps = ComponentProps<typeof Edge>;
export const Edge = withContext(Marquee.Edge, 'edge');
Provider.displayName = "MarqueeEdge";

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(Marquee.Item, 'item');
Provider.displayName = "MarqueeItem";

export type ViewportProps = ComponentProps<typeof Viewport>;
export const Viewport = withContext(Marquee.Viewport, 'viewport');
Provider.displayName = "MarqueeViewport";


export type ContextProps = ComponentProps<typeof Context>;
export const Context = Marquee.Context;
