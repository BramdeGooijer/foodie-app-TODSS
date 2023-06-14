import React, { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { FilterBasedAd } from "../../components/globalComponents/filterBasedAdComponent";
import { MainAd } from "../../components/globalComponents/mainAdComponent";

export default function DashboardScreen() {
	return (
		<SafeAreaView>
			<View style={styles.mainAdContainer}>
				<MainAd
					title={"Ideaal voor valentijn!"}
					description={"Makkelijke rijstwafel bonbons"}
				/>
			</View>
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

	mainAdContainer: {
		height: 320,
		marginBottom: 8,
		marginHorizontal: 20,
	},
});
