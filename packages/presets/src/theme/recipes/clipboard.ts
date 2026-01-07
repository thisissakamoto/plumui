import { clipboardAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const clipboardRecipe = defineSlotRecipe({
	className: "clipboard",
	slots: clipboardAnatomy.extendWith("valueText").keys(),
	base: {
		trigger: {
		  ...styles.pressable.button,

			"&[data-copied]": {
			  ...styles.pressable._disabled
			}
		},
		root: styles.layout.base,
		input: styles.form.input,
		indicator: styles.layout.base,
		valueText: styles.layout.base,
		label: styles.typography.label,
		control: styles.layout.stack,
	},
});
