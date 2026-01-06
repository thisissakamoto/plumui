import type { UseEditableContext, UseEditableProps, UseEditableReturn } from "@ark-ui/react/editable";
import { Editable, useEditable, useEditableContext } from "@ark-ui/react/editable";
import { createStyleContext } from "@plumui/styled/jsx";
import { editableRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useEditable;
export const useContext = useEditableContext;

export type {
  UseEditableProps as UseProps,
  UseEditableReturn as UseReturn,
  UseEditableContext as UseContext,
}

const { withRootProvider, withProvider, withContext } = createStyleContext(editableRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(Editable.RootProvider);
Provider.displayName = "EditableProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Editable.Root, "root");
Root.displayName = "EditableRoot";

export type AreaProps = ComponentProps<typeof Area>;
export const Area = withContext(Editable.Area, "area");
Area.displayName = "EditableArea";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(Editable.Label, "label");
Label.displayName = "EditableLabel";

export type PreviewProps = ComponentProps<typeof Preview>;
export const Preview = withContext(Editable.Preview, "preview");
Preview.displayName = "EditablePreview";

export type InputProps = ComponentProps<typeof Input>;
export const Input = withContext(Editable.Input, "input");
Input.displayName = "EditableInput";

export type ControlProps = ComponentProps<typeof Control>;
export const Control = withContext(Editable.Control, "control");
Control.displayName = "EditableControl";

export type EditTriggerProps = ComponentProps<typeof EditTrigger>;
export const EditTrigger = withContext(Editable.EditTrigger, "editTrigger");
EditTrigger.displayName = "EditableEditTrigger";

export type SubmitTriggerProps = ComponentProps<typeof SubmitTrigger>;
export const SubmitTrigger = withContext(Editable.SubmitTrigger, "submitTrigger");
SubmitTrigger.displayName = "EditableSubmitTrigger";

export type CancelTriggerProps = ComponentProps<typeof CancelTrigger>;
export const CancelTrigger = withContext(Editable.CancelTrigger, "cancelTrigger");
CancelTrigger.displayName = "EditableCancelTrigger";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Editable.Context;
