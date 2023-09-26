module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "Helvetica", "sans-serif"],
			},
			colors: {
				primary: "#1DE8FF",
				"primary-hover": "#04D7EF",
				"primary-light": "#0FCDE2",
				secondary: "#131313",
				"secondary-dark": "#111111",
				"secondary-light": "#1E1E1E",
				"secondary-mid": "#161616",
			},
			backgroundImage: {
				"hero-img": "url('/src/assets/hero-img.svg')",
				"waves-desktop": "url('/src/assets/waves-desktop.svg')",
				"waves-mobile": "url('/src/assets/waves-mobile.svg')",
				"halftone-pattern": "url('/src/assets/halftone-pattern.svg')",
			},
			zIndex: {
				1: "1",
				"-1": "-1",
			},
			borderWidth: {
				1: "0.75px",
			},
			translate: {
				"-10.5": "-2.65rem",
			},
			fontSize: {
				"6.5xl": ["4rem"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
