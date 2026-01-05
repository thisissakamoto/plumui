import { createStyleContext } from "@plumui/styled/jsx";
import { inputGroupRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";
import * as InputGroup from "./input-group-base";
import type { UseInputGroupProps, UseInputGroupReturn } from "./input-group-context";
import { useInputGroup, useInputGroupContext } from "./input-group-context";

export const use = useInputGroup;
export const useContext = useInputGroupContext;

export type {
  UseInputGroupProps as UseProps,
  UseInputGroupReturn as UseReturn,
};

const { withRootProvider, withProvider, withContext } = createStyleContext(inputGroupRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(InputGroup.Provider);
Provider.displayName = "InputGroupProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(InputGroup.Root, "root");
Root.displayName = "InputGroupRoot";

export type MessageProps = ComponentProps<typeof Message>;
export const Message = withContext(InputGroup.Message, "message");
Message.displayName = "InputGroupMessage";

export type AddonProps = ComponentProps<typeof Addon>;
export const Addon = withContext(InputGroup.Addon, "addon");
Addon.displayName = "InputGroupAddon";

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(InputGroup.Content, "content");
Content.displayName = "InputGroupContent";

export type HelperProps = ComponentProps<typeof Helper>;
export const Helper = withContext(InputGroup.Helper, "helper");
Helper.displayName = "InputGroupHelper";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(InputGroup.Label, "label");
Label.displayName = "InputGroupLabel";

export type InputProps = ComponentProps<typeof Input>;
export const Input = withContext(InputGroup.Input, "input");
Input.displayName = "InputGroupInput";

export type TextareaProps = ComponentProps<typeof Textarea>;
export const Textarea = withContext(InputGroup.Textarea, "textarea");
Textarea.displayName = "InputGroupTextarea";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = InputGroup.Context;
Context.displayName = "InputGroupContext";
