import { Format } from '@ark-ui/react'
import { styled } from '@plumui/styled/jsx';
import type { ComponentProps } from '@plumui/styled/types';

export type ByteProps = ComponentProps<typeof Byte>;
export const Byte = styled(Format.Byte);
Byte.displayName = 'FormatByte';

export type IntegerProps = ComponentProps<typeof Integer>;
export const Integer = styled(Format.Number);
Integer.displayName = 'FormatInteger';

export type RelativeTimeProps = ComponentProps<typeof RelativeTime>;
export const RelativeTime = styled(Format.RelativeTime);
RelativeTime.displayName = 'FormatRelativeTime';
