import {
  ScrollArea,
  type UseScrollAreaContext,
  type UseScrollAreaProps,
  type UseScrollAreaReturn,
  useScrollArea,
  useScrollAreaContext,
} from "@ark-ui/react/scroll-area";
import { createStyleContext } from "@plumui/styled/jsx";
import { scrollAreaRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useScrollArea;
export const useContext = useScrollAreaContext;

export type {
  UseScrollAreaContext as UseContext,
  UseScrollAreaProps as UseProps,
  UseScrollAreaReturn as UseReturn,
};

const { withProvider, withContext } = createStyleContext(scrollAreaRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(ScrollArea.RootProvider, "root");
Provider.displayName = "ScrollAreaProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(ScrollArea.Root, "root");
Root.displayName = "ScrollAreaRoot";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = ScrollArea.Context;

export type ViewportProps = ComponentProps<typeof Viewport>;
export const Viewport = withContext(ScrollArea.Viewport, "viewport");
Viewport.displayName = "ScrollAreaViewport";

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(ScrollArea.Content, "content");
Content.displayName = "ScrollAreaContent";

export type ScrollbarProps = ComponentProps<typeof Scrollbar>;
export const Scrollbar = withContext(ScrollArea.Scrollbar, "scrollbar");
Scrollbar.displayName = "ScrollAreaScrollbar";

export type ThumbProps = ComponentProps<typeof Thumb>;
export const Thumb = withContext(ScrollArea.Thumb, "thumb");
Thumb.displayName = "ScrollAreaThumb";

export type CornerProps = ComponentProps<typeof Corner>;
export const Corner = withContext(ScrollArea.Corner, "corner");
Corner.displayName = "ScrollAreaCorner";
