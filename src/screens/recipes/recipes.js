import React, {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	FlatList,
} from "react-native";
import RecipeItemComponent from "../../components/recipeComponents/recipeItemComponent";
import { FONTS } from "../../theme/theme.js";
import SearchButtonComponent from "../../components/recipeComponents/searchButtonComponent";
import FilterButtonComponent from "../../components/recipeComponents/filterButtonComponent";
import FilterItemsComponent from "../../components/recipeComponents/filterItemsComponent";
import { useState, useEffect } from "react";
import { getAllRecipes } from "../../service/RecipeService";
import { ScrollView } from "react-native-gesture-handler";

export default function RecepiesScreen() {
	const [openFilter, setOpenFilter] = useState(false);
	const [recipeItems, setRecipeItems] = useState([]);

	// const data = [
	// 	{
	// 		id: 1,
	// 		category: "Ontbijt",
	// 		subtext: "Heerlijke ei met bacon",
	// 		allergies: ["gluten"],
	// 		recipeImage: "recipeTestImage",
	// 		liked: true,
	// 		lennaplus: false,
	// 	},
	// 	{
	// 		id: 2,
	// 		category: "Diner",
	// 		subtext: "Romige en eiwitrijke paste met geroosterde groenten",
	// 		allergies: ["gluten", "lactose"],
	// 		recipeImage: "recipeTestImageMarrokaans",
	// 		liked: false,
	// 		lennaplus: true,
	// 	},
	// 	{
	// 		id: 3,
	// 		category: "Desert",
	// 		subtext: "Zachte appeltaart met kaneel",
	// 		allergies: ["gluten", "lactose", "sugar"],
	// 		recipeImage: "recipeTestImageMarrokaans",
	// 		liked: false,
	// 		lennaplus: false,
	// 	},
	// 	{
	// 		id: 4,
	// 		category: "Ontbijt",
	// 		subtext: "Simpele havermout kracker met kaas",
	// 		allergies: ["gluten", "lactose"],
	// 		recipeImage: "recipeTestImage",
	// 		liked: false,
	// 		lennaplus: false,
	// 	},
	// 	{
	// 		id: 5,
	// 		category: "Tussendoortje",
	// 		subtext: "Romige en eiwitrijke paste met geroosterde groenten",
	// 		allergies: ["gluten", "sugar"],
	// 		recipeImage: "recipeTestImageMarrokaans",
	// 		liked: false,
	// 		lennaplus: true,
	// 	},
	// 	{
	// 		id: 6,
	// 		category: "Tussendoortje",
	// 		subtext: "Romige en eiwitrijke paste met geroosterde groenten",
	// 		allergies: ["lactose"],
	// 		recipeImage: "recipeTestImageMarrokaans",
	// 		liked: false,
	// 		lennaplus: true,
	// 	},
	// 	{
	// 		id: 7,
	// 		category: "Diner",
	// 		subtext: "Romige en eiwitrijke paste met geroosterde groenten",
	// 		allergies: ["lactose", "sugar"],
	// 		recipeImage: "recipeTestImageMarrokaans",
	// 		liked: false,
	// 		lennaplus: true,
	// 	},
	// 	{
	// 		id: 8,
	// 		category: "Ontbijt",
	// 		subtext: "Romige en eiwitrijke paste met geroosterde groenten",
	// 		allergies: ["gluten", "lactose"],
	// 		recipeImage: "recipeTestImageMarrokaans",
	// 		liked: false,
	// 		lennaplus: true,
	// 	},
	// 	{
	// 		id: 9,
	// 		category: "Borrel",
	// 		subtext: "Romige en eiwitrijke paste met geroosterde groenten",
	// 		allergies: ["gluten", "lactose"],
	// 		recipeImage: "recipeTestImageMarrokaans",
	// 		liked: false,
	// 		lennaplus: true,
	// 	},
	// 	{
	// 		id: 10,
	// 		category: "Lunch",
	// 		subtext: "Romige en eiwitrijke paste met geroosterde groenten",
	// 		allergies: ["gluten", "lactose"],
	// 		recipeImage: "recipeTestImageMarrokaans",
	// 		liked: false,
	// 		lennaplus: true,
	// 	},
	// ];

	// useEffect(() => {
	// 	loadData();
	// });

	loadData();

	function loadData() {
		getAllRecipes(100, 0, "")
		.then(response => response.json())
		.then(data => {
			// console.log(response);
				const items = [];

				for (let i = 0; i < data.items.length; i++) {
					console.log(data.items[i]);
					console.log(i);
					items.push({
						itemNumber: `${i + 1}`,
						category: `${data.items[i].categories[0]}`,
						subText: `${data.items[i].subName}`,
						allergies: `${data.items[i].allergies}`,
						recipeImage: "recipeTestImageMarrokaans",
						liked: `${false}`,
						lennaplus: `${data.items[i].plusRecipe}`,
					});
					break;
				}

				console.log(items);
				console.log(typeof items);

				// let recipeViews = [];

				// // items.map(item => {
				// // 	recipeViews.push(item);
				// // });

				setRecipeItems(items);

				console.log(recipeItems);
			})
			.catch(error => {
				console.log(error);
			});
	}

	const renderItem = (item) => {
		console.log(item);
		return (
			// <View style={styles.recipeItem}><Text>{item.text}</Text></View>
			<RecipeItemComponent
				key={item.itemNumber}
				keyExtractor={item.itemNumber}
				category={item.category}
				subtext={item.subtext}
				allergies={item.allergies}
				recipeImage={item.recipeImage}
				liked={item.liked}
				lennaplus={item.lennaplus}
			/>
		);
	};

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
					{recipeItems.length} resultaten
				</Text>
				{/* <ScrollView style={styles.recipeList}></ScrollView> */}
				<FlatList
					style={styles.recipeList}
					data={recipeItems}
					renderItem={renderItem}
				/>
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
