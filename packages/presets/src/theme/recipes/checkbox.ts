import { checkboxAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
import { styles } from "./styles";

export const checkboxRecipe = defineSlotRecipe({
	className: "checkbox",
	slots: checkboxAnatomy.keys(),
	base: {
		root: {
			...styles.pressable.button,

			"--fg": "",
			"--size": "",
			"--radii": "",
			"--svg-size": "",
			"--bg-checked": "",

			gap: "{spacing.12}",
			justifyContent: "start",
		},
		group: styles.layout.base,
		label: styles.typography.label,
		control: {
		  ...styles.pressable.button,

			zIndex: "1",
			w: "var(--size)",
			h: "var(--size)",
			position: "relative",
			rounded: "var(--radii)",
			bg: "{colors.bg.elevated}",
			shadow: "{shadows.sm}, {shadows.ring.offset}",

			_before: {
				zIndex: "0",
				opacity: "0",
				content: "''",
				scale: "50% 50%",
				rounded: "inherit",
				position: "absolute",
				boxSize: "{sizes.full}",
				bg: "var(--bg-checked)",
				transformOrigin: "center",
				transition: `
				  scale .2s linear,
				  opacity .2s linear,
					background-color .2s ease-out
				`,
			},

			_checked: {
				_before: {
					opacity: "1",
					scale: "100% 100%",
				},
			},
		},
		indicator: {
		  ...styles.layout.center,

		  zIndex: "inherit",
			boxSize: "{sizes.full}",
			color: "{colors.transparent}",

			"> svg": {
			  boxSize: "var(--svg-size)",
			},

			_checked: {
	      color: "var(--fg)",
		  }
		},
	},
	variants: {
		radius: {
			xs: {
				root: {
					"--radii": "{radii.2}",
				},
			},
			sm: {
				root: {
					"--radii": "{radii.4}",
				},
			},
			md: {
				root: {
					"--radii": "{radii.6}",
				},
			},
			lg: {
				root: {
					"--radii": "{radii.8}",
				},
			},
			xl: {
				root: {
					"--radii": "{radii.12}",
				},
			},
			full: {
				root: {
					"--radii": "{radii.full}",
				},
			},
			none: {
				root: {
					"--radii": "{radii.none}",
				},
			},
		},

		size: {
			xs: {
				root: {
				  "--size": "{sizes.12}",
					"--svg-size": "{sizes.10}",
				},
			},
			sm: {
				root: {
					"--size": "{sizes.16}",
					"--svg-size": "{sizes.14}",
				},
			},
			md: {
				root: {
					"--size": "{sizes.20}",
					"--svg-size": "{sizes.16}",
				},
			},
			lg: {
				root: {
					"--size": "{sizes.24}",
					"--svg-size": "{sizes.16}",
				},
			},
			xl: {
				root: {
					"--size": "{sizes.28}",
					"--svg-size": "{sizes.20}",
				},
			},
		},

		visual: {
		  filled: {
				root: {
				"--fg": "{colors.colorPalette.fg}",
				"--bg-checked": "{colors.colorPalette.fill}",
				}
			},
			surface: {
			  root: {
          "--stroke-checked": "",
  				"--fg": "{colors.colorPalette.fg.subtle}",
  				"--bg-checked": "{colors.colorPalette.fill.subtle}",
				}
			},
			outlined: {
			  root: {
					"--fg": "{colors.colorPalette.fg.subtle}",
					"--bg-checked": "{colors.transparent}",
				}
			},
		},

		tone: {
		blue: { root: { colorPalette: "blue" } },
      red: { root: { colorPalette: "red" } },
      green: { root: { colorPalette: "green" } },
      orange: { root: { colorPalette: "orange" } },
      purple: { root: { colorPalette: "purple" } },
      gray: { root: { colorPalette: "gray" } },
      amber: { root: { colorPalette: "amber" } },
      cyan: { root: { colorPalette: "cyan" } },
      indigo: { root: { colorPalette: "indigo" } },
      pink: { root: { colorPalette: "pink" } },
      teal: { root: { colorPalette: "teal" } },
      yellow: { root: { colorPalette: "yellow" } },
      lime: { root: { colorPalette: "lime" } },
      sky: { root: { colorPalette: "sky" } },
      slate: { root: { colorPalette: "slate" } },
      violet: { root: { colorPalette: "violet" } },
      fuchsia: { root: { colorPalette: "fuchsia" } },
      emerald: { root: { colorPalette: "emerald" } },
      rose: { root: { colorPalette: "rose" } },
      zinc: { root: { colorPalette: "zinc" } },
      neutral: { root: { colorPalette: "neutral" } },
      stone: { root: { colorPalette: "stone" } },
    },
	},
	defaultVariants: {
		size: "sm",
		tone: "blue",
		radius: "md",
		visual: "filled",
	},
});
