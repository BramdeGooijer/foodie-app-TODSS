import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import { COLORS, SIZES } from "../../theme/theme.js";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function FilterItemsComponent(props) {
	const [cuisines, setCuisines] = useState(1);
	const [allergenen, setAllergenen] = useState(1);

	return (
		<View style={styles.filterItemContainer}>
			<View style={styles.dropdown}>
				<View style={styles.titleWrapper}>
					<Text style={styles.titleText}>Filter</Text>
				</View>

				<MaterialIcon size={35} name="close" color={"black"} style={styles.exitIcon} onPress={props.toggleFilter}/>
				<View style={styles.item}>
					<Text style={styles.title}>CUISINES</Text>
					<View style={styles.row}>
						<TouchableOpacity
							onPress={() => {
								setCuisines(1);
							}}
							style={[
								styles.category,
								{
									borderColor: cuisines === 1 ? COLORS.primary : COLORS.grey,
								},
							]}>
							<Text
								style={[
									styles.subtitle,
									{ color: cuisines === 1 ? COLORS.primary : COLORS.grey },
								]}>
								All
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								setCuisines(2);
							}}
							style={[
								styles.category,
								{
									borderColor: cuisines === 2 ? COLORS.primary : COLORS.grey,
								},
							]}>
							<Text
								style={[
									styles.subtitle,
									{ color: cuisines === 2 ? COLORS.primary : COLORS.grey },
								]}>
								American
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								setCuisines(3);
							}}
							style={[
								styles.category,
								{
									borderColor: cuisines === 3 ? COLORS.primary : COLORS.grey,
								},
							]}>
							<Text
								style={[
									styles.subtitle,
									{ color: cuisines === 3 ? COLORS.primary : COLORS.grey },
								]}>
								Asian
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								setCuisines(4);
							}}
							style={[
								styles.category,
								{
									borderColor: cuisines === 4 ? COLORS.primary : COLORS.grey,
								},
							]}>
							<Text
								style={[
									styles.subtitle,
									{ color: cuisines === 4 ? COLORS.primary : COLORS.grey },
								]}>
								Burger
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								setCuisines(5);
							}}
							style={[
								styles.category,
								{
									borderColor: cuisines === 5 ? COLORS.primary : COLORS.grey,
								},
							]}>
							<Text
								style={[
									styles.subtitle,
									{ color: cuisines === 5 ? COLORS.primary : COLORS.grey },
								]}>
								Chineese
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								setCuisines(6);
							}}
							style={[
								styles.category,
								{
									borderColor: cuisines === 6 ? COLORS.primary : COLORS.grey,
								},
							]}>
							<Text
								style={[
									styles.subtitle,
									{ color: cuisines === 6 ? COLORS.primary : COLORS.grey },
								]}>
								Fast Food
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								setCuisines(7);
							}}
							style={[
								styles.category,
								{
									borderColor: cuisines === 7 ? COLORS.primary : COLORS.grey,
								},
							]}>
							<Text
								style={[
									styles.subtitle,
									{ color: cuisines === 7 ? COLORS.primary : COLORS.grey },
								]}>
								Italian
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								setCuisines(8);
							}}
							style={[
								styles.category,
								{
									borderColor: cuisines === 8 ? COLORS.primary : COLORS.grey,
								},
							]}>
							<Text
								style={[
									styles.subtitle,
									{ color: cuisines === 8 ? COLORS.primary : COLORS.grey },
								]}>
								Mexican
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								setCuisines(9);
							}}
							style={[
								styles.category,
								{
									borderColor: cuisines === 9 ? COLORS.primary : COLORS.grey,
								},
							]}>
							<Text
								style={[
									styles.subtitle,
									{ color: cuisines === 9 ? COLORS.primary : COLORS.grey },
								]}>
								Pasta
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								setCuisines(10);
							}}
							style={[
								styles.category,
								{
									borderColor: cuisines === 10 ? COLORS.primary : COLORS.grey,
								},
							]}>
							<Text
								style={[
									styles.subtitle,
									{ color: cuisines === 10 ? COLORS.primary : COLORS.grey },
								]}>
								Rice
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								setCuisines(11);
							}}
							style={[
								styles.category,
								{
									borderColor: cuisines === 11 ? COLORS.primary : COLORS.grey,
								},
							]}>
							<Text
								style={[
									styles.subtitle,
									{ color: cuisines === 11 ? COLORS.primary : COLORS.grey },
								]}>
								Asian
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.item}>
					<Text style={styles.title}>ALLERGENEN</Text>
					<View style={styles.row}>
						<TouchableOpacity
							onPress={() => {
								setAllergenen(1);
							}}
							style={[
								styles.category,
								{
									borderColor: allergenen === 1 ? COLORS.primary : COLORS.grey,
								},
							]}>
							<Text
								style={[
									styles.subtitle,
									{ color: allergenen === 1 ? COLORS.primary : COLORS.grey },
								]}>
								All
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								setAllergenen(2);
							}}
							style={[
								styles.category,
								{
									borderColor: allergenen === 2 ? COLORS.primary : COLORS.grey,
								},
							]}>
							<Text
								style={[
									styles.subtitle,
									{ color: allergenen === 2 ? COLORS.primary : COLORS.grey },
								]}>
								Gluten
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								setAllergenen(3);
							}}
							style={[
								styles.category,
								{
									borderColor: allergenen === 3 ? COLORS.primary : COLORS.grey,
								},
							]}>
							<Text
								style={[
									styles.subtitle,
									{ color: allergenen === 3 ? COLORS.primary : COLORS.grey },
								]}>
								Melk
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								setAllergenen(4);
							}}
							style={[
								styles.category,
								{
									borderColor: allergenen === 4 ? COLORS.primary : COLORS.grey,
								},
							]}>
							<Text
								style={[
									styles.subtitle,
									{ color: allergenen === 4 ? COLORS.primary : COLORS.grey },
								]}>
								Vis
							</Text>
						</TouchableOpacity>
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
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		// opacity: 0.9,
		zIndex: 102,

		fontFamily: "Plus-Jakarta-Sans-Regular",
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
		fontFamily: "Plus-Jakarta-Sans-Bold",
	},

	exitButton: {
		backgroundColor:  "red",
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
	},

	subtitle: {
		color: COLORS.grey,
		fontWeight: "700",
		fontSize: SIZES.h4,
	},
});
