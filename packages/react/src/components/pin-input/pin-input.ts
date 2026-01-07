import {
  PinInput,
  type UsePinInputContext,
  type UsePinInputProps,
  type UsePinInputReturn,
  usePinInput,
  usePinInputContext,
} from "@ark-ui/react/pin-input";
import { createStyleContext } from "@plumui/styled/jsx";
import { pinInputRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = usePinInput;
export const useContext = usePinInputContext;

export type {
  UsePinInputContext as UseContext,
  UsePinInputProps as UseProps,
  UsePinInputReturn as UseReturn,
};

const { withProvider, withContext } = createStyleContext(pinInputRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(PinInput.RootProvider, "root");
Provider.displayName = "PinInputProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(PinInput.Root, "root");
Root.displayName = "PinInputRoot";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = PinInput.Context;

export type ControlProps = ComponentProps<typeof Control>;
export const Control = withContext(PinInput.Control, "control");
Control.displayName = "PinInputControl";

export type InputProps = ComponentProps<typeof Input>;
export const Input = withContext(PinInput.Input, "input");
Input.displayName = "PinInputInput";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(PinInput.Label, "label");
Label.displayName = "PinInputLabel";

export type HiddenInputProps = ComponentProps<typeof HiddenInput>;
export const HiddenInput = PinInput.HiddenInput;
HiddenInput.displayName = "PinInputHiddenInput";
