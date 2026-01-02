import { ark } from '@ark-ui/react';
import { styled } from '@plumui/styled/jsx';
import type { ComponentProps } from '@plumui/styled/types';

export type ByteProps = ComponentProps<typeof Byte>;
export const Byte = styled(ark.span);
Byte.displayName = 'FormatByte';

// Number Component
export type NumberProps = ComponentProps<typeof Number>;
export const Number = styled(ark.span);
Number.displayName = 'FormatNumber';

// RelativeTime Component
export type RelativeTimeProps = ComponentProps<typeof RelativeTime>;
export const RelativeTime = styled(ark.span);
RelativeTime.displayName = 'FormatRelativeTime';
