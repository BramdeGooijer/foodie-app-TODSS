import React, {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	FlatList,
} from "react-native";
import RecipeItemComponent from "../../components/recipeComponents/recipeItemComponent";
import SearchButtonComponent from "../../components/recipeComponents/searchButtonComponent";
import FilterButtonComponent from "../../components/recipeComponents/filterButtonComponent";
import FilterItemsComponent from "../../components/recipeComponents/filterItemsComponent";

export default function RecepiesScreen() {
	const data = [
		{
			id: 1,
			category: "Ontbijt",
			subtext: "Heerlijke ei met bacon",
			allergies: ["gluten"],
			recipeImage: "recipeTestImage",
			liked: true,
			lennaplus: false,
		},
		{
			id: 2,
			category: "Diner",
			subtext: "Romige en eiwitrijke paste met geroosterde groenten",
			allergies: ["gluten", "lactose"],
			recipeImage: "recipeTestImageMarrokaans",
			liked: false,
			lennaplus: true,
		},
		{
			id: 3,
			category: "Desert",
			subtext: "Zachte appeltaart met kaneel",
			allergies: ["gluten", "lactose", "sugar"],
			recipeImage: "recipeTestImageMarrokaans",
			liked: false,
			lennaplus: false,
		},
		{
			id: 4,
			category: "Ontbijt",
			subtext: "Simpele havermout kracker met kaas",
			allergies: ["gluten", "lactose"],
			recipeImage: "recipeTestImage",
			liked: false,
			lennaplus: false,
		},
		{
			id: 5,
			category: "Tussendoortje",
			subtext: "Romige en eiwitrijke paste met geroosterde groenten",
			allergies: ["gluten", "sugar"],
			recipeImage: "recipeTestImageMarrokaans",
			liked: false,
			lennaplus: true,
		},
		{
			id: 6,
			category: "Tussendoortje",
			subtext: "Romige en eiwitrijke paste met geroosterde groenten",
			allergies: ["lactose"],
			recipeImage: "recipeTestImageMarrokaans",
			liked: false,
			lennaplus: true,
		},
		{
			id: 7,
			category: "Diner",
			subtext: "Romige en eiwitrijke paste met geroosterde groenten",
			allergies: ["lactose", "sugar"],
			recipeImage: "recipeTestImageMarrokaans",
			liked: false,
			lennaplus: true,
		},
		{
			id: 8,
			category: "Ontbijt",
			subtext: "Romige en eiwitrijke paste met geroosterde groenten",
			allergies: ["gluten", "lactose"],
			recipeImage: "recipeTestImageMarrokaans",
			liked: false,
			lennaplus: true,
		},
		{
			id: 9,
			category: "Borrel",
			subtext: "Romige en eiwitrijke paste met geroosterde groenten",
			allergies: ["gluten", "lactose"],
			recipeImage: "recipeTestImageMarrokaans",
			liked: false,
			lennaplus: true,
		},
		{
			id: 10,
			category: "Lunch",
			subtext: "Romige en eiwitrijke paste met geroosterde groenten",
			allergies: ["gluten", "lactose"],
			recipeImage: "recipeTestImageMarrokaans",
			liked: false,
			lennaplus: true,
		},
	];

	const renderItem = ({ item }) => {
		return (
			// <View style={styles.recipeItem}><Text>{item.text}</Text></View>
			<RecipeItemComponent
				keyExtractor={item.id}
				category={item.category}
				subtext={item.subtext}
				allergies={item.allergies}
				recipeImage={item.recipeImage}
				liked={item.liked}
				lennaplus={item.lennaplus}
			/>
		);
	};

	return (
		<SafeAreaView style={styles.pageContainer}>
			<View style={styles.topArea}>
				<Text style={styles.pageTitle}>Alle plantaardige recepten</Text>
				<View style={styles.buttonWrapper}>
					<View style={styles.buttonItem1}>
						<SearchButtonComponent />
					</View>
					<View style={styles.buttonItem2}>
						<FilterButtonComponent />
					</View>
				</View>
			</View>

			{/* <FilterItemsComponent style={styles.filterArea} /> */}

			<View style={styles.mainArea}>
				<Text style={styles.amountOfRecipesText}>{data.length} resultaten</Text>
				<FlatList
					style={styles.recipeList}
					data={data}
					renderItem={renderItem}
					keyExtractor={item => item.id}
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
		fontFamily: "Plus-Jakarta-Sans-Bold",
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
		fontFamily: "Plus-Jakarta-Sans-Semi-Bold",

		marginBottom: 15,
	},

	recipeList: {
		// borderWidth: 2,
		// borderColor: "yellow",
	},
});
