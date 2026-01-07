import { ark } from "@ark-ui/react";
import { styled } from "@plumui/styled/jsx";
import { textareaRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export type TextareaProps = ComponentProps<typeof Textarea>;
export const Textarea = styled(ark.textarea, textareaRecipe);
Textarea.displayName = "Textarea";
