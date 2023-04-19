import React, {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	FlatList,
} from "react-native";
import RecipeItemComponent from "../components/recipeComponents/recipeItemComponent";
import { FONTS } from "../theme/theme.js";
import { useState } from "react";

export default function IngredientsScreen() {
	const data = [
		{
			name: "Salmon Cakes",
			subname: "",
			plusRecipe: true,
			description:
				"Crispy salmon cakes made with fresh salmon, breadcrumbs, and seasonings, served with a side of tartar sauce.",
			prepTimeMinutes: 25,
			requirements: [],
			cookingStep: [],
			allSeasons: [],
			allCategories: [
				{
					name: "Dessert",
					id: "4ad2f170-5c39-466c-be7d-345ccc86ad5b",
					domainEvents: [],
				},
			],
			allPrepDifficulties: [],
			allDietaryPreferences: [],
			allIngredients: [],
			id: "022a1c88-ad1a-4b6c-b422-cfd3d0a776b0",
			domainEvents: [],
		},
		{
			name: "Sausage and Peppers",
			subname: "",
			plusRecipe: false,
			description:
				"Sausage links cooked with bell peppers and onions, served over steamed rice or on a hoagie roll.",
			prepTimeMinutes: 35,
			requirements: [],
			cookingStep: [],
			allSeasons: [],
			allCategories: [
				{
					name: "Borrelhapje",
					id: "3ef572f0-ed05-47dc-a50c-a4af63d35c70",
					domainEvents: [],
				},
			],
			allPrepDifficulties: [],
			allDietaryPreferences: [],
			allIngredients: [],
			id: "11fd9b7c-2a71-4574-952a-c53f3e2bb468",
			domainEvents: [],
		},
		{
			name: "Slow Cooker Pulled Pork",
			subname: "",
			plusRecipe: false,
			description:
				"Tender and juicy pulled pork slow-cooked to perfection, perfect for sandwiches or tacos.",
			prepTimeMinutes: 360,
			requirements: [],
			cookingStep: [],
			allSeasons: [],
			allCategories: [
				{
					name: "Diner",
					id: "65a32406-cce3-4cf4-8697-7371f6c8b4b2",
					domainEvents: [],
				},
			],
			allPrepDifficulties: [],
			allDietaryPreferences: [],
			allIngredients: [],
			id: "2827ced7-3152-4007-b1a3-de5fd63beb8e",
			domainEvents: [],
		},
		{
			name: "Chicken Parmesan",
			subname: "",
			plusRecipe: true,
			description:
				"Breaded chicken breasts smothered in marinara sauce and melted mozzarella cheese.",
			prepTimeMinutes: 40,
			requirements: [],
			cookingStep: [],
			allSeasons: [],
			allCategories: [
				{
					name: "Diner",
					id: "65a32406-cce3-4cf4-8697-7371f6c8b4b2",
					domainEvents: [],
				},
			],
			allPrepDifficulties: [],
			allDietaryPreferences: [],
			allIngredients: [],
			id: "34f2accf-5330-4adc-a904-b4fecb2c60f8",
			domainEvents: [],
		},
		{
			name: "Vegetable Lasagna",
			subname: "",
			plusRecipe: true,
			description:
				"A classic lasagna with layers of pasta, ricotta cheese, and a medley of sautÃ©ed vegetables.",
			prepTimeMinutes: 60,
			requirements: [],
			cookingStep: [],
			allSeasons: [],
			allCategories: [
				{
					name: "Diner",
					id: "65a32406-cce3-4cf4-8697-7371f6c8b4b2",
					domainEvents: [],
				},
			],
			allPrepDifficulties: [],
			allDietaryPreferences: [],
			allIngredients: [],
			id: "39e09279-c820-46b0-abc2-06239d104c0c",
			domainEvents: [],
		},
		{
			name: "Sheet Pan Fajitas",
			subname: "",
			plusRecipe: false,
			description:
				"Flavorful fajitas made with seasoned chicken, bell peppers, and onions, baked on a sheet pan for easy cleanup.",
			prepTimeMinutes: 30,
			requirements: [],
			cookingStep: [],
			allSeasons: [],
			allCategories: [
				{
					name: "Lunch",
					id: "06eefdea-7889-4493-a948-c1f7e6d16de5",
					domainEvents: [],
				},
				{
					name: "Diner",
					id: "65a32406-cce3-4cf4-8697-7371f6c8b4b2",
					domainEvents: [],
				},
			],
			allPrepDifficulties: [],
			allDietaryPreferences: [],
			allIngredients: [],
			id: "5eed2351-24ac-4e92-a16d-bbdc869037d7",
			domainEvents: [],
		},
		{
			name: "Beef Stroganoff",
			subname: "",
			plusRecipe: true,
			description:
				"Tender strips of beef in a creamy mushroom sauce served over egg noodles.",
			prepTimeMinutes: 50,
			requirements: [],
			cookingStep: [],
			allSeasons: [],
			allCategories: [
				{
					name: "Diner",
					id: "65a32406-cce3-4cf4-8697-7371f6c8b4b2",
					domainEvents: [],
				},
			],
			allPrepDifficulties: [],
			allDietaryPreferences: [],
			allIngredients: [],
			id: "68124221-2b84-4df7-a91a-4c77ef097d0f",
			domainEvents: [],
		},
		{
			name: "Greek Salad",
			subname: "",
			plusRecipe: true,
			description:
				"A refreshing salad with cucumber, tomatoes, feta cheese, and kalamata olives tossed in a lemon and olive oil dressing.",
			prepTimeMinutes: 15,
			requirements: [],
			cookingStep: [],
			allSeasons: [],
			allCategories: [
				{
					name: "Lunch",
					id: "06eefdea-7889-4493-a948-c1f7e6d16de5",
					domainEvents: [],
				},
			],
			allPrepDifficulties: [],
			allDietaryPreferences: [],
			allIngredients: [],
			id: "6bc33008-0ea3-4a2e-98ce-82fb22225356",
			domainEvents: [],
		},
		{
			name: "Chicken Alfredo",
			subname: "",
			plusRecipe: true,
			description:
				"Fettuccine pasta smothered in a creamy Alfredo sauce with grilled chicken and broccoli.",
			prepTimeMinutes: 35,
			requirements: [],
			cookingStep: [],
			allSeasons: [],
			allCategories: [
				{
					name: "Diner",
					id: "65a32406-cce3-4cf4-8697-7371f6c8b4b2",
					domainEvents: [],
				},
			],
			allPrepDifficulties: [],
			allDietaryPreferences: [],
			allIngredients: [],
			id: "77607869-c795-49b6-9c50-1b3ccf190423",
			domainEvents: [],
		},
		{
			name: "Appeltaart",
			subname: "subAppelTaart",
			plusRecipe: false,
			description: "descriptie",
			prepTimeMinutes: 20,
			requirements: [],
			cookingStep: [],
			allSeasons: [],
			allCategories: [
				{
					name: "Dessert",
					id: "4ad2f170-5c39-466c-be7d-345ccc86ad5b",
					domainEvents: [],
				},
			],
			allPrepDifficulties: [],
			allDietaryPreferences: [],
			allIngredients: [],
			id: "84efff1a-6168-416d-9d24-98bc9d1336db",
			domainEvents: [],
		},
		{
			name: "Meatball Subs",
			subname: "",
			plusRecipe: false,
			description:
				"Meatballs in marinara sauce served on a toasted hoagie roll with melted mozzarella cheese.",
			prepTimeMinutes: 30,
			requirements: [],
			cookingStep: [],
			allSeasons: [],
			allCategories: [
				{
					name: "Diner",
					id: "65a32406-cce3-4cf4-8697-7371f6c8b4b2",
					domainEvents: [],
				},
			],
			allPrepDifficulties: [],
			allDietaryPreferences: [],
			allIngredients: [],
			id: "903bd3c1-205e-4fa3-a626-21f3733e20cf",
			domainEvents: [],
		},
		{
			name: "Pesto Pasta Salad",
			subname: "",
			plusRecipe: true,
			description:
				"Rotini pasta tossed with fresh basil pesto, cherry tomatoes, and diced mozzarella cheese.",
			prepTimeMinutes: 20,
			requirements: [],
			cookingStep: [],
			allSeasons: [],
			allCategories: [
				{
					name: "Diner",
					id: "65a32406-cce3-4cf4-8697-7371f6c8b4b2",
					domainEvents: [],
				},
				{
					name: "Ontbijt",
					id: "6ce26641-4e09-4395-b8ce-7642fcf96ef4",
					domainEvents: [],
				},
			],
			allPrepDifficulties: [],
			allDietaryPreferences: [],
			allIngredients: [],
			id: "98d67ed8-9342-4883-96d5-99f7a80beb84",
			domainEvents: [],
		},
		{
			name: "Baked Ziti",
			subname: "",
			plusRecipe: true,
			description:
				"Ziti pasta baked with tomato sauce, ground beef, and mozzarella cheese.",
			prepTimeMinutes: 45,
			requirements: [],
			cookingStep: [],
			allSeasons: [],
			allCategories: [
				{
					name: "Borrelhapje",
					id: "3ef572f0-ed05-47dc-a50c-a4af63d35c70",
					domainEvents: [],
				},
			],
			allPrepDifficulties: [],
			allDietaryPreferences: [],
			allIngredients: [],
			id: "a66fc2c3-7d9c-4c60-b3ce-a4288940456c",
			domainEvents: [],
		},
		{
			name: "Beef and Broccoli Stir Fry",
			subname: "",
			plusRecipe: false,
			description:
				"Thinly sliced beef and tender-crisp broccoli florets in a savory sauce served over steamed rice.",
			prepTimeMinutes: 25,
			requirements: [],
			cookingStep: [],
			allSeasons: [],
			allCategories: [
				{
					name: "Diner",
					id: "65a32406-cce3-4cf4-8697-7371f6c8b4b2",
					domainEvents: [],
				},
			],
			allPrepDifficulties: [],
			allDietaryPreferences: [],
			allIngredients: [],
			id: "aa0061ca-af02-438c-9a0e-bb4017c9d310",
			domainEvents: [],
		},
		{
			name: "Chicken Enchiladas",
			subname: "",
			plusRecipe: true,
			description:
				"Shredded chicken and cheese wrapped in corn tortillas and baked with enchilada sauce.",
			prepTimeMinutes: 40,
			requirements: [],
			cookingStep: [],
			allSeasons: [],
			allCategories: [
				{
					name: "Dessert",
					id: "4ad2f170-5c39-466c-be7d-345ccc86ad5b",
					domainEvents: [],
				},
				{
					name: "Diner",
					id: "65a32406-cce3-4cf4-8697-7371f6c8b4b2",
					domainEvents: [],
				},
			],
			allPrepDifficulties: [],
			allDietaryPreferences: [],
			allIngredients: [],
			id: "ac33d3af-1d8a-4665-bf59-1974a6bb4909",
			domainEvents: [],
		},
		{
			name: "Marrokaanse quinoa salade",
			subname: "salade",
			plusRecipe: true,
			description: "descriptie",
			prepTimeMinutes: 20,
			requirements: [],
			cookingStep: [],
			allSeasons: [],
			allCategories: [
				{
					name: "Diner",
					id: "65a32406-cce3-4cf4-8697-7371f6c8b4b2",
					domainEvents: [],
				},
				{
					name: "Ontbijt",
					id: "6ce26641-4e09-4395-b8ce-7642fcf96ef4",
					domainEvents: [],
				},
			],
			allPrepDifficulties: [],
			allDietaryPreferences: [],
			allIngredients: [],
			id: "bfb2c589-dc49-4bba-8ec3-4d95081753e7",
			domainEvents: [],
		},
		{
			name: "Creamy Tomato Soup",
			subname: "",
			plusRecipe: false,
			description:
				"Comforting tomato soup made with fresh tomatoes, cream, and a hint of basil.",
			prepTimeMinutes: 35,
			requirements: [],
			cookingStep: [],
			allSeasons: [],
			allCategories: [
				{
					name: "Diner",
					id: "65a32406-cce3-4cf4-8697-7371f6c8b4b2",
					domainEvents: [],
				},
			],
			allPrepDifficulties: [],
			allDietaryPreferences: [],
			allIngredients: [],
			id: "d6faa0b6-1e30-4967-b7ae-599443585997",
			domainEvents: [],
		},
	];

	const renderItem = ({ item }) => {
		return (
			// <View style={styles.recipeItem}><Text>{item.text}</Text></View>
			<RecipeItemComponent
				key={item.id}
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

	// return (

	// );
}

// const styles = StyleSheet.create({

// });
