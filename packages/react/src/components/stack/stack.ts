import { ark } from "@ark-ui/react";
import { styled } from "@plumui/styled/jsx";
import { stackRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export type StackProps = ComponentProps<typeof Stack>;
export const Stack = styled(ark.div, stackRecipe);
Stack.displayName = "Stack";
