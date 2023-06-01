import { useState } from "react";
import React, {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	ScrollView,
	Image,
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

export default function RecipeInfoOverlay({ navigation, route }) {
	const { recipeInfo } = route.params;
	const [description, setDescription] = useState(recipeInfo.description);
	const [fullDescription, setFullDescription] = useState(false);
	const [liked, setLiked] = useState(false);

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
					<CookingStepsComponent cookingsteps={recipeInfo.cookingSteps} />
					<IngredientsComponent></IngredientsComponent>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
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
		paddingHorizontal: 20,
		alignItems: "center",
		backgroundColor: "#F7F7F7",
	},

	mainContentWrapper: {
		width: "100%",
	},

	recipeImage: {
		borderRadius: 5,
		width: "100%",
		height: 400,
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
		backgroundColor: "white",
		height: 1000,
	},
});
