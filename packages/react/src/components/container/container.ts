import { ark } from '@ark-ui/react';
import { styled } from '@plumui/styled/jsx';
import { containerRecipe } from '@plumui/styled/recipes';
import type { ComponentProps } from '@plumui/styled/types';

export type ContainerProps = ComponentProps<typeof Container>;
export const Container = styled(ark.div, containerRecipe);
Container.displayName = 'Container';
