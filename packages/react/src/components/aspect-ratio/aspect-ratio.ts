import { ark } from "@ark-ui/react";
import { styled } from "@plumui/styled/jsx";
import { aspectRatioRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export type AspectRatioProps = ComponentProps<typeof AspectRatio>;
export const AspectRatio = styled(ark.div, aspectRatioRecipe);
AspectRatio.displayName = "AspectRatio";
