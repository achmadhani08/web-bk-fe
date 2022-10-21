/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				color1: "#98A8F8",
				color2: "#B1AFFF",
				color3: "#BCCEF8",
				color4: "#CDFCF6",
			},
		},
	},
	plugins: [require("daisyui")],
};
