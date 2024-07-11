/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xs: '475px',
			...defaultTheme.screens,
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto'],
				sans: ['Open Sans'],
				robotoserif : ['Roboto Serif']
			},
		},
	},
	plugins: [],
}
