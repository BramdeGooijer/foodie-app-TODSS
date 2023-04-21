import React, {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	ScrollView,
	Image,
} from "react-native";

export default function FavoritesScreen() {
	return (
		<SafeAreaView>
			<ScrollView style={styles.recipeInfoContainer}>
				<View style={styles.topArea}>
					<View style={styles.mainContentWrapper}>
						{/* HIER ONDER DE CODE DIE WE GEBRUIKEN OM DIT DEEL TE TESTEN */}
						<Image style={styles.recipeImage} source={require("../../../assets/recipeImages/dummyRecipe1.png")}/>
						<Text style={styles.recipeSlogan}>Vegan & glutenvrije</Text>
						<Text style={styles.recipeTitle}>Romige en eiwitrijke pasta met geroosterde groenten</Text>
						<Text style={styles.recipePrepTime}>55 minuten, makkelijk</Text>

						{/* HIER ONDER DE CODE DIE WE GEBRUIKEN ALS WE HET SCHERM INRENDEREN */}
						{/* <Image style={styles.recipeImage} source={require("../../../assets/recipeImages/dummyRecipe1.png")}/>
						<Text style={styles.recipeSlogan}>{props.slogan}</Text>
						<Text style={styles.recipeTitle}>{props.title}</Text>
						<Text style={styles.recipePrepTime}>{props.preptime} minuten, {props.difficulty}</Text> */}
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

	topArea: {
		// backgroundColor: "blue",
		// flex: 2,
		// height: 500,
		paddingHorizontal: 20,
		alignItems: "center",
	},

	mainContentWrapper: {
		width: "100%",
		// backgroundColor: "blue",
	},

	recipeImage: {
		// alignSelf: "center",
		borderRadius: 5,
		width: "100%",
		height: 400,
		// aspectRatio: 1,
	},

	recipeSlogan: {
		fontSize: 20,
		color: "#FBBA00",
		fontFamily: "Nexa-Rust-Script-Cursive",

		marginTop: 18, 
	},

	recipeTitle: {
		fontSize: 28,
		fontFamily: "Plus-Jakarta-Sans-Bold",
	},

	recipePrepTime: {
		fontSize: 16,
		fontFamily: "Plus-Jakarta-Sans-Semi-Bold",
		color: "#AAAAAA",

		marginVertical: 16,
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
