import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../theme/theme";
import { IconButton } from "./buttonComponents";
import { LinearGradient } from "expo-linear-gradient";
import Image from "../../../assets/recipeImages/dummyRecipe1.png";

export function MainAd({ title, description, imageUrl }) {
	return (
		<View style={styles.mainAdContainer}>
			<ImageBackground source={Image} resizeMode="cover" style={styles.image}>
				<LinearGradient
					colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"]}
					style={styles.gradient}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.description}>{description}</Text>

					<View style={styles.iconContainer}>
						<IconButton
							icon="arrowright"
							handleOnPress={() => console.log("press")}
						/>
					</View>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		color: COLORS.yellowCheck,
		fontSize: SIZES.h2,
		fontFamily: "Nexa-Rust-Script-Cursive",
	},
	description: {
		color: COLORS.white,
		fontFamily: FONTS.Bold,
		fontSize: SIZES.large,
	},
	mainAdContainer: {
		borderRadius: 5,
		overflow: "hidden",
		flex: 1,
	},
	iconContainer: {
		flex: 1,
		flexDirection: "row-reverse",
		alignItems: "flex-end",
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
	gradient: {
		flex: 1,
		padding: 16,
	},
});
