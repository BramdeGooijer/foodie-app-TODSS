/* eslint-disable react/self-closing-comp */
import React, {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	ScrollView,
} from "react-native";
import {
	IconButton,
	RedirectButton,
} from "../../components/globalComponents/buttonComponents";

export default function FavoritesScreen() {
	return (
		<SafeAreaView>
			<IconButton icon="arrowleft" style={styles.returnButton} />
			<ScrollView style={styles.recipeInfoContainer}>
				<View style={styles.topArea}>
					<Text>Placeholder for main recipe info</Text>
					<View
						style={StyleSheet.create({
							width: "90%",
							backgroundColor: "black",
						})}>
						<View
							style={StyleSheet.create({
								width: "80%",
								backgroundColor: "green",
							})}></View>
					</View>
				</View>
				<View style={styles.descriptionArea}>
					<Text>Placeholder for recipe description</Text>
				</View>
				<View style={styles.ingredientArea}>
					<Text>Placeholder for recipe ingrediënts and preperation steps</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	recipeInfoContainer: {
		height: "100%",
	},

	returnButton: {
		position: "absolute",
		top: 50,
		left: 100,
		zIndex: 999,
	},

	topArea: {
		backgroundColor: "blue",
		// flex: 2,
		height: 500,
	},

	descriptionArea: {
		backgroundColor: "yellow",
		// flex: 1,
		height: 200,
	},

	ingredientArea: {
		backgroundColor: "red",
		// flex: 1,
		height: 500,
	},
});
