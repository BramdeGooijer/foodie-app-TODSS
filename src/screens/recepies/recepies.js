import React, {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	FlatList,
} from "react-native";
import RecipeItemComponent from "../../components/recipeComponents/recipeItemComponent";
import SearchButtonComponent from "../../components/recipeComponents/searchButtonComponent";

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
					<SearchButtonComponent />
					<Text>placeHolderFilter</Text>
				</View>
			</View>
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

		alignItems: "center",
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
		flex: 1,

		fontSize: 18,
		fontWeight: 700,
		fontFamily: "Plus-Jakarta-Sans-Bold",
	},

	buttonWrapper: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",

		width: "80%",
		margin: 20,
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
