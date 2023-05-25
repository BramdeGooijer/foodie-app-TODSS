import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	ScrollView,
	RefreshControl,
} from "react-native";
import React from "react";
import { IconButton } from "../../components/globalComponents/buttonComponents";
import SearchButtonComponent from "../../components/recipeComponents/searchButtonComponent";
import { FONTS } from "../../theme/theme";
import { useState, useEffect } from "react";
import FilterItemsComponent from "../../components/recipeComponents/filterItemsComponent";
import RecipeItemComponent from "../../components/recipeComponents/recipeItemComponent";
import { getFavoriteRecipes } from "../../service/RecipeService";

export default function FavoritesScreen(props) {
	const [openFilter, setOpenFilter] = useState(false);
	const [recipeItems, setRecipeItems] = useState();
	const [refreshing, setRefreshing] = useState(false);

	useEffect(() => {
		loadData();
	}, []);

	const handleFilter = () => {
		setOpenFilter(!openFilter);
	};

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		loadData();
		setTimeout(() => {
			setRefreshing(false);
		}, 1000);
	}, []);

	async function loadData() {
		await getFavoriteRecipes(100, 0, "")
			.then(response => response.json())
			.then(data => {
				console.log(data.items);

				setRecipeItems(data.items);
			})
			.catch(error => {
				console.log(error);
			});
	}

	return (
		<SafeAreaView style={styles.pageContainer}>
			{openFilter && (
				<FilterItemsComponent
					style={styles.filterArea}
					toggleFilter={handleFilter}
				/>
			)}

			<View style={styles.topArea}>
				<Text style={styles.pageTitle}>Jouw favorieten</Text>
				<View style={styles.buttonWrapper}>
					<View style={styles.buttonItem1}>
						<SearchButtonComponent />
						{/* <IconButton icon="search1" text="Search" /> */}
					</View>
					<View style={styles.buttonItem2}>
						{/* <FilterButtonComponent toggleFilter={handleFilter} /> */}
						<IconButton
							icon="filter"
							text="Filter"
							handleOnPress={handleFilter}
						/>
					</View>
				</View>
			</View>

			<View style={styles.mainArea}>
				<Text style={styles.amountOfRecipesText}>
					{recipeItems !== undefined ? recipeItems.length : 0} resultaten
				</Text>
				<ScrollView
					style={styles.recipeList}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}>
					{recipeItems !== undefined &&
						recipeItems.map(item => {
							return (
								<RecipeItemComponent
									key={item.id}
									id={item.id}
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
});
