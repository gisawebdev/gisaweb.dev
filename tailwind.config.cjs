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
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			slate: colors.slate,
		},
		extend: {},

		fontFamily: {
			mono: ["Noto Sans Mono", "system-ui", "monospace"],
		},
	},
	plugins: [],
};
