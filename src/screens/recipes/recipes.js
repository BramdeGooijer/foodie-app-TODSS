import React, { View, Text, SafeAreaView, StyleSheet } from "react-native";
import RecipeItemComponent from "../../components/recipeComponents/recipeItemComponent";
import { FONTS } from "../../theme/theme.js";
import SearchButtonComponent from "../../components/recipeComponents/searchButtonComponent";
import FilterButtonComponent from "../../components/recipeComponents/filterButtonComponent";
import FilterItemsComponent from "../../components/recipeComponents/filterItemsComponent";
import { useEffect, useState } from "react";
import { getAllRecipes } from "../../service/RecipeService";
import { ScrollView } from "react-native-gesture-handler";
import { loginAsAdmin } from "../../service/BearerService";

export default function RecepiesScreen() {
	const [openFilter, setOpenFilter] = useState(false);
	const [recipeItems, setRecipeItems] = useState();

	if (recipeItems === undefined) {
		loadData();
	}

	async function loadData() {
		await loginAsAdmin();

		await getAllRecipes(100, 0, "")
			.then(response => response.json())
			.then(data => {
				console.log(data.items);

				setRecipeItems(data.items);
			})
			.catch(error => {
				console.log(error);
			});
	}

	const handleFilter = () => {
		setOpenFilter(!openFilter);
	};

	return (
		<SafeAreaView style={styles.pageContainer}>
			{openFilter && (
				<FilterItemsComponent
					style={styles.filterArea}
					toggleFilter={handleFilter}
				/>
			)}

			<View style={styles.topArea}>
				<Text style={styles.pageTitle}>Alle plantaardige recepten</Text>
				<View style={styles.buttonWrapper}>
					<View style={styles.buttonItem1}>
						<SearchButtonComponent />
					</View>
					<View style={styles.buttonItem2}>
						<FilterButtonComponent toggleFilter={handleFilter} />
					</View>
				</View>
			</View>

			<View style={styles.mainArea}>
				<Text style={styles.amountOfRecipesText}>
					{recipeItems !== undefined ? recipeItems.length : 0} resultaten
				</Text>
				<ScrollView style={styles.recipeList}>
					{recipeItems !== undefined &&
						recipeItems.map(item => {
							return (
								<RecipeItemComponent
									liked={item.plusRecipe}
									recipeImage="recipeTestImage"
									category={item.categories[0]}
									subtext={item.name}
									allergies={["gluten"]}
								/>
							);
						})}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	// Page container
	pageContainer: {
		width: "100%",
		height: "100%",

		backgroundColor: "#F3F4F1",
	},

	// Page areas
	topArea: {
		flex: 1,
		minHeight: "0%",

		alignItems: "center",
		justifyContent: "space-evenly",
		// backgroundColor: "blue",
	},

	mainArea: {
		flex: 5,

		paddingTop: 20,
		paddingRight: 20,
		paddingLeft: 20,

		backgroundColor: "white",
	},

	// Styling for top area items
	pageTitle: {
		// flex: 1,

		fontSize: 18,
		fontWeight: 700,
		fontFamily: FONTS.bold,
	},

	buttonWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 8,

		maxWidth: "90%",
		width: "90%",

		zIndex: 102,
	},

	buttonItem1: {
		flex: 1,
		// backgroundColor: "blue",
	},
	buttonItem2: {
		flex: 1,
		// backgroundColor: "blue",
	},

	// Styling for main area items
	amountOfRecipesText: {
		fontSize: 16,
		fontFamily: FONTS.SemiBold,

		marginBottom: 15,
	},

	recipeList: {
		// borderWidth: 2,
		// borderColor: "yellow",
	},
});
