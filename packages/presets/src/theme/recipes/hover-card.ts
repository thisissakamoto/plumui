import { hoverCardAnatomy} from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const hoverCardRecipe = defineSlotRecipe({
  className: "hoverCard",
  slots: hoverCardAnatomy.keys(),
  base: {
    arrow: styles.overlay.arrow,
    positioner: styles.layout.base,
    trigger: styles.pressable.button,
    content: styles.overlay.content,
    arrowTip: styles.overlay.arrowTip,
  },
});
