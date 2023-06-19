import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import RecipeSliderComponent from "../../components/dashboardComponents/recipeSliderComponent";
import { useEffect, useState } from "react";
import { getAllRecipes } from "../../service/RecipeService";

export default function DashboardScreen() {
	const [recipeItems, setRecipeItems] = useState();

	useEffect(() => {
		loadData();
	}, []);

	async function loadData() {
		await getAllRecipes(5, 0, "")
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
		<SafeAreaView style={styles.dashboardContainer}>
			<View>
				<Text style={styles.sliderText}>Nieuwste recepten</Text>
				<RecipeSliderComponent recipeList={recipeItems}></RecipeSliderComponent>
			</View>

			<View>
				<Text style={styles.sliderText}>Favorieten in mei:</Text>
				<RecipeSliderComponent recipeList={recipeItems}></RecipeSliderComponent>
			</View>
		</SafeAreaView>
	)	
}

const styles = StyleSheet.create({
	dashboardContainer: {
		backgroundColor: "white",
		width: "100%",
		height: "100%",
	},
	sliderText: {
		fontFamily: "Plus-Jakarta-Sans-Bold",
		color: "#294406",
		fontSize: 18,
		marginBottom: 16,
	},
});