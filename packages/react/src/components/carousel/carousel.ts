import { Carousel } from "@ark-ui/react/carousel";
import { createStyleContext } from "@plumui/styled/jsx";
import type { ComponentProps } from "@plumui/styled/types";
import { carouselRecipe } from "packages/styled/dist/recipes";

const { withRootProvider, withProvider, withContext } = createStyleContext(carouselRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withRootProvider(Carousel.RootProvider);
Provider.displayName = "CarouselProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Carousel.Root, "root");
Root.displayName = "CarouselRoot";

export type ControlProps = ComponentProps<typeof Control>;
export const Control = withContext(Carousel.Control, "control");
Control.displayName = "CarouselControl";

export type ProgressTextProps = ComponentProps<typeof ProgressText>;
export const ProgressText = withContext(Carousel.ProgressText, "progressText");
ProgressText.displayName = "CarouselProgressText";

export type ItemGroupProps = ComponentProps<typeof ItemGroup>;
export const ItemGroup = withContext(Carousel.ItemGroup, "itemGroup");
ItemGroup.displayName = "CarouselItemGroup";

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(Carousel.Item, "item");
Item.displayName = "CarouselItem";

export type IndicatorGroupProps = ComponentProps<typeof IndicatorGroup>;
export const IndicatorGroup = withContext(Carousel.IndicatorGroup, "indicatorGroup");
IndicatorGroup.displayName = "CarouselIndicatorGroup";

export type IndicatorProps = ComponentProps<typeof Indicator>;
export const Indicator = withContext(Carousel.Indicator, "indicator");
Indicator.displayName = "CarouselIndicator";

export type NextTriggerProps = ComponentProps<typeof NextTrigger>;
export const NextTrigger = withContext(Carousel.NextTrigger, "nextTrigger");
NextTrigger.displayName = "CarouselNextTrigger";

export type PrevTriggerProps = ComponentProps<typeof PrevTrigger>;
export const PrevTrigger = withContext(Carousel.PrevTrigger, "prevTrigger");
PrevTrigger.displayName = "CarouselPrevTrigger";

export type AutoplayTriggerProps = ComponentProps<typeof AutoplayTrigger>;
export const AutoplayTrigger = withContext(Carousel.AutoplayTrigger, "autoplayTrigger");
AutoplayTrigger.displayName = "CarouselAutoplayTrigger";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Carousel.Context;
