import { datePickerAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const calendarRecipe = defineSlotRecipe({
  className: "calendar",
  slots: datePickerAnatomy.keys(),
  base: {
    root: styles.layout.base,
    input: styles.form.input,
    clearTrigger: styles.pressable.button,
    presetTrigger: styles.pressable.button,
    viewTrigger: styles.pressable.button,
    nextTrigger: styles.pressable.button,
    prevTrigger: styles.pressable.button,
    trigger: styles.pressable.button,
    tableHead: styles.layout.base,
    control: styles.layout.stack,
    yearSelect: styles.layout.base,
    monthSelect: styles.layout.base,
    view: styles.layout.base,
    label: styles.typography.label,
    tableBody: {
      w: "{sizes.full}",
      gap: "{spacing.2}",
      display: "inline-flex",
      flexDirection: "column",
    },
    content: {
      ...styles.overlay.content,
    },
    tableRow: {
      h: "fit",
      w: "{sizes.full}",
      gap: "{spacing.2}",
      display: "inline-flex",
      justifyContent: "center",
    },
    table: {
      w: "{sizes.full}",
    },
    tableCellTrigger: {
      ...styles.pressable.button,

      color: "{colors.fg}",
      boxSize: "{sizes.32}",
      rounded: "{radii.full}",
      fontSize: "{fontSizes.16}",

      "&:hover:not([data-selected])": {
        color: "{colors.fill.accent}",
        bg: "color-mix(in oklab, var(--mix-20) {colors.fill.accent}, {colors.transparent})",
      },

      _selected: {
        color: "{colors.white}",
        bg: "{colors.fill.accent}",
      }
    },
    tableHeader: {
      w: "{sizes.32}",
      fontWeight: "500",
      textAlign: "center",
      fontSize: "{fontSizes.14}",
      color: "{colors.fg.subtle}",
      lineHeight: "{lineHeights.none}"
    },
    tableCell: {
      alignItems: "center",
      display: "inline-flex",
      justifyContent: "center",
    },
    positioner: {
      ...styles.layout.base,
      w: "var(--reference-width)",
    },
    rangeText: {
      ...styles.typography.subtitle,

      flex: "1",
      fontWeight: "500",
      textAlign: "center",
      color: "{colors.fg}",
      fontSize: "{fontSizes.14}",
    },
    viewControl: {
      w: "{sizes.full}",
      bg: "{colors.bg}",
      alignItems: "center",
      display: "inline-flex",
      flexDirection: "column",
      shadow: "{shadows.2xl}",
    },
  },
});
