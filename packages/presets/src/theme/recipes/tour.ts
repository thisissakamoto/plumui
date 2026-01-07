import { defineSlotRecipe } from "@pandacss/dev";

export const tourRecipe = defineSlotRecipe({
  className: "tour",
  slots: ["root", "positioner", "content", "title", "description", "actionTrigger", "closeTrigger", "arrow", "arrowTip", "control", "backdrop", "progressText", "spotlight"]
});
