import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SubscriptionText({ title }) {
	return (
		<View style={styles.subscriptionIcon}>
			<Text style={styles.subscriptionIconText}>{title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	subscriptionIcon: {
		// position: "absolute",
		// top: 15,
		// left: 15,
		justifyContent: "center",
		alignItems: "center",
		height: 20,
		width: 60,
		borderRadius: 4,

		fontFamily: "Plus-Jakarta-Sans-Bold",
		fontSize: 12,
		backgroundColor: "#294406",
	},

	subscriptionIconText: {
		color: "#FFFFFF",
	},
});
