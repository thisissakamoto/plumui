import { colorPickerAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const colorPickerRecipe = defineSlotRecipe({
  className: "color-pciker",
  slots: colorPickerAnatomy.keys(),
  base: {
    trigger: styles.pressable.button,
    valueText: styles.typography.body,
    control: styles.layout.stack,
    areaThumb: styles.layout.thumb,
    channelSliderLabel: styles.typography.label,
    channelSliderValueText: styles.typography.caption,
    content:  styles.overlay.content,
    label: styles.typography.label,
    channelInput: {
      ...styles.form.input,

      textTransform: "uppercase",
    },
    area: {
      h: "160px",
      w: "{sizes.full}",
      rounded: "{radii.12}",
    },
    areaBackground: {
      rounded: "{radii.12}",
      boxSize: "{sizes.full}",
    },
    channelSliderTrack: {
      display: "flex",
      alignItems: "center",
      boxSize: "{sizes.full}",
      justifyContent: "center",
    },
    channelSlider: {
      h: "{sizes.16}",
      overflow: "clip",
      w: "{sizes.full}",
      rounded: "{radii.full}",
    },
    channelSliderThumb: {
      ...styles.layout.thumb,
      transform: "translateY(-50%)",

      w: "{sizes.18}",
      h: "{sizes.10}",
      rounded: "{radii.20}",
    }
  }
})
