import {
  PasswordInput,
  type UsePasswordInputContext,
  type UsePasswordInputProps,
  type UsePasswordInputReturn,
  usePasswordInput,
  usePasswordInputContext,
} from "@ark-ui/react/password-input";
import { createStyleContext } from "@plumui/styled/jsx";
import { passwordInputRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = usePasswordInput;
export const useContext = usePasswordInputContext;

export type {
  UsePasswordInputContext as UseContext,
  UsePasswordInputReturn as UseReturn,
  UsePasswordInputProps as UseProps,
};

const { withProvider, withContext } = createStyleContext(passwordInputRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(PasswordInput.RootProvider, "root");
Provider.displayName = "PasswordInputProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(PasswordInput.Root, "root");
Root.displayName = "PasswordInputRoot";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = PasswordInput.Context;

export type ControlProps = ComponentProps<typeof Control>;
export const Control = withContext(PasswordInput.Control, "control");
Control.displayName = "PasswordInputControl";

export type InputProps = ComponentProps<typeof Input>;
export const Input = withContext(PasswordInput.Input, "input");
Input.displayName = "PasswordInputInput";

export type IndicatorProps = ComponentProps<typeof Indicator>;
export const Indicator = withContext(PasswordInput.Indicator, "indicator");
Indicator.displayName = "PasswordInputIndicator";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(PasswordInput.Label, "label");
Label.displayName = "PasswordInputLabel";

export type VisibilityTriggerProps = ComponentProps<typeof VisibilityTrigger>;
export const VisibilityTrigger = withContext(PasswordInput.VisibilityTrigger, "visibilityTrigger");
VisibilityTrigger.displayName = "PasswordInputVisibilityTrigger";
