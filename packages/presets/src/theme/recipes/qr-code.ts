import { qrCodeAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const qrCodeRecipe = defineSlotRecipe({
  className: "qr-code",
  slots: qrCodeAnatomy.extendWith("downloadTrigger").keys(),
  base: {
    root: styles.layout.base,
    frame: { boxSize: "200px" },
    overlay: styles.layout.center,
    pattern: { fill: "{colors.fg}" },
    "downloadTrigger": styles.pressable.button,
  }
})
