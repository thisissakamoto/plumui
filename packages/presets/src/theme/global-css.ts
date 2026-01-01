import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  ":root": {
    "--mix-0": "0%",
    "--mix-5": "5%",
    "--mix-10": "10%",
    "--mix-15": "15%",
    "--mix-20": "20%",
    "--mix-25": "25%",
    "--mix-30": "30%",
    "--mix-40": "40%",
    "--mix-50": "50%",
    "--mix-60": "60%",
    "--mix-70": "70%",
    "--mix-80": "80%",
    "--mix-90": "90%",
    "--mix-95": "95%",
    "--mix-100": "100%",
  },
  "*": {
    margin: 0,
    padding: 0,
    fontSynthesis: "none",
    boxSizing: "border-box",
    textRendering: "optimizeLegibility",
    "-moz-osx-font-smoothing": "grayscale",
    "-webkit-font-smoothing": "antialiased",
  },
  html: {
    fontSize: "{sizes.full}",
    fontFamily: "ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Apple Color Emoji,Arial,sans-serif,Segoe UI Emoji,Segoe UI Symbol",
  },
  body: {
    bg: "{colors.bg}",
    fontWeight: "400",
    fontSize: "{fontSizes.16}",
    color: "{colors.fg.subtle}",
    lineHeight: "{lineHeights.md}",
  },
  svg: {
    width: "1em",
    height: "1em",
    display: "inline-block",
    verticalAlign: "middle",
  },
  path: {
    fill: "{color.current}",
  },
  "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, textarea:-webkit-autofill,select:-webkit-autofill": {
    "-webkit-box-shadow": "0 0 0 1000px var(--bg) inset",
    "-webkit-text-fill-color": "{colors.fg}",
    "transition": "background-color 9999s ease-in-out 0s",
  }

});
