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
	Regular: "PlusJakartaSans-Bold.tff",
	Bold: "PlusJakartaSans-Bold.ttf",
	BoldItalic: "PlusJakartaSans-BoldItalic.ttf",
	ExtraBold: "PlusJakartaSans-ExtraBold.ttf",
	ExtraBoldItalic: "PlusJakartaSans-ExtraBoldItalic.ttf",
	ExtraLight: "PlusJakartaSans-ExtraLight.ttf",
	ExtraLightItalic: "PlusJakartaSans-ExtraLightItalic.ttf",
	Italic: "PlusJakartaSans-Italic.ttf",
	Light: "PlusJakartaSans-Light.ttf",
	LightItalic: "PlusJakartaSans-LightItalic.ttf",
	Medium: "PlusJakartaSans-Medium.ttf",
	MediumItalic: "PlusJakartaSans-MediumItalic.ttf",
	SemiBold: "PlusJakartaSans-SemiBold.ttf",
	SemiBoldItalic: "PlusJakartaSans-SemiBoldItalic.ttf",
};
