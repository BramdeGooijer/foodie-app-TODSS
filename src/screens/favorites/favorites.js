/* eslint-disable react/self-closing-comp */
import { useState } from "react";
import React, {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	ScrollView,
	Image
} from "react-native";
import {
	IconButton,
	MaterialIconButton,
	RedirectButton,
} from "../../components/globalComponents/buttonComponents";
import * as Haptics from "expo-haptics";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import CookingStepsComponent from "../../components/recipeComponents/cookingStepsComponent";

export default function FavoritesScreen(props) {
	// HIER ONDER DE CODE VOOR HET OFFICIËLE COMPONENT
	// const [description, setDescription] = useState(props.description);

	// HIER ONDER DE CODE VOOR HET TESTEN
	const [description, setDescription] = useState(
		"Zelfgemaakte pastasaus die ook nog eens eiwitrijk is én lekker veel groenten bevat? Yes please! Het zal geen verrassing zijn: mij maakt het heel erg gelukkig"
	);
	const [fullDescription, setFullDescription] = useState(false);

	function handleReadMore() {
		setFullDescription(!fullDescription);
	}

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
					<View style={styles.mainContentWrapper}>
						{/* HIER ONDER DE CODE DIE WE GEBRUIKEN OM DIT DEEL TE TESTEN */}
						<Image
							style={styles.recipeImage}
							source={require("../../../assets/recipeImages/dummyRecipe1.png")}
						/>
						<Text style={styles.recipeSlogan}>Vegan & glutenvrije</Text>
						<Text style={styles.recipeTitle}>
							Romige en eiwitrijke pasta met geroosterde groenten
						</Text>
						<Text style={styles.recipePrepTime}>55 minuten, makkelijk</Text>

						{/* HIER ONDER DE CODE DIE WE GEBRUIKEN ALS WE HET SCHERM INRENDEREN */}
						{/* <Image style={styles.recipeImage} source={require("../../../assets/recipeImages/dummyRecipe1.png")}/>
						<Text style={styles.recipeSlogan}>{props.slogan}</Text>
						<Text style={styles.recipeTitle}>{props.title}</Text>
						<Text style={styles.recipePrepTime}>{props.preptime} minuten, {props.difficulty}</Text> */}
					</View>
				</View>
				<View style={styles.descriptionArea}>
					{/* <Text>Placeholder for recipe description</Text> */}
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
					<Text>Placeholder for recipe ingrediënts and preperation steps</Text>
					<CookingStepsComponent />
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
		backgroundColor: "red",
		// flex: 1,
		height: 1000,
	},
});
