import { LocaleProvider } from "@ark-ui/react";
import { styled } from "@plumui/styled/jsx";
import type { ComponentProps } from "@plumui/styled/types";

export type LocaleProps = ComponentProps<typeof Locale>;
export const Locale = styled(LocaleProvider);
Locale.displayName = "Locale"
