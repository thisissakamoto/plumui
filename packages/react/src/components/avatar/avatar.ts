import type { UseAvatarContext, UseAvatarProps, UseAvatarReturn } from "@ark-ui/react/avatar";
import { Avatar, useAvatar, useAvatarContext } from "@ark-ui/react/avatar";
import { createStyleContext } from "@plumui/styled/jsx";
import { avatarRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useAvatar;
export const useContext = useAvatarContext;

export type {
  UseAvatarProps as UseProps,
  UseAvatarReturn as UseReturn,
  UseAvatarContext as UseContext,
}

const { withRootProvider, withProvider, withContext } = createStyleContext(avatarRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(Avatar.RootProvider);
Provider.displayName = "AvatarProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Avatar.Root, "root");
Root.displayName = "AvatarRoot";

export type FallbackProps = ComponentProps<typeof Fallback>;
export const Fallback = withContext(Avatar.Fallback, "fallback");
Fallback.displayName = "AvatarFallback";

export type ImageProps = ComponentProps<typeof Image>;
export const Image = withContext(Avatar.Image, "image");
Image.displayName = "AvatarImage";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Avatar.Context;
