/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { View, StyleSheet, useWindowDimensions, Text } from "react-native";
import HTML from "react-native-render-html";
import { FONTS } from "../../theme/theme.js";

export default function CookingStepsComponent(props) {
	const lijst = [
		"<p>Preheat the oven to 350°F.</p>",
		"<p>Mix the <b>flour</b> and <b>sugar</b> in a bowl.</p>",
		"<p>In a separate bowl, mix together the <b>eggs</b>, <b>milk</b>, and <b>vanilla extract</b>.</p>",
		"<p>Combine the wet and dry ingredients, and mix until the batter is smooth.</p>",
		"<p>Grease a baking pan with cooking spray, and pour in the batter.</p>",
		"<p>Bake the cake for 30 minutes, or until a toothpick inserted in the center comes out clean.</p>",
		"<p>Let the cake cool in the pan for 10 minutes, then remove it from the pan and let it cool completely on a wire rack.</p>",
		"<p>Meanwhile, make the frosting by beating together the <b>butter</b>, <b>powdered sugar</b>, and <b>vanilla extract</b> until smooth.</p>",
		"<p>Spread the frosting over the top of the cooled cake.</p>",
		"<p>Refrigerate the cake for at least 30 minutes before serving.</p>",
		"<p>Enjoy your delicious cake!</p>",
		"<p>Store any leftovers in an airtight container in the refrigerator.</p>",
	];

	const { width } = useWindowDimensions();

	return (
		<View>
			{props.cookingsteps.map(
				(html, index) => (
					console.log(html.description),
					(
						<View key={index} style={[styles.container]}>
							<View style={[styles.numberContainer]}>
								<Text style={[styles.stepNumber]}>{`${index + 1}`}</Text>
							</View>
							<Text style={styles.tagsStyles}>{html.description}</Text>
							{/* <HTML
						source={ <p>{html.description}</p> }
						contentWidth={width}
						tagsStyles={tagsStyles}
					/> */}
						</View>
					)
				)
			)}
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
