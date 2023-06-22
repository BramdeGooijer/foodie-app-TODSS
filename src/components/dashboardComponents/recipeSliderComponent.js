import React, { SafeAreaView, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import RecipeItemComponent from "../../components/recipeComponents/recipeItemComponent";
import { getAllRecipes } from "../../service/RecipeService";
import { ScrollView } from "react-native-gesture-handler";

export default function RecipeSliderComponent(props) {
	return (
		<ScrollView style={styles.recipeSlider} horizontal>
			{props.recipeList !== undefined &&
				props.recipeList.map(item => {
					return (
						<RecipeItemComponent
							key={item.id}
							id={item.id}
							liked={item.plusRecipe}
							lennaplus={item.plusRecipe}
							recipeImage="recipeTestImage"
							category={item.categories[0]}
							subtext={item.name}
							allergies={["gluten"]}
							textUnder={true}
						/>
					);
				})}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	recipeSlider: {
		flexDirection: "row",
	},
});
