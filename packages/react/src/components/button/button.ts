import { ark } from "@ark-ui/react";
import { styled } from "@plumui/styled/jsx";
import { buttonRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";


export type ButtonProps = ComponentProps<typeof Button>;
export const Button = styled(ark.button, buttonRecipe);
Button.displayName = "Button";
