import {
	Slider,
	type UseSliderContext,
	type UseSliderProps,
	type UseSliderReturn,
	useSlider,
	useSliderContext,
} from "@ark-ui/react/slider";
import { createStyleContext } from "@plumui/styled/jsx";
import { sliderRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useSlider;
export const useContext = useSliderContext;

export type {
	UseSliderProps as UseProps,
	UseSliderContext as UseContext,
	UseSliderReturn as UseReturn,
};

const { withProvider, withContext } = createStyleContext(sliderRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(Slider.RootProvider, "root");
Provider.displayName = "SliderProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Slider.Root, "root");
Root.displayName = "SliderRoot";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Slider.Context;

export type ControlProps = ComponentProps<typeof Control>;
export const Control = withContext(Slider.Control, "control");
Control.displayName = "SliderControl";

export type HiddenInputProps = ComponentProps<typeof HiddenInput>;
export const HiddenInput = Slider.HiddenInput;
HiddenInput.displayName = "SliderHiddenInput";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(Slider.Label, "label");
Label.displayName = "SliderLabel";

export type StepGroupProps = ComponentProps<typeof StepGroup>;
export const StepGroup = withContext(Slider.MarkerGroup, "stepGroup");
StepGroup.displayName = "SliderStepGroup";

export type StepProps = ComponentProps<typeof Step>;
export const Step = withContext(Slider.Marker, "step");
Step.displayName = "SliderStep";

export type MarkerGroupProps = ComponentProps<typeof MarkerGroup>;
export const MarkerGroup = withContext(Slider.MarkerGroup, "markerGroup");
MarkerGroup.displayName = "SliderMarkerGroup";

export type MarkerProps = ComponentProps<typeof Marker>;
export const Marker = withContext(Slider.Marker, "marker");
Marker.displayName = "SliderMarker";

export type RangeProps = ComponentProps<typeof Range>;
export const Range = withContext(Slider.Range, "range");
Range.displayName = "SliderRange";

export type ThumbProps = ComponentProps<typeof Thumb>;
export const Thumb = withContext(Slider.Thumb, "thumb");
Thumb.displayName = "SliderThumb";

export type TrackProps = ComponentProps<typeof Track>;
export const Track = withContext(Slider.Track, "track");
Track.displayName = "SliderTrack";

export type ValueTextProps = ComponentProps<typeof ValueText>;
export const ValueText = withContext(Slider.ValueText, "valueText");
ValueText.displayName = "SliderValueText";
