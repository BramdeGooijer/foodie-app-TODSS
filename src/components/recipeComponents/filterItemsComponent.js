import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState, useRef } from "react";
import { COLORS, SIZES, FONTS } from "../../theme/theme.js";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const cuisinesList = [
	{ id: 1, name: "All" },
	{ id: 2, name: "American" },
	{ id: 3, name: "Asian" },
	{ id: 4, name: "Burger" },
	{ id: 5, name: "Chinese" },
	{ id: 6, name: "Fast Food" },
	{ id: 7, name: "Italian" },
	{ id: 8, name: "Mexican" },
	{ id: 9, name: "Pasta" },
	{ id: 10, name: "Rice" },
	{ id: 11, name: "Asian" },
];

const allergyList = [
	{ id: 1, name: "All" },
	{ id: 2, name: "Gluten" },
	{ id: 3, name: "Melk" },
	{ id: 4, name: "Vis" },
];

export default function FilterItemsComponent(props) {
	const [cuisines, setCuisines] = useState(1);
	const [allergenen, setAllergenen] = useState(1);

	return (
		<View style={styles.filterItemContainer}>
			<View style={styles.dropdown}>
				<View style={styles.titleWrapper}>
					<Text style={styles.titleText}>Filter</Text>
				</View>

				<MaterialIcon
					size={35}
					name="close"
					color={"black"}
					style={styles.exitIcon}
					onPress={props.toggleFilter}
				/>
				<View style={styles.item}>
					<Text style={styles.title}>CUISINES</Text>
					<View style={styles.row}>
						{cuisinesList.map(cuisineItem => {
							return (
								<TouchableOpacity
									onPress={() => {
										setCuisines(cuisineItem.id);
									}}
									style={[
										styles.category,
										{
											borderColor:
												cuisines === cuisineItem.id
													? COLORS.primary
													: COLORS.grey,
										},
									]}>
									<Text
										style={[
											styles.subtitle,
											{
												color:
													cuisines === cuisineItem.id
														? COLORS.primary
														: COLORS.grey,
											},
										]}>
										{cuisineItem.name}
									</Text>
								</TouchableOpacity>
							);
						})}
					</View>
				</View>

				<View style={styles.item}>
					<Text style={styles.title}>ALLERGENEN</Text>
					<View style={styles.row}>
						{allergyList.map(allergyItem => {
							return (
								<TouchableOpacity
									onPress={() => {
										setAllergenen(allergyItem.id);
									}}
									style={[
										styles.category,
										{
											borderColor:
												allergenen === allergyItem.id
													? COLORS.primary
													: COLORS.grey,
										},
									]}>
									<Text
										style={[
											styles.subtitle,
											{
												color:
													allergenen === allergyItem.id
														? COLORS.primary
														: COLORS.grey,
											},
										]}>
										{allergyItem.name}
									</Text>
								</TouchableOpacity>
							);
						})}
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	filterItemContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		// opacity: 0.9,
		zIndex: 102,
		margin: 1,

		fontFamily: FONTS.Regular,
		// paddingTop: 40,
	},

	dropdown: {
		backgroundColor: "#F3F4F1",
		// width: 300, // <-- set the width to 300

		paddingTop: 70,
		paddingHorizontal: 20,
		paddingBottom: 40,

		// height: "80%",
	},

	titleWrapper: {
		alignItems: "center",
		// backgroundColor: "blue",
	},

	titleText: {
		fontSize: 18,
		fontWeight: 700,
		fontFamily: FONTS.bold,
	},

	exitButton: {
		backgroundColor: "red",
		position: "absolute",
		right: 0,
		top: 0,
	},

	exitIcon: {
		position: "absolute",
		top: 64,
		right: 15,
	},

	title: {
		color: COLORS.title,
		fontWeight: "bold",
		fontSize: SIZES.h3,
		marginVertical: 5,
	},

	row: {
		// flex: 1,
		flexWrap: "wrap",
		flexDirection: "row",
	},

	category: {
		borderRadius: 15,
		borderWidth: 2,
		padding: 5,
		paddingHorizontal: 10,
		margin: 2,
	},

	subtitle: {
		color: COLORS.grey,
		fontWeight: "700",
		fontSize: SIZES.h4,
	},
});
