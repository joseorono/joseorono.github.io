/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
		  {
			dark: {
				...require("daisyui/src/theming/themes")["dark"],
				"primary": "#38bdf8",
				"secondary": "#818CF8",
				"accent": "#F471B5",
				"success": "#2DD4BF",
				"warning": "#F4BF50",
				"error": "#FB7085",
			},
		  },
		],
	  },
}
