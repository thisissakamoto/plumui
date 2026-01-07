import {
  AngleSlider,
  type UseAngleSliderContext,
  type UseAngleSliderProps,
  type UseAngleSliderReturn,
  useAngleSlider,
  useAngleSliderContext,
} from "@ark-ui/react/angle-slider";
import { createStyleContext } from "@plumui/styled/jsx";
import { angleSliderRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useAngleSlider;
export const useContext = useAngleSliderContext;

export type {
  UseAngleSliderProps as UseProps,
  UseAngleSliderReturn as UseReturn,
  UseAngleSliderContext as UseContext,
};

const { withProvider, withContext } = createStyleContext(angleSliderRecipe);

export const Provider = withProvider(AngleSlider.RootProvider, "root");
Provider.displayName = "AngleSliderProvider";
export type ProviderProps = ComponentProps<typeof Provider>;

export const Root = withProvider(AngleSlider.Root, "root");
Root.displayName = "AngleSliderRoot";
export type RootProps = ComponentProps<typeof Root>;

export const Context = AngleSlider.Context;
export type ContextProps = ComponentProps<typeof Context>;

export const Control = withContext(AngleSlider.Control, "control");
Control.displayName = "AngleSliderControl";
export type ControlProps = ComponentProps<typeof Control>;

export const HiddenInput = AngleSlider.HiddenInput;
HiddenInput.displayName = "AngleSliderHiddenInput";
export type HiddenInputProps = ComponentProps<typeof HiddenInput>;

export const Label = withContext(AngleSlider.Label, "label");
Label.displayName = "AngleSliderLabel";
export type LabelProps = ComponentProps<typeof Label>;

export const Marker = withContext(AngleSlider.Marker, "marker");
Marker.displayName = "AngleSliderMarker";
export type MarkerProps = ComponentProps<typeof Marker>;

export const MarkerGroup = withContext(AngleSlider.MarkerGroup, "markerGroup");
MarkerGroup.displayName = "AngleSliderMarkerGroup";
export type MarkerGroupProps = ComponentProps<typeof MarkerGroup>;

export const Thumb = withContext(AngleSlider.Thumb, "thumb");
Thumb.displayName = "AngleSliderThumb";
export type ThumbProps = ComponentProps<typeof Thumb>;

export const ValueText = withContext(AngleSlider.ValueText, "valueText");
ValueText.displayName = "AngleSliderValueText";
export type ValueTextProps = ComponentProps<typeof ValueText>;
