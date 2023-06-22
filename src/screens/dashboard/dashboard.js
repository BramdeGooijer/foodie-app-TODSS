import React, { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { FilterBasedAd } from "../../components/globalComponents/filterBasedAdComponent";

export default function DashboardScreen() {
	return (
		<SafeAreaView>
			<View style={styles.filterBasedAdsContainer}>
				<FilterBasedAd
					description={"Seizoensgroenten in de spotlight: wintergroenten!"}
					filters={["Gluten"]}
					primary
				/>
				<FilterBasedAd
					description={"Seizoensgroenten in de spotlight: wintergroenten!"}
					filters={["Gluten"]}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	filterBasedAdsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "stretch",
		gap: 8,
		marginHorizontal: 20,
	},
});
