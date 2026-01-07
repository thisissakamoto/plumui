import { Presence as ArkPresence } from "@ark-ui/react/presence";
import { styled } from "@plumui/styled/jsx";
import type { ComponentProps } from "@plumui/styled/types";

export type PresenceProps = ComponentProps<typeof Presence>;
export const Presence = styled(ArkPresence);
Presence.displayName = "Presence";
