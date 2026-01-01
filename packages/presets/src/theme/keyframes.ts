import { defineKeyframes } from "@pandacss/dev";

export const keyframes = defineKeyframes({

  pulse: {
    "0%, 100%": {
      backgroundColor: "color-mix(in oklab, {colors.bg.surface}, transparent 0%)"
    },
    "50%": {
      backgroundColor: "color-mix(in oklab, {colors.bg.surface}, transparent 50%)"
    },
  },

  marqueeX: {
    "0%": {
      transform: "translateX(0%)"
    },
    "100%": {
      transform: "translateX(var(--marquee-translate))"
    }
  },

  fadeIn: {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },

  fadeOut: {
    "0%": { opacity: 1 },
    "100%": { opacity: 0 },
  },

  spin: {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },

  ping: {
    "0%": { transform: "scale(1)", opacity: "1" },
    "75%": { transform: "scale(1.1)", opacity: "0.75" },
    "100%": { transform: "scale(1)", opacity: "0" },
  },

  bounce: {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-15px)" },
  },

  shake: {
    "0%, 100%": { transform: "translateX(0)" },
    "20%": { transform: "translateX(-4px)" },
    "40%": { transform: "translateX(4px)" },
    "60%": { transform: "translateX(-2px)" },
    "80%": { transform: "translateX(2px)" },
  },

  nudgeUp: {
    "0%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-4px)" },
    "100%": { transform: "translateY(0)" },
  },

  press: {
    "0%": { transform: "scale(1)" },
    "100%": { transform: "scale(0.97)" },
  },

  pop: {
    "0%": { transform: "scale(0.95)" },
    "100%": { transform: "scale(1)" },
  },

  slideUp: {
    "0%": { opacity: 0, transform: "translateY(8px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },

  slideDown: {
    "0%": { opacity: 0, transform: "translateY(-8px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },

  slideLeft: {
    "0%": { opacity: 0, transform: "translateX(8px)" },
    "100%": { opacity: 1, transform: "translateX(0)" },
  },

  slideRight: {
    "0%": { opacity: 0, transform: "translateX(-8px)" },
    "100%": { opacity: 1, transform: "translateX(0)" },
  },

  scaleIn: {
    "0%": { opacity: 0, transform: "scale(0.96)" },
    "100%": { opacity: 1, transform: "scale(1)" },
  },

  scaleOut: {
    "0%": { opacity: 1, transform: "scale(1)" },
    "100%": { opacity: 0, transform: "scale(0.96)" },
  },

  collapseDown: {
    "0%": { height: "0", opacity: 0 },
    "100%": { height: "var(--height)", opacity: 1 },
  },

  collapseUp: {
    "0%": { height: "var(--height)", opacity: 1 },
    "100%": { height: "0", opacity: 0 },
  },

  shine: {
    "100%": {
      transform: "translateX(200%)",
    }
  },

  float: {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-6px)" },
  },

  breath: {
    "0%, 100%": { opacity: 1 },
    "50%": { opacity: 0.85 },
  },
});
