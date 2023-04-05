/* eslint-disable react-native/no-inline-styles */
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

export default function RecipeItemComponent(props) {
	const [liked, setLiked] = useState(props.liked);
	let recipeImage;

	const handleLikeRecipe = () => {
		setLiked(!liked);
		if (liked) {
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
		} else {
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
		}
	};

	switch (props.recipeImage) {
		case "recipeTestImage":
			recipeImage = require(`../../../assets/recipeImages/recipeTestImage.png`);
			break;
		case "recipeTestImageMarrokaans":
			recipeImage = require(`../../../assets/recipeImages/recipeTestImageMarrokaans.png`);
			break;
	}

	return (
		<View style={styles.itemContainer}>
			<Image style={styles.recipeImage} source={recipeImage} />

			{props.lennaplus ? (
				<View style={styles.lennaPlusIcon}>
					<Text style={styles.lennaPlusIconText}>Lenna +</Text>
				</View>
			) : undefined}

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
				<View style={styles.recipeInfo}>
					<Text style={styles.recipeCategoryText}>{props.category}</Text>
					<Text style={styles.recipeSubText}>{props.subtext}</Text>
					<View style={styles.allergyIconWrapper}>
						<Image
							style={styles.allergyIcon}
							source={require("../../../assets/allergyIcons/allergyTestIcon.png")}
						/>
						<Image
							style={styles.allergyIcon}
							source={require("../../../assets/allergyIcons/allergyTestIcon.png")}
						/>
						<Image
							style={styles.allergyIcon}
							source={require("../../../assets/allergyIcons/allergyTestIcon.png")}
						/>
					</View>
				</View>
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
		backgroundColor: "lightblue",
	},

	recipeInfoWrapper: {
		zIndex: 100,
	},

	lennaPlusIcon: {
		position: "absolute",
		top: 15,
		left: 15,
		justifyContent: "center",
		alignItems: "center",

		// For bottom right use the code below
		// bottom: 20,
		// right: 20,

		height: 20,
		width: 60,
		borderRadius: 4,

		fontFamily: "Plus-Jakarta-Sans-Bold",
		fontSize: 12,
		backgroundColor: "#294406",
	},

	lennaPlusIconText: {
		color: "#FFFFFF",
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

	recipeInfo: {
		padding: 20,
		justifyContent: "space-between",
		height: "100%",
		// backgroundColor: "red"
	},

	recipeCategoryText: {
		fontFamily: "Plus-Jakarta-Sans-Bold",
		fontSize: 12,
	},

	recipeSubText: {
		fontFamily: "Plus-Jakarta-Sans-Bold",
		fontSize: 16,
		width: "45%",
		// backgroundColor: "yellow"
	},

	allergyIconWrapper: {
		flexDirection: "row",
	},

	allergyIcon: {
		width: 30,
		height: 30,
	},
});
