/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				'.shadow-outline': {
					filter: 'drop-shadow(0 0 0.8rem rgba(255, 255, 255, 0.2)) contrast(1.05) saturate(1.2) hue-rotate(-5deg)',
				},
			};

			addUtilities(newUtilities);
		})
	],
}
