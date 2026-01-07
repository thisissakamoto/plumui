import { ark } from '@ark-ui/react';
import { styled } from '@plumui/styled/jsx';
import { boxRecipe } from '@plumui/styled/recipes';
import type { ComponentProps } from '@plumui/styled/types';

export type BoxProps = ComponentProps<typeof Box>;
export const Box = styled(ark.div, boxRecipe);
Box.displayName = 'Box';
