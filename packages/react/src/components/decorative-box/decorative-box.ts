import { ark } from "@ark-ui/react";
import { styled } from "@plumui/styled/jsx";
import { decorativeBoxRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export type DecorativeBoxProps = ComponentProps<typeof DecorativeBox>;
export const DecorativeBox = styled(ark.div, decorativeBoxRecipe);
DecorativeBox.displayName = "DecorativeBox";
