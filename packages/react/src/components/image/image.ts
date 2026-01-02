import { ark } from '@ark-ui/react';
import { styled } from '@plumui/styled/jsx';
import { imageRecipe } from '@plumui/styled/recipes';
import type { ComponentProps } from '@plumui/styled/types';

export type ImageProps = ComponentProps<typeof Image>;
export const Image = styled(ark.img, imageRecipe);
Image.displayName = 'Image';
