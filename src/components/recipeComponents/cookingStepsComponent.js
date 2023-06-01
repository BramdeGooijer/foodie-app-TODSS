/* eslint-disable react/react-in-jsx-scope */
import { View, StyleSheet, Text } from "react-native";
import { FONTS } from "../../theme/theme.js";

export default function CookingStepsComponent(props) {
	return (
		<View>
			{props.cookingsteps.map((recipe, index) => (
				<View key={index} style={[styles.container]}>
					<View style={[styles.numberContainer]}>
						<Text style={[styles.stepNumber]}>{`${index + 1}`}</Text>
					</View>
					<Text style={styles.tagsStyles}>{recipe.description}</Text>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "flex-start",
		backgroundColor: "white",
	},
	tagsStyles: {
		fontFamily: FONTS.Regular,
		fontSize: 18,
		color: "#3A3938",
		marginBottom: 4,
		padding: 4,
		paddingTop: 8,
		marginTop: 5,
		paddingLeft: 0,
		lineHeight: 24,
		textAlign: "justify",
		maxWidth: "80%",
	},
	stepNumber: {
		fontSize: 32,
		color: "#294406",
		opacity: 0.6,
		fontWeight: 700,
		lineHeight: 32,
	},
	numberContainer: {
		width: 60,
		padding: 8,
		marginLeft: 8,
	},
});
