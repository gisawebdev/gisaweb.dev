/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},

		fontFamily: {
			mono: ["Noto Sans Mono", "system-ui", "monospace"],
		},
	},
	plugins: [],
};
