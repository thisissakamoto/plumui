import type { UseClipboardContext, UseClipboardProps, UseClipboardReturn } from "@ark-ui/react/clipboard";
import { Clipboard, useClipboard, useClipboardContext } from "@ark-ui/react/clipboard";
import { createStyleContext } from "@plumui/styled/jsx";
import { clipboardRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useClipboard;
export const useContext = useClipboardContext;

export type {
  UseClipboardProps as UseProps,
  UseClipboardReturn as UseReturn,
  UseClipboardContext as UseContext,
}

const { withRootProvider, withProvider, withContext } = createStyleContext(clipboardRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(Clipboard.RootProvider);
Provider.displayName = "ClipboardProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Clipboard.Root, "root");
Root.displayName = "ClipboardRoot";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(Clipboard.Label, "label");
Label.displayName = "ClipboardLabel";

export type ControlProps = ComponentProps<typeof Control>;
export const Control = withContext(Clipboard.Control, "control");
Control.displayName = "ClipboardControl";

export type InputProps = ComponentProps<typeof Input>;
export const Input = withContext(Clipboard.Input, "input");
Input.displayName = "ClipboardInput";

export type TriggerProps = ComponentProps<typeof Trigger>;
export const Trigger = withContext(Clipboard.Trigger, "trigger");
Trigger.displayName = "ClipboardTrigger";

export type IndicatorProps = ComponentProps<typeof Indicator>;
export const Indicator = withContext(Clipboard.Indicator, "indicator");
Indicator.displayName = "ClipboardIndicator";

export type ValueTextProps = ComponentProps<typeof ValueText>;
export const ValueText = withContext(Clipboard.ValueText, "valueText");
ValueText.displayName = "ClipboardValueText";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Clipboard.Context;
