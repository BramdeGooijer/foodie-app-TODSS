import { StatusBar } from "expo-status-bar";
import React, { StyleSheet, Text, View } from "react-native";
import FilterButton from "./filterButtonComponent";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
			<FilterButton options={["Option 1", "Option 2", "Option 3"]} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
