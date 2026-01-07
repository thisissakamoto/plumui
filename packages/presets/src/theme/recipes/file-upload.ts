import { fileUploadAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const fileUploadRecipe = defineSlotRecipe({
  className: "file-upload",
  slots: fileUploadAnatomy.extendWith("clearTrigger").keys(),
  base: {
    root: styles.layout.base,
    item: styles.layout.base,
    dropzone: styles.layout.base,
    itemGroup: {
      listStyleType: "none",
    },
    label: styles.typography.label,
    itemPreview: styles.layout.base,
    trigger: styles.pressable.button,
    itemName: {
      ...styles.typography.subtitle,

      fontSize: "{fontSizes.14}"
    },
    itemSizeText: styles.typography.body,
    itemPreviewImage: styles.media.image,
    clearTrigger: styles.pressable.button,
    itemDeleteTrigger: styles.pressable.button,
  },
});
