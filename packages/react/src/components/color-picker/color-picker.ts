import {
  ColorPicker,
  parseColor,
  type UseColorPickerContext,
  type UseColorPickerProps,
  type UseColorPickerReturn,
  useColorPicker,
  useColorPickerContext,
} from "@ark-ui/react/color-picker";
import { createStyleContext } from "@plumui/styled/jsx";
import { colorPickerRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const parse = parseColor;
export const use = useColorPicker;
export const useContext = useColorPickerContext;

export type {
  UseColorPickerProps as UseProps,
  UseColorPickerReturn as UseReturn,
  UseColorPickerContext as UseContext,
};

const { withProvider, withContext } = createStyleContext(colorPickerRecipe);

export const Provider = withProvider(ColorPicker.RootProvider, "root");
Provider.displayName = "ColorPickerProvider";
export type ProviderProps = ComponentProps<typeof Provider>;

export const Root = withProvider(ColorPicker.Root, "root");
Root.displayName = "ColorPickerRoot";
export type RootProps = ComponentProps<typeof Root>;

export const Area = withContext(ColorPicker.Area, "area");
Area.displayName = "ColorPickerArea";
export type AreaProps = ComponentProps<typeof Area>;

export const AreaBackground = withContext(ColorPicker.AreaBackground, "areaBackground");
AreaBackground.displayName = "ColorPickerAreaBackground";
export type AreaBackgroundProps = ComponentProps<typeof AreaBackground>;

export const AreaThumb = withContext(ColorPicker.AreaThumb, "areaThumb");
AreaThumb.displayName = "ColorPickerAreaThumb";
export type AreaThumbProps = ComponentProps<typeof AreaThumb>;

export const ChannelSlider = withContext(ColorPicker.ChannelSlider, "channelSlider");
ChannelSlider.displayName = "ColorPickerChannelSlider";
export type ChannelSliderProps = ComponentProps<typeof ChannelSlider>;

export const ChannelSliderLabel = withContext(ColorPicker.ChannelSliderLabel, "channelSliderLabel");
ChannelSliderLabel.displayName = "ColorPickerChannelSliderLabel";
export type ChannelSliderLabelProps = ComponentProps<typeof ChannelSliderLabel>;

export const ChannelSliderThumb = withContext(ColorPicker.ChannelSliderThumb, "channelSliderThumb");
ChannelSliderThumb.displayName = "ColorPickerChannelSliderThumb";
export type ChannelSliderThumbProps = ComponentProps<typeof ChannelSliderThumb>;

export const ChannelSliderTrack = withContext(ColorPicker.ChannelSliderTrack, "channelSliderTrack");
ChannelSliderTrack.displayName = "ColorPickerChannelSliderTrack";
export type ChannelSliderTrackProps = ComponentProps<typeof ChannelSliderTrack>;

export const ChannelSliderValueText = withContext(ColorPicker.ChannelSliderValueText, "channelSliderValueText");
ChannelSliderValueText.displayName = "ColorPickerChannelSliderValueText";
export type ChannelSliderValueTextProps = ComponentProps<typeof ChannelSliderValueText>;

export const ChannelInput = withContext(ColorPicker.ChannelInput, "channelInput");
ChannelInput.displayName = "ColorPickerChannelInput";
export type ChannelInputProps = ComponentProps<typeof ChannelInput>;

export const Content = withContext(ColorPicker.Content, "content");
Content.displayName = "ColorPickerContent";
export type ContentProps = ComponentProps<typeof Content>;

export const ValueSwatch = ColorPicker.ValueSwatch;
ValueSwatch.displayName = "ColorPickerValueSwatch";
export type ValueSwatchProps = ComponentProps<typeof ValueSwatch>;

export const Context = ColorPicker.Context;
export type ContextProps = ComponentProps<typeof Context>;

export const Control = withContext(ColorPicker.Control, "control");
Control.displayName = "ColorPickerControl";
export type ControlProps = ComponentProps<typeof Control>;

export const EyeDropperTrigger = withContext(ColorPicker.EyeDropperTrigger, "eyeDropperTrigger");
EyeDropperTrigger.displayName = "ColorPickerEyeDropperTrigger";
export type EyeDropperTriggerProps = ComponentProps<typeof EyeDropperTrigger>;

export const FormatSelect = withContext(ColorPicker.FormatSelect, "formatSelect");
FormatSelect.displayName = "ColorPickerFormatSelect";
export type FormatSelectProps = ComponentProps<typeof FormatSelect>;

export const FormatTrigger = withContext(ColorPicker.FormatTrigger, "formatTrigger");
FormatTrigger.displayName = "ColorPickerFormatTrigger";
export type FormatTriggerProps = ComponentProps<typeof FormatTrigger>;

export const HiddenInput = ColorPicker.HiddenInput;
HiddenInput.displayName = "ColorPickerHiddenInput";
export type HiddenInputProps = ComponentProps<typeof HiddenInput>;

export const Label = withContext(ColorPicker.Label, "label");
Label.displayName = "ColorPickerLabel";
export type LabelProps = ComponentProps<typeof Label>;

export const Positioner = withContext(ColorPicker.Positioner, "positioner");
Positioner.displayName = "ColorPickerPositioner";
export type PositionerProps = ComponentProps<typeof Positioner>;

export const Swatch = withContext(ColorPicker.Swatch, "swatch");
Swatch.displayName = "ColorPickerSwatch";
export type SwatchProps = ComponentProps<typeof Swatch>;

export const SwatchGroup = withContext(ColorPicker.SwatchGroup, "swatchGroup");
SwatchGroup.displayName = "ColorPickerSwatchGroup";
export type SwatchGroupProps = ComponentProps<typeof SwatchGroup>;

export const SwatchIndicator = withContext(ColorPicker.SwatchIndicator, "swatchIndicator");
SwatchIndicator.displayName = "ColorPickerSwatchIndicator";
export type SwatchIndicatorProps = ComponentProps<typeof SwatchIndicator>;

export const SwatchTrigger = withContext(ColorPicker.SwatchTrigger, "swatchTrigger");
SwatchTrigger.displayName = "ColorPickerSwatchTrigger";
export type SwatchTriggerProps = ComponentProps<typeof SwatchTrigger>;

export const TransparencyGrid = withContext(ColorPicker.TransparencyGrid, "transparencyGrid");
TransparencyGrid.displayName = "ColorPickerTransparencyGrid";
export type TransparencyGridProps = ComponentProps<typeof TransparencyGrid>;

export const Trigger = withContext(ColorPicker.Trigger, "trigger");
Trigger.displayName = "ColorPickerTrigger";
export type TriggerProps = ComponentProps<typeof Trigger>;

export const ValueText = withContext(ColorPicker.ValueText, "valueText");
ValueText.displayName = "ColorPickerValueText";
export type ValueTextProps = ComponentProps<typeof ValueText>;

export const View = withContext(ColorPicker.View, "view");
View.displayName = "ColorPickerView";
export type ViewProps = ComponentProps<typeof View>;
