import React, { useEffect, useState } from "react";
import * as Linking from "expo-linking";
import { StatusBar } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import * as Font from "expo-font";
import { loginAsAdmin } from "./src/service/UserService";

async function loadFonts() {
	await Font.loadAsync({
		"Plus-Jakarta-Sans-Regular": require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
		"Plus-Jakarta-Sans-Bold": require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
		"Plus-Jakarta-Sans-Bold-Italic": require("./assets/fonts/PlusJakartaSans-BoldItalic.ttf"),
		"Plus-Jakarta-Sans-Extra-Bold": require("./assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
		"Plus-Jakarta-Sans-Extra-Bold-Italic": require("./assets/fonts/PlusJakartaSans-ExtraBoldItalic.ttf"),
		"Plus-Jakarta-Sans-Extra-Light": require("./assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
		"Plus-Jakarta-Sans-Extra-Light-Italic": require("./assets/fonts/PlusJakartaSans-ExtraLightItalic.ttf"),
		"Plus-Jakarta-Sans-Italic": require("./assets/fonts/PlusJakartaSans-Italic.ttf"),
		"Plus-Jakarta-Sans-Light": require("./assets/fonts/PlusJakartaSans-Light.ttf"),
		"Plus-Jakarta-Sans-Light-Italic": require("./assets/fonts/PlusJakartaSans-LightItalic.ttf"),
		"Plus-Jakarta-Sans-Medium": require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
		"Plus-Jakarta-Sans-Medium-Italic": require("./assets/fonts/PlusJakartaSans-MediumItalic.ttf"),
		"Plus-Jakarta-Sans-Semi-Bold": require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
		"Plus-Jakarta-Sans-Semi-Bold-Italic": require("./assets/fonts/PlusJakartaSans-SemiBoldItalic.ttf"),
		Nexa_rust_script_b: require("./assets/fonts/nexa_rust_script_b_00-webfont.ttf"),
		"Nexa-Rust-Script-Cursive": require("./assets/fonts/nexa_rust_script_b_00-webfont.ttf"),
	});
}

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);
	const prefix = Linking.createURL("/");
	const linking = {
		prefixes: [prefix],
	};

	useEffect(() => {
		loadFonts()
			.then(() => setFontsLoaded(true))
			.catch(error => {
				console.log("Error loading fonts:", error);
				setFontsLoaded(true); // Continue rendering even if fonts fail to load
			});
	}, []);

	if (!fontsLoaded) {
		// Return a loading screen or placeholder while fonts are being loaded
		return null; // Replace with your loading component or placeholder
	}

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<AppNavigator linking={linking} />
		</>
	);
}
