import React from "react";
import * as Linking from "expo-linking";
import { StatusBar } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
	const prefix = Linking.createURL("/");
	const linking = {
		prefixes: [prefix],
	};

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<AppNavigator linking={linking} />
		</>
	);
}
