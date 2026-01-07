import { carouselAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const carouselRecipe = defineSlotRecipe({
  className: "carousel",
  slots: carouselAnatomy.extendWith("autoplayTrigger", "progressText").keys(),

  base: {
    control: {
      ...styles.layout.stack,
      flexDirection: "row",
    },
    nextTrigger: styles.pressable.button,
    prevTrigger: styles.pressable.button,
    progressText: styles.typography.subtitle,
    autoplayTrigger: styles.pressable.button,
    indicatorGroup: styles.layout.stack,
    indicator: styles.pressable.button,
  },
});
