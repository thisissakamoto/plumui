import { carouselAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const carouselRecipe = defineSlotRecipe({
  className: "carousel",
  slots: carouselAnatomy.extendWith("autoplayTrigger", "progressText").keys(),

  base: {
    nextTrigger: styles.pressable.button,
    prevTrigger: styles.pressable.button,
    progressText: styles.typography.subtitle,
    autoplayTrigger: styles.pressable.button,
    control: styles.layout.stack,
    indicatorGroup: styles.layout.stack,
    indicator: styles.pressable.button,
  },
});
