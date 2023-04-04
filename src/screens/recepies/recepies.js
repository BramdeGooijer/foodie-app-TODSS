import React, { View, Text, SafeAreaView, StyleSheet, FlatList  } from "react-native";
import RecipeItemComponent from "../../components/recipeComponents/recipeItemComponent";

export default function RecepiesScreen() {
	const data = [
		{ 
			id: 1, 
			category: "Ontbijt", 
			subtext: "Heerlijke ei met bacon",
			allergies: ["gluten"],
			recipeImage: "recipeTestImage",
			liked: true,
			lennaPlus: false,
		},
		{ 
			id: 2, 
			category: "Diner", 
			subtext: "Romige en eiwitrijke paste met geroosterde groenten",
			allergies: ["gluten", "lactose"],
			recipeImage: "recipeTestImageMarrokaans",
			liked: false,
			lennaPlus: true,
		},
	]

	const renderItem = ({item}) => {
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
		)
	}

	return (
		<SafeAreaView style={styles.pageContainer}>
			<View style={styles.topArea}>
				<Text style={styles.pageTitle}>Alle plantaardige recepten</Text>
				<View style={styles.buttonWrapper}>
					<Text>placeHolderSearch</Text>
					<Text>placeHolderFilter</Text>
				</View>
			</View>
			<View style={styles.mainArea}>
				<Text style={styles.amountOfRecipesText}>{data.length} resultaten</Text>
				<FlatList style={styles.recipeList} data={data} renderItem={renderItem} keyExtractor={item => item.id}/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	// Page container
	pageContainer: {
		width: "100%",
		height: "100%",

		backgroundColor: "#F3F4F1"
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
		fontFamily: 'Plus-Jakarta-Sans-Bold',

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
