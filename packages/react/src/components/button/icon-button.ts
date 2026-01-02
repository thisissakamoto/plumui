import { ark } from "@ark-ui/react";
import { styled } from "@plumui/styled/jsx";
import { iconButtonRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";


export type IconButtonProps = ComponentProps<typeof IconButton>;
export const IconButton = styled(ark.button, iconButtonRecipe);
IconButton.displayName = "IconButton";
