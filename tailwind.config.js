// tailwind.config.js
import resolveConfig from "tailwindcss/resolveConfig";
import defaultConfig from "tailwindcss/defaultConfig";

const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
	...defaultColors,
	...{
		primary: {
			DEFAULT: "#0e100f",
		},
		secondary: {
			DEFAULT: "#212121",
			2: "#DFDCFF",
		},
		tertiary: {
			DEFAULT: "#fffce1",
		},
		gray_50: "#7C7C6F",
	},
};

const plugin = function ({ addUtilities }) {
	const newUtilities = {
		".text-gradient-primary": {
			background: "linear-gradient(to bottom, #FF8709 52.24%, #F7BDF8 100%)",
			"-webkit-background-clip": "text",
			"background-clip": "text",
			color: "transparent",
		},
		".bg-gradient-primary": {
			background: "linear-gradient(111.45deg, #FF8709 19.42%, #F7BDF8 73.08%)",
		},
		".text-gradient-secondary": {
			background: "radial-gradient(152.22% 128.73% at 133.77% 74.23%, #DFDCFF 27.08%, #A69EFF 100%)",
			"-webkit-background-clip": "text",
			"background-clip": "text",
			color: "transparent",
		},
		".bg-gradient-secondary": {
			background: "radial-gradient(152.22% 128.73% at 133.77% 74.23%, #DFDCFF 27.08%, #A69EFF 100%)",
		},
	};

	return addUtilities(newUtilities, ["responsive", "hover"]);
};
const defaultConfigVar = resolveConfig(defaultConfig);

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roobert: ["var(--font-roobert)"],
			},
			colors: colors,
			height: {
				...defaultConfigVar.theme.height,
				22: "88px",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), plugin],
};

