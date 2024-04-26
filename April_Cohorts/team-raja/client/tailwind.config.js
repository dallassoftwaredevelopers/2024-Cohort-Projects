/** @type {import('tailwindcss').Config} */
module.exports = {
	daisyui: {
		themes: ['light', 'dark'],
	},
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
};
