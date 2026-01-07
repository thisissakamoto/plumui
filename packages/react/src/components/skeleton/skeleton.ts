import { ark } from "@ark-ui/react";
import { styled } from "@plumui/styled/jsx";
import { skeletonRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export type SkeletonProps = ComponentProps<typeof Skeleton>;
export const Skeleton = styled(ark.span, skeletonRecipe)
Skeleton.displayName = "Skeleton";
