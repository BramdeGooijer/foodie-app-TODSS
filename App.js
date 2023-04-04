import React, {
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import Searchbar from "./searchButtonComponent";

export default function App() {
	const handleContainerPress = () => {
		Keyboard.dismiss();
	};

	return (
		<TouchableWithoutFeedback onPress={handleContainerPress}>
			<View style={styles.container}>
				<Searchbar />
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		paddingTop: 80,
	},
});
