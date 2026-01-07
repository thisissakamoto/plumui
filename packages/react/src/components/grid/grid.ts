import { ark } from '@ark-ui/react';
import { styled } from '@plumui/styled/jsx';
import { gridRecipe } from '@plumui/styled/recipes';
import type { ComponentProps } from '@plumui/styled/types';

export type GridProps = ComponentProps<typeof Grid>;
export const Grid = styled(ark.div, gridRecipe);
Grid.displayName = 'Grid';
