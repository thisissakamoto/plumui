import {
	Switch as ArkSwitch,
	type UseSwitchContext,
	type UseSwitchProps,
	type UseSwitchReturn,
	useSwitch,
	useSwitchContext,
} from "@ark-ui/react/switch";
import { createStyleContext } from "@plumui/styled/jsx";
import { switchRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

const { withProvider, withContext } = createStyleContext(switchRecipe);

export const use = useSwitch;
export const useContext = useSwitchContext;

export type {
	UseSwitchContext as UseContext,
	UseSwitchProps as UseProps,
	UseSwitchReturn as UseReturn,
};

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(ArkSwitch.RootProvider, "root");
Provider.displayName = "SwitchProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(ArkSwitch.Root, "root");
Root.displayName = "SwitchRoot";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = ArkSwitch.Context;

export type ControlProps = ComponentProps<typeof Control>;
export const Control = withContext(ArkSwitch.Control, "control");
Control.displayName = "SwitchControl";

export type HiddenInputProps = ComponentProps<typeof HiddenInput>;
export const HiddenInput = ArkSwitch.HiddenInput;
HiddenInput.displayName = "SwitchHiddenInput";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(ArkSwitch.Label, "label");
Label.displayName = "SwitchLabel";

export type ThumbProps = ComponentProps<typeof Thumb>;
export const Thumb = withContext(ArkSwitch.Thumb, "thumb");
Thumb.displayName = "SwitchThumb";
