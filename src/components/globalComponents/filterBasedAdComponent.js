import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, SIZES } from "../../theme/theme";

export function FilterBasedAd({
	description,
	filters,
	cuisine,
	primary = false,
}) {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			style={{ flex: 1 }}
			onPress={() => navigation.navigate("Recipes")}>
			<View style={styles.container({ primary: primary })}>
				<Text style={styles.titleText}>Koken met...</Text>
				<Text style={styles.descriptionText}>{description}</Text>

				<View style={styles.iconContainer}>
					<MaterialIcon size={25} name="arrow-forward" color={COLORS.white} />
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: ({ primary }) => ({
		padding: 16,
		backgroundColor: primary ? COLORS.primary : COLORS.yellowCheck,
		borderRadius: 5,
	}),

	titleText: {
		fontSize: SIZES.h4,
		color: COLORS.white,
		fontFamily: "Nexa-Rust-Script-Cursive",
	},

	descriptionText: {
		color: COLORS.white,
		fontFamily: FONTS.Bold,
	},

	iconContainer: {
		marginTop: 20,
		flexDirection: "row-reverse",
	},
});
