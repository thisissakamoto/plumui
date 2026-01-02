import { ark } from "@ark-ui/react";
import { styled } from "@plumui/styled/jsx";
import { anchorRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export type AnchorProps = ComponentProps<typeof Anchor>;
export const Anchor = styled(ark.a, anchorRecipe);
