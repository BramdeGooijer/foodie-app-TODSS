import React, {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	ScrollView,
} from "react-native";

import IngredientsComponent from "/home/alperen/vscode/foodie-app-1/src/ingredients/ingredients.js";

export default function FavoritesScreen() {
	return (
		<SafeAreaView>
			<ScrollView style={styles.recipeInfoContainer}>
				<View style={styles.topArea}>
					<Text>Placeholder for main recipe info</Text>
				</View>
				<View style={styles.descriptionArea}>
					<Text>Placeholder for recipe description</Text>
				</View>
				<View style={styles.ingredientArea}>
					<Text>Placeholder for recipe ingrediënts and preperation steps</Text>
					<IngredientsComponent />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	recipeInfoContainer: {
		height: "100%",
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
