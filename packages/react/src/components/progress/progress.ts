import {
  Progress as ArkProgress,
  type UseProgressContext,
  type UseProgressProps,
  type UseProgressReturn,
  useProgress,
  useProgressContext,
} from "@ark-ui/react/progress";
import { createStyleContext } from "@plumui/styled/jsx";
import { progressRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useProgress;
export const useContext = useProgressContext;

export type {
  UseProgressContext as UseContext,
  UseProgressProps as UseProps,
  UseProgressReturn as UseReturn,
};

const { withProvider, withContext } = createStyleContext(progressRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(ArkProgress.RootProvider, "root");
Provider.displayName = "ProgressProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(ArkProgress.Root, "root");
Root.displayName = "ProgressRoot";

export type CircleRangeProps = ComponentProps<typeof CircleRange>;
export const CircleRange = withContext(ArkProgress.CircleRange, "circleRange");
CircleRange.displayName = "ProgressCircleRange";

export type CircleTrackProps = ComponentProps<typeof CircleTrack>;
export const CircleTrack = withContext(ArkProgress.CircleTrack, "circleTrack");
CircleTrack.displayName = "ProgressCircleTrack";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = ArkProgress.Context;

export type RangeProps = ComponentProps<typeof Range>;
export const Range = withContext(ArkProgress.Range, "range");
Range.displayName = "ProgressRange";

export type TrackProps = ComponentProps<typeof Track>;
export const Track = withContext(ArkProgress.Track, "track");
Track.displayName = "ProgressTrack";

export type CircleProps = ComponentProps<typeof Circle>;
export const Circle = withContext(ArkProgress.Circle, "circle");
Circle.displayName = "ProgressCircle";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(ArkProgress.Label, "label");
Label.displayName = "ProgressLabel";

export type ValueTextProps = ComponentProps<typeof ValueText>;
export const ValueText = withContext(ArkProgress.ValueText, "valueText");
ValueText.displayName = "ProgressValueText";
