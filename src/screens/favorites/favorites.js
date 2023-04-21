/* eslint-disable react/self-closing-comp */
import React, {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	ScrollView
} from "react-native";
import { useState } from "react";
import {
	IconButton,
	MaterialIconButton,
	RedirectButton,
} from "../../components/globalComponents/buttonComponents";
import * as Haptics from "expo-haptics";


export default function FavoritesScreen() {
	const [liked, setLiked] = useState(false);

	// function handleLike() {
		// }
		function handleReturn() {
			console.log("return");
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
			{/* <View style={styles.buttonWrapper}>
				<View style={styles.topButtonWrapper}>
				</View>
				<View style={styles.bottomButtonWrapper}>
				</View>
				
			</View> */}
			<View style={styles.returnButtonWrapper}>
				<IconButton icon="arrowleft" handleOnPress={handleReturn} />
			</View>
			<View style={styles.likeButtonWrapper}>
				<MaterialIconButton icon={liked ? "favorite" : "favorite-outline"} handleOnPress={handleLike} />
			</View>
			<View style={styles.redirectButtonWrapper}>
				<RedirectButton text="Start de kookstand" handleOnPress={handleRedirect}  />
			</View>

			<ScrollView style={styles.recipeInfoContainer}>
				<View style={styles.topArea}>
					<Text>Placeholder for main recipe info</Text>
					<View
						style={StyleSheet.create({
							width: "90%",
							backgroundColor: "black",
						})}>
						<View
							style={StyleSheet.create({
								width: "80%",
								backgroundColor: "green",
							})}></View>
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
	// buttonWrapper: {
	// 	position: "absolute",
	// 	// flexDirection: "row",
	// 	justifyContent: "space-between",

	// 	// width: "100%",
	// 	// marginHorizontal: 32,

	// 	top: 50,
	// 	left: 0,
	// 	right: 0,
	// 	bottom: 0,

	// 	zIndex: 999,
	// 	// pointerEvents: "auto",
	// },

	// topButtonWrapper: {
	// 	flexDirection: "row",
	// 	justifyContent: "space-between",

	// 	marginHorizontal: 32,
	// },

	// bottomButtonWrapper: {
	// 	alignItems: "center",
	// },

	returnButtonWrapper: {
		position: "absolute",

		top: 50,
		left: 32,

		zIndex: 999,
	},

	likeButtonWrapper: {
		position: "absolute",

		top: 50,
		right: 32,

		zIndex: 999,

	},
	
	redirectButtonWrapper: {
		position: "absolute",

		bottom: 0,
		width: "100%",
		
		alignItems: "center",

		zIndex: 999,
	},

	recipeInfoContainer: {
		height: "100%",
	},

	topArea: {
		backgroundColor: "blue",
		// flex: 2,
		height: 500,
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
