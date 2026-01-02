import { ark } from '@ark-ui/react';
import { styled } from '@plumui/styled/jsx';
import { inputRecipe } from '@plumui/styled/recipes';
import type { ComponentProps } from '@plumui/styled/types';

export type InputProps = ComponentProps<typeof Input>;
export const Input = styled(ark.div, inputRecipe);
Input.displayName = 'Input';
