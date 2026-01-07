import {
  Splitter,
  type UseSplitterContext,
  type UseSplitterProps,
  type UseSplitterReturn,
  useSplitter,
  useSplitterContext,
} from "@ark-ui/react/splitter";
import { createStyleContext } from "@plumui/styled/jsx";
import { splitterRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useSplitter;
export const useContext = useSplitterContext;

export type {
  UseSplitterProps as UseProps,
  UseSplitterReturn as UseReturn,
  UseSplitterContext as UseContext,
};

const { withProvider, withContext } = createStyleContext(splitterRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(Splitter.RootProvider, "root");
Provider.displayName = "SplitterProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Splitter.Root, "root");
Root.displayName = "SplitterRoot";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Splitter.Context;

export type PanelProps = ComponentProps<typeof Panel>;
export const Panel = withContext(Splitter.Panel, "panel");
Panel.displayName = "SplitterPanel";

export type ResizeTriggerProps = ComponentProps<typeof ResizeTrigger>;
export const ResizeTrigger = withContext(Splitter.ResizeTrigger, "resizeTrigger");
ResizeTrigger.displayName = "SplitterResizeTrigger";
