import type { ColorScale } from "../types";

export const neutral = {
  50: "oklch(0.985 0 0)",
  100: "oklch(0.97 0 0)",
  200: "oklch(0.922 0 0)",
  300: "oklch(0.87 0 0)",
  400: "oklch(0.708 0 0)",
  500: "oklch(0.556 0 0)",
  600: "oklch(0.439 0 0)",
  700: "oklch(0.371 0 0)",
  800: "oklch(0.269 0 0)",
  900: "oklch(0.205 0 0)",
  950: "oklch(0.145 0 0)",
} satisfies ColorScale;

export const neutralAlpha = {
  50: "oklch(0.985 0 0 / 0.05)",
  100: "oklch(0.97 0 0 / 0.1)",
  200: "oklch(0.922 0 0 / 0.2)",
  300: "oklch(0.87 0 0 / 0.3)",
  400: "oklch(0.708 0 0 / 0.4)",
  500: "oklch(0.556 0 0 / 0.5)",
  600: "oklch(0.439 0 0 / 0.6)",
  700: "oklch(0.371 0 0 / 0.7)",
  800: "oklch(0.269 0 0 / 0.8)",
  900: "oklch(0.205 0 0 / 0.9)",
  950: "oklch(0.145 0 0 / 0.95)",
} satisfies ColorScale;

export const neutralDark = {
  50: "oklch(0.145 0 0)",
  100: "oklch(0.205 0 0)",
  200: "oklch(0.269 0 0)",
  300: "oklch(0.371 0 0)",
  400: "oklch(0.439 0 0)",
  500: "oklch(0.556 0 0)",
  600: "oklch(0.708 0 0)",
  700: "oklch(0.87 0 0)",
  800: "oklch(0.922 0 0)",
  900: "oklch(0.97 0 0)",
  950: "oklch(0.985 0 0)",
} satisfies ColorScale;

export const neutralDarkAlpha = {
  50: "oklch(0.145 0 0 / 0.05)",
  100: "oklch(0.205 0 0 / 0.1)",
  200: "oklch(0.269 0 0 / 0.2)",
  300: "oklch(0.371 0 0 / 0.3)",
  400: "oklch(0.439 0 0 / 0.4)",
  500: "oklch(0.556 0 0 / 0.5)",
  600: "oklch(0.708 0 0 / 0.6)",
  700: "oklch(0.87 0 0 / 0.7)",
  800: "oklch(0.922 0 0 / 0.8)",
  900: "oklch(0.97 0 0 / 0.9)",
  950: "oklch(0.985 0 0 / 0.95)",
} satisfies ColorScale;
