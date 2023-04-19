/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { View, StyleSheet, useWindowDimensions, Text } from "react-native";
import HTML from "react-native-render-html";
import { FONTS } from "../../theme/theme.js";

export default function CookingStepsComponent() {
	const lijst = [
		"<p>Preheat the oven to 350°F.</p>",
		"<p>Mix the flour and sugar in a bowl.</p>",
		"<p>In a separate bowl, mix together the eggs, milk, and vanilla extract.</p>",
		"<p>Combine the wet and dry ingredients, and mix until the batter is smooth.</p>",
		"<p>Grease a baking pan with cooking spray, and pour in the batter.</p>",
		"<p>Bake the cake for 30 minutes, or until a toothpick inserted in the center comes out clean.</p>",
		"<p>Let the cake cool in the pan for 10 minutes, then remove it from the pan and let it cool completely on a wire rack.</p>",
		"<p>Meanwhile, make the frosting by beating together the butter, powdered sugar, and vanilla extract until smooth.</p>",
		"<p>Spread the frosting over the top of the cooled cake.</p>",
		"<p>Refrigerate the cake for at least 30 minutes before serving.</p>",
		"<p>Enjoy your delicious cake!</p>",
		"<p>Store any leftovers in an airtight container in the refrigerator.</p>",
	];

	const { width } = useWindowDimensions();

	const tagsStyles = {
		p: {
			fontFamily: "FONTS.Regular",
			fontSize: 18,
			color: "#3A3938",
			marginBottom: 4,
			padding: 4,
			paddingLeft: 0,
			lineHeight: 24,
			textAlign: "justify",
			maxWidth: width - 80,
		},
	};

	return (
		<View>
			{lijst.map((html, index) => (
				<View
					key={index}
					style={{
						flexDirection: "row",
						alignItems: "flex-start",
						backgroundColor: "white",
					}}>
					<View style={{ width: 60, padding: 8, marginLeft: 8 }}>
						<Text
							style={{
								fontSize: 32,
								color: "#294406",
								opacity: 0.6,
								fontWeight: 700,
								lineHeight: 32,
							}}>{`${index + 1}`}</Text>
					</View>
					<HTML
						source={{ html }}
						contentWidth={width}
						tagsStyles={tagsStyles}
					/>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({});
