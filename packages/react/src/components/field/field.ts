import type { UseFieldContext, UseFieldProps, UseFieldReturn } from "@ark-ui/react/field";
import { Field, useField, useFieldContext } from "@ark-ui/react/field";
import { createStyleContext } from "@plumui/styled/jsx";
import { fieldRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useField;
export const useContext = useFieldContext;

export type {
  UseFieldProps as UseProps,
  UseFieldReturn as UseReturn,
  UseFieldContext as UseContext,
}

const { withRootProvider, withProvider, withContext } = createStyleContext(fieldRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(Field.RootProvider);
Provider.displayName = "FieldProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Field.Root, "root");
Root.displayName = "FieldRoot";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(Field.Label, "label");
Label.displayName = "FieldLabel";

export type InputProps = ComponentProps<typeof Input>;
export const Input = withContext(Field.Input, "input");
Input.displayName = "FieldInput";

export type TextareaProps = ComponentProps<typeof Textarea>;
export const Textarea = withContext(Field.Textarea, "textarea");
Textarea.displayName = "FieldTextarea";

export type SelectProps = ComponentProps<typeof Select>;
export const Select = withContext(Field.Select, "select");
Select.displayName = "FieldSelect";

export type HelperTextProps = ComponentProps<typeof HelperText>;
export const HelperText = withContext(Field.HelperText, "helperText");
HelperText.displayName = "FieldHelperText";

export type ErrorTextProps = ComponentProps<typeof ErrorText>;
export const ErrorText = withContext(Field.ErrorText, "errorText");
ErrorText.displayName = "FieldErrorText";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Field.Context;
