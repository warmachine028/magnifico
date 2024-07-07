/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"my-image": "url(./src/assets/Container.png)"
			}
		},
	},
	plugins: [],
};
