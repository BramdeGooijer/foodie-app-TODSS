import React, { StyleSheet, View } from "react-native";
import Searchbar from "./searchButtonComponent";

export default function App() {
	return (
		<View style={styles.container}>
			<Searchbar></Searchbar>
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
