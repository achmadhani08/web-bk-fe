/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				color1: "#F5EFE6",
				color2: "#E8DFCA",
				color3: "#AEBDCA",
				color4: "#7895B2",
			},
		},
	},
	plugins: [require("daisyui")],
};
