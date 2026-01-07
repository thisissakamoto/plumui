import { fieldAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const fieldRecipe = defineSlotRecipe({
	className: "field",
	slots: fieldAnatomy.extendWith("requiredIndicator").keys(),
	base: {
		input: styles.form.input,
		root: {
			display: "flex",
			gap: "{spacing.6}",
			flexDirection: "column",
		},
		select: styles.layout.base,
		label: styles.typography.label,
		textarea: styles.form.textarea,
		helperText: styles.typography.body,
		requiredIndicator: styles.layout.base,
		errorText: {
			...styles.typography.body,
			color: "{colors.fg.error.strong}",
		},
	},
});
