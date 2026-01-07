import { Highlight as ArkHighlight } from '@ark-ui/react';
import { styled } from '@plumui/styled/jsx';
import { highlightRecipe } from '@plumui/styled/recipes';
import type { ComponentProps } from '@plumui/styled/types';

export type HighlightProps = ComponentProps<typeof Highlight>;
export const Highlight = styled(ArkHighlight, highlightRecipe);
Highlight.displayName = 'Highlight';
