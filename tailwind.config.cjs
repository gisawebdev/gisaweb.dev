/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			lotion: "#FCFCFC",
			aquamarine: "#83FFE6",
			"pastel-red": "#FF5F5F",
			"charleston-green": "#2C2C2C",
			// Tailwind Colors
			current: "currentColor",
			transparent: "transparent",
			slate: colors.slate,
			gray: colors.gray,
			zinc: colors.zinc,
			neutral: colors.neutral,
			stone: colors.stone,
			red: colors.red,
			orange: colors.orange,
			amber: colors.amber,
			yellow: colors.yellow,
			lime: colors.lime,
			green: colors.green,
			emerald: colors.emerald,
			teal: colors.teal,
			cyan: colors.cyan,
			sky: colors.sky,
			blue: colors.blue,
			indigo: colors.indigo,
			violet: colors.violet,
			purple: colors.purple,
			fuchsia: colors.fuchsia,
			pink: colors.pink,
			rose: colors.rose,
			black: colors.black,
			white: colors.white,
		},
		extend: {},

		fontFamily: {
			mono: ["Noto Sans Mono", "system-ui", "monospace"],
		},
	},
	plugins: [],
};
