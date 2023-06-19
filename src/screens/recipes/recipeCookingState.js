import React, {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	Image,
} from "react-native";
import {
	ScrollView,
	TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import CookingStepsComponent from "../../components/recipeComponents/cookingStepsComponent";

export default function RecipeCookingState({ navigation, route }) {
	const { recipeInfo } = route.params;

	function handleReturn() {
		console.log("return");
		navigation.goBack();
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topArea}>
				<View style={styles.returnButton}>
					<TouchableWithoutFeedback onPress={handleReturn}>
						<MaterialIcon size={25} name="arrow-back" color="#000000" />
					</TouchableWithoutFeedback>
				</View>
				<Text style={styles.titleText}>
					{recipeInfo.name.length > 27
						? recipeInfo.name.substring(0, 27) + "..."
						: recipeInfo.name}
				</Text>
			</View>

			<View style={styles.mainArea}>
				<ScrollView style={styles.mainAreaScrollView}>
					<Text style={styles.globalTextStyling}>Bereiding</Text>
					<CookingStepsComponent cookingsteps={recipeInfo.cookingSteps} />
					<Text style={[styles.quoteText, styles.globalTextStyling]}>
						Aan tafel
					</Text>
					<Image
						style={styles.recipeImage}
						source={require("../../../assets/recipeImages/dummyRecipe1.png")}
					/>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#F3F4F1",
	},

	topArea: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F3F4F1",
		marginTop: 20,
		marginBottom: 15,
	},
	mainArea: {
		backgroundColor: "white",
	},

	mainAreaScrollView: {
		paddingTop: 33,
		paddingHorizontal: 20,
		paddingBottom: 50,
	},

	returnButton: {
		position: "absolute",
		left: 32,
	},

	titleText: {
		fontFamily: "Plus-Jakarta-Sans-Semi-Bold",
		fontSize: 18,
		lineHeight: 34,
		margin: 0,
	},

	globalTextStyling: {
		fontFamily: "Plus-Jakarta-Sans-Semi-Bold",
		fontSize: 28,
		marginBottom: 24,
	},

	quoteText: {
		marginBottom: 24,
		marginTop: 40,
	},

	recipeImage: {
		borderRadius: 5,
		width: "100%",
		height: 400,
		marginBottom: 175,
	},
});
