import { defineStyles } from "@pandacss/dev";

export const content = defineStyles({
  w: "full",
  _focusVisible: { border: "none", outline: "none" }
});


export const arrow = defineStyles({
  display: "flex",
  "--arrow-size": "{sizes.8}",
  "--arrow-background": "inherit",

  "[data-placement^=top] > &": {
    rotate: "180deg"
  },

  "[data-placement^=bottom] > &": {
    rotate: "0deg"
  },

  "[data-placement^=left] > &": {
    rotate: "90deg"
  },

  "[data-placement^=right] > &": {
    rotate: "270deg"
  },

  "[data-placement=right-start] > &": {
    rotate: "270deg",
    my: "10.5px"
  },

  "[data-placement=left-end] > &": {
    rotate: "270deg",
    my: "10.5px"
  },
});

export const arrowTip = defineStyles({
  boxSize: "auto"
});


export const backdrop = defineStyles({
  top: "0",
  left: "0",
  w: "100vw",
  h: "100dvh",
  position: "absolute",
  bg: "{colors.black.a70}",
});


export const positioner = defineStyles({
  top: "0px",
  left: "0px",
  w: "full",
  display: "flex",
  height: "100dvh",
  position: "fixed",
  alignItems: "initial",
  flexDirection: "column",
  justifyContent: "initial",
})
