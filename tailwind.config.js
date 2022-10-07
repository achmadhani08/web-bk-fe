/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				blueBg: "#223D94",
				blueBtn: "#384D8F",
			},
		},
	},
	plugins: [require("daisyui")],
};
