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
import { getRecipe } from "../../service/RecipeService";

export default function RecipeItemComponent(props) {
	const [liked, setLiked] = useState(props.liked);
	const navigation = useNavigation();
	let recipeImage = require("../../../assets/recipe_load_image.png");

	const handleLikeRecipe = () => {
		setLiked(!liked);
		if (liked) {
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
		} else {
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
		}
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
		<View style={styles.itemContainer}>
			<Image style={styles.recipeImage} source={recipeImage} />

			{props.lennaplus ? <SubscriptionText title={"lenna +"} /> : undefined}

			<TouchableOpacity
				onPress={handleLikeRecipe}
				style={styles.likedIconTouchable}>
				{liked ? (
					<MaterialIcon size={25} name="favorite" color={"#FBBA00"} />
				) : (
					<MaterialIcon size={25} name="favorite-outline" color={"#FBBA00"} />
				)}
			</TouchableOpacity>

			<View style={styles.recipeInfoWrapper}>
				<TouchableWithoutFeedback onPress={handleNavToRecipe}>
					<View style={styles.recipeInfo}>
						<Text style={styles.recipeCategoryText}>
							{props.category.toUpperCase()}
						</Text>

						<Text style={styles.recipeSubText}>{props.subtext}</Text>

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
	itemContainer: {
		flexDirection: "row",
		width: "100%",
		height: 149,

		marginBottom: 20,

		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		backgroundColor: "#F3F4F1",
	},

	recipeImage: {
		width: 133,
		height: 149,
		backgroundColor: "#F3F4F1",
	},

	likedIconTouchable: {
		position: "absolute",
		top: 15,
		right: 15,
		zIndex: 101,
	},

	likedIcon: {
		width: 23,
		height: 20,
	},

	recipeInfoWrapper: {
		zIndex: 100,
		width: "64%",
		padding: 10,
	},

	recipeInfo: {
		// padding: 20,
		justifyContent: "space-between",
		height: "100%",
	},

	recipeCategoryText: {
		flex: 1,
		fontFamily: "Plus-Jakarta-Sans-Bold",
		fontSize: 12,
	},

	recipeSubText: {
		flex: 4,
		fontFamily: "Plus-Jakarta-Sans-Bold",
		fontSize: 16,
		width: "85%",
	},

	allergyIconWrapper: {
		flex: 2,
		flexDirection: "row",
	},
});
