import React from "react";
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	Linking,
} from "react-native";
import { COLORS, SIZES, FONTS } from "../../theme/theme.js";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

let ButtonComponents = () => {
	let handleOrderButtonPress = () => {
		let orderUrl =
			"https://www.lennaomrani.com/product/every-day-vegan-budget-friendly-kookboek/";
		Linking.openURL(orderUrl);
	};

	let handleInstagramButtonPress = () => {
		let instagramUrl = "https://www.instagram.com/lennaomrani/";
		Linking.openURL(instagramUrl);
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<TouchableOpacity
					style={styles.greenButton}
					onPress={handleOrderButtonPress}>
					<View style={styles.buttonContent}>
						<Text style={styles.buttonText}>Bestel nu!</Text>
						<Text style={styles.subtitle}>
							Everyday Vegan Budget Friendly kookboek
						</Text>
					</View>
					<View style={styles.arrowContainerGreen}>
						<MaterialIcon size={32} name="arrow-forward" color={"white"} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.yellowButton}
					onPress={handleInstagramButtonPress}>
					<View style={styles.buttonContent}>
						<Text style={styles.buttonText}>Volg mij ook op:</Text>
						<Text style={styles.subtitle}>Instagram</Text>
					</View>
					<View style={styles.arrowContainer}>
						<MaterialIcon size={32} name="arrow-forward" color={"white"} />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
	},
	content: {
		alignItems: "center",
	},
	greenButton: {
		backgroundColor: COLORS.primary,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		marginBottom: 2,
		height: 96,
		width: 350,
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
	},
	yellowButton: {
		backgroundColor: COLORS.yellowCheck,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		marginTop: 10,
		height: 76,
		width: 350,
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
	},
	buttonContent: {
		flex: 1,
		marginRight: 10,
	},
	buttonText: {
		color: "white",
		fontFamily: FONTS.Nexa,
		fontSize: 16,
		textAlign: "left",
	},
	subtitle: {
		color: "white",
		fontFamily: FONTS.Regular,
		fontWeight: "700",
		fontSize: 16,
		textAlign: "left",
		marginTop: 5,
	},
	arrowContainer: {
		marginLeft: 10,
		marginTop: 20,
	},
	arrowContainerGreen: {
		marginLeft: 10,
		marginTop: 35,
	},
});

export default ButtonComponents;
