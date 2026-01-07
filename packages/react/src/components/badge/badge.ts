import { ark } from '@ark-ui/react';
import { styled } from '@plumui/styled/jsx';
import { badgeRecipe } from '@plumui/styled/recipes';
import type { ComponentProps } from '@plumui/styled/types';

export type BadgeProps = ComponentProps<typeof Badge>;
export const Badge = styled(ark.div, badgeRecipe);
Badge.displayName = 'Badge';
