import { ark } from "@ark-ui/react";
import { styled } from "@plumui/styled/jsx";
import { textRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export type TextProps = ComponentProps<typeof Text>;
export const Text = styled(ark.p, textRecipe);
Text.displayName = "Text";
