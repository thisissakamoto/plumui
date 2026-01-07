import { ark } from "@ark-ui/react";
import { styled } from "@plumui/styled/jsx";
import { surfaceRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export type SurfaceProps = ComponentProps<typeof Surface>;
export const Surface = styled(ark.div, surfaceRecipe);
Surface.displayName = "Surface";
