/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
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
				robotoserif: ['Roboto Serif']
			},
		},
	},
	plugins: [],
}
