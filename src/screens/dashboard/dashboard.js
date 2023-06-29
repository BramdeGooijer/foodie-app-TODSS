import React, { SafeAreaView, View, StyleSheet, Text } from "react-native";
import { FilterBasedAd } from "../../components/globalComponents/filterBasedAdComponent";
import { MainAd } from "../../components/globalComponents/mainAdComponent";
import RecipeSliderComponent from "../../components/dashboardComponents/recipeSliderComponent";
import { useEffect, useState } from "react";
import { getAllRecipes } from "../../service/RecipeService";
import { ScrollView } from "react-native-gesture-handler";
import ButtonComponents from "../../../src/components/redirectComponent/redirectButtons.js";
import { CategorieAdComponent } from "../../components/globalComponents/catergorieAdComponent";

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
			<ScrollView>
				<View style={styles.mainAdContainer}>
					<MainAd
						title={"Ideaal voor valentijn!"}
						description={"Makkelijke rijstwafel bonbons"}
					/>
				</View>
				<View style={styles.filterBasedAdsContainer}>
					<FilterBasedAd
						description={"Seizoensgroenten in de spotlight: wintergroenten!"}
						filters={["Gluten"]}
						primary
					/>
					<FilterBasedAd
						description={"Seizoensgroenten in de spotlight: wintergroenten!"}
						filters={["Gluten"]}
					/>
				</View>
				<View>
					<Text style={styles.sliderText}>Nieuwste recepten</Text>
					<RecipeSliderComponent recipeList={recipeItems} />
				</View>

				<CategorieAdComponent />

				<View>
					<Text style={styles.sliderText}>Favorieten in mei:</Text>
					<RecipeSliderComponent recipeList={recipeItems} />
				</View>
				
				<ButtonComponents />
			</ScrollView>
		</SafeAreaView>
	);
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

	filterBasedAdsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "stretch",
		gap: 8,
		marginHorizontal: 20,
	},

	mainAdContainer: {
		height: 320,
		marginBottom: 8,
		marginHorizontal: 20,
	},
});
