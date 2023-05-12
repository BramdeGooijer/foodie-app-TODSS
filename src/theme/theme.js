import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const COLORS = {
	primary: "#294406",
	title: "#072F4A",
	white: "#FFFFFF",
	lightGrey: "#D3D6D6",
	grey: "#C1C0C9",
	blue: "#087BB6",
	yellow: "#F4D03F",
	yellowCheck: "#FBBA00",
};

export const SIZES = {
	h1: 22,
	h2: 20,
	h3: 18,
	h4: 16,
	h5: 14,
	h6: 12,

	width,
	height,
};

export const FONTS = {
	Regular: "Plus-Jakarta-Sans-Regular",
	Bold: "Plus-Jakarta-Sans-Bold",
	BoldItalic: "Plus-Jakarta-Sans-Bold-Italic",
	ExtraBold: "Plus-Jakarta-Sans-Extra-Bold",
	ExtraBoldItalic: "Plus-Jakarta-Sans-Extra-Bold-Italic",
	ExtraLight: "Plus-Jakarta-Sans-Extra-Light",
	ExtraLightItalic: "Plus-Jakarta-Sans-Extra-Light-Italic",
	Italic: "Plus-Jakarta-Sans-Italic",
	Light: "Plus-Jakarta-Sans-Light",
	LightItalic: "Plus-Jakarta-Sans-Light-Italic",
	Medium: "Plus-Jakarta-Sans-Medium",
	MediumItalic: "Plus-Jakarta-Sans-Medium-Italic",
	SemiBold: "Plus-Jakarta-Sans-Semi-Bold",
	SemiBoldItalic: "Plus-Jakarta-Sans-Semi-Bold-Italic",
};
