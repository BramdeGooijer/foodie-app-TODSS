import { useState } from "react";
import React, {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
} from "react-native";
import * as Haptics from "expo-haptics";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import AllergyIcon from "./iconComponent";

import SubscriptionText from "../subscriptionTextComponent";
import { useNavigation } from "@react-navigation/native";
import { getRecipe, postFavoriteRecipe } from "../../service/RecipeService";

export default function RecipeItemComponent(props) {
	const [liked, setLiked] = useState(props.liked);
	const navigation = useNavigation();
	let recipeImage = require("../../../assets/recipe_load_image.png");

	const handleLikeRecipe = async () => {
		await postFavoriteRecipe(props.id, !liked).then(data => {
			if (data === true) {
				setLiked(!liked);
			} else if (data === false) {
			}
		});
		liked
			? Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
			: Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
	};

	const handleNavToRecipe = () => {
		console.log("hi");
		getRecipe(props.id)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				navigation.navigate("RecipeInfoOverlay", { recipeInfo: data });
			});
	};

	switch (props.recipeImage) {
		case "recipeTestImage":
			recipeImage = require(`../../../assets/recipeImages/dummyRecipe1.png`);
			break;
		case "recipeTestImageMarrokaans":
			recipeImage = require(`../../../assets/recipeImages/dummyRecipe2.png`);
			break;
	}

	return (
		<View
			style={[
				props.textUnder === true
					? styles.adItemContainer
					: styles.itemContainer,
				styles.globalItemContainer,
			]}>
			<Image
				style={
					props.textUnder === true ? styles.adRecipeImage : styles.recipeImage
				}
				source={recipeImage}
			/>

			{props.lennaplus ? (
				<View style={styles.lennaPlusIcon}>
					<SubscriptionText title={"lenna +"} />
				</View>
			) : undefined}

			<TouchableOpacity
				onPress={handleLikeRecipe}
				style={
					props.textUnder === true
						? styles.adLikedIconTouchable
						: styles.likedIconTouchable
				}>
				{liked ? (
					<MaterialIcon size={25} name="favorite" color={"#FBBA00"} />
				) : (
					<MaterialIcon size={25} name="favorite-outline" color={"#FBBA00"} />
				)}
			</TouchableOpacity>

			<View
				style={[
					styles.globalRecipeInfoWrapper,
					props.textUnder === true
						? styles.adRecipeInfoWrapper
						: styles.recipeInfoWrapper,
				]}>
				<TouchableWithoutFeedback onPress={handleNavToRecipe}>
					<View style={styles.recipeInfo}>
						<Text style={styles.recipeCategoryText}>
							{props.category.toUpperCase()}
						</Text>

						<Text
							style={[
								styles.globalRecipeSubText,
								props.textUnder === true
									? styles.adRecipeSubText
									: styles.recipeSubText,
							]}>
							{props.subtext}
						</Text>

						<View style={styles.allergyIconWrapper}>
							{props.allergies.map((item, index) => {
								return (
									<AllergyIcon
										type={item}
										key={`${props.keyExtractor}-${index}`}
									/>
								);
							})}
						</View>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	globalItemContainer: {
		borderRadius: 5,
		backgroundColor: "#F3F4F1",
	},

	itemContainer: {
		flexDirection: "row",
		width: "100%",
		height: 149,
		marginBottom: 20,
	},

	adItemContainer: {
		flexDirection: "column",
		width: 227,
		height: 300,
		marginRight: 16,
	},

	recipeImage: {
		width: 133,
		height: 149,
		backgroundColor: "#F3F4F1",
	},

	adRecipeImage: {
		width: 227,
		height: 150,
		borderRadius: 5,
		backgroundColor: "#F3F4F1",
	},

	lennaPlusIcon: {
		position: "absolute",
		top: 15,
		left: 15,
	},

	likedIconTouchable: {
		position: "absolute",
		top: 15,
		right: 15,
		zIndex: 101,
	},

	adLikedIconTouchable: {
		position: "absolute",
		right: 15,
		bottom: 112,
	},

	globalRecipeInfoWrapper: {
		zIndex: 100,
		padding: 10,
	},

	recipeInfoWrapper: {
		width: "64%",
	},

	adRecipeInfoWrapper: {
		width: "100%",
		height: "60%",
	},

	recipeInfo: {
		justifyContent: "space-between",
		height: "100%",
	},

	recipeCategoryText: {
		flex: 1,
		fontFamily: "Plus-Jakarta-Sans-Bold",
		fontSize: 12,
	},

	globalRecipeSubText: {
		fontFamily: "Plus-Jakarta-Sans-Bold",
		fontSize: 16,
	},

	recipeSubText: {
		flex: 4,
		width: "85%",
	},

	adRecipeSubText: {
		flex: 2,
		width: "100%",
	},

	allergyIconWrapper: {
		flex: 2,
		flexDirection: "row",
		width: 100,
		height: 100,
	},
});
