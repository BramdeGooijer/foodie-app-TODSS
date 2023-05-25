import { useState } from "react";
import React, {
	View,
	Button,
	Text,
	SafeAreaView,
	StyleSheet,
	ScrollView,
	Image,
	Pressable,
} from "react-native";
import * as Haptics from "expo-haptics";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import CookingStepsComponent from "../../components/recipeComponents/cookingStepsComponent";
import {
	IconButton,
	MaterialIconButton,
	RedirectButton,
} from "../../components/globalComponents/buttonComponents";
import IngredientsComponent from "../../ingredients/ingredients";
import { COLORS, SIZES } from "../../theme/theme";

export default function RecipeInfoOverlay({ navigation, route }) {
	const { recipeInfo } = route.params;
	const [description, setDescription] = useState(recipeInfo.description);
	const [fullDescription, setFullDescription] = useState(false);
	const [liked, setLiked] = useState(false);
	const [showIngredients, setShowIngredients] = useState(true);

	function handleReadMore() {
		setFullDescription(!fullDescription);
	}

	function handleReturn() {
		console.log("return");
		navigation.goBack();
	}

	function handleRedirect() {
		console.log("redirect");
	}

	const handleLike = () => {
		setLiked(!liked);
		if (liked) {
			console.log("unlike");
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
		} else {
			console.log("like");
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
		}
	};

	return (
		<SafeAreaView>
			<View style={styles.returnButtonWrapper}>
				<IconButton icon="arrowleft" handleOnPress={handleReturn} />
			</View>
			<View style={styles.likeButtonWrapper}>
				<MaterialIconButton
					icon={liked ? "favorite" : "favorite-outline"}
					handleOnPress={handleLike}
				/>
			</View>
			<View style={styles.redirectButtonWrapper}>
				<RedirectButton
					text="Start de kookstand"
					handleOnPress={handleRedirect}
				/>
			</View>

			<ScrollView style={styles.recipeInfoContainer}>
				<View style={styles.topArea}>
					<View style={styles.mainContentWrapper}>
						<Image
							style={styles.recipeImage}
							source={require("../../../assets/recipeImages/dummyRecipe1.png")}
						/>
						<Text style={styles.recipeSlogan}>{recipeInfo.subName}</Text>
						<Text style={styles.recipeTitle}>{recipeInfo.name}</Text>
						<Text style={styles.recipePrepTime}>
							{recipeInfo.prepTimeMinutes} minuten,{" "}
							{recipeInfo.prepDifficulties[0]}
						</Text>
					</View>
				</View>
				<View style={styles.descriptionArea}>
					<View style={styles.descriptionWrapper}>
						<Text style={styles.description}>
							"
							{fullDescription
								? description
								: description.substring(0, 120) + "..."}
							"
						</Text>
						<TouchableWithoutFeedback onPress={handleReadMore}>
							<View style={styles.readMoreWrapper}>
								<Text style={styles.readMoreText}>LEES MEER</Text>
								<Icon
									name={fullDescription ? "up" : "down"}
									color="#FBBA00"
									size={13}
								/>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</View>
				<View style={styles.ingredientArea}>
					<View style={styles.tabButtonContainer}>
						<Pressable
							disabled={recipeInfo.plusRecipe}
							style={styles.tabButton({ focused: showIngredients })}
							onPress={() => setShowIngredients(true)}>
							<Text style={styles.tabButtonText({ focused: showIngredients })}>
								Ingrediënten
							</Text>
						</Pressable>
						<Pressable
							disabled={recipeInfo.plusRecipe}
							style={styles.tabButton({ focused: !showIngredients })}
							onPress={() => setShowIngredients(false)}>
							<Text style={styles.tabButtonText({ focused: !showIngredients })}>
								Bereiding
							</Text>
						</Pressable>
					</View>
					{recipeInfo.plusRecipe ? (
						<View>
							<Text>lenna plus</Text>
						</View>
					) : showIngredients ? (
						<IngredientsComponent />
					) : (
						<CookingStepsComponent cookingsteps={recipeInfo.cookingSteps} />
					)}
				</View>

				{console.log("blablabla", styles.tabButton(false))}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	tabButtonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 18,
		borderBottomColor: COLORS.primary,
		borderBottomWidth: 1,
	},
	tabButton: ({ focused }) => ({
		alignItems: "center",
		paddingVertical: 16,
		backgroundColor: "transparent",
		flex: 1,
		borderBottomWidth: focused ? 2 : 0,
		borderBottomColor: COLORS.primary,
	}),
	tabButtonText: ({ focused }) => ({
		color: focused ? COLORS.primary : COLORS.grey,
		fontWeight: "bold",
		fontSize: SIZES.h4,
	}),
	recipeInfoContainer: {
		height: "100%",
	},

	returnButtonWrapper: {
		position: "absolute",

		top: 60,
		left: 32,

		zIndex: 999,
	},

	likeButtonWrapper: {
		position: "absolute",

		top: 60,
		right: 32,

		zIndex: 999,
	},

	redirectButtonWrapper: {
		position: "absolute",

		bottom: 40,
		width: "100%",

		alignItems: "center",

		zIndex: 999,
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
		backgroundColor: "#F7F7F7",
		// flex: 1,
		// height: 200,
	},

	descriptionWrapper: {
		padding: 18,
	},

	description: {
		fontFamily: "Plus-Jakarta-Sans-Medium",
		fontSize: 16,
		marginBottom: 8,
	},

	readMoreWrapper: {
		flexDirection: "row",
		alignItems: "center",
	},

	readMoreText: {
		fontFamily: "Plus-Jakarta-Sans-Extra-Bold",
		fontSize: 13,

		marginRight: 3,

		color: "#FBBA00",
	},

	ingredientArea: {
		// backgroundColor: "red",
		// flex: 1,
		height: 1000,
	},
});
