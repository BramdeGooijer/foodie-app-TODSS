import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import {
	COLORS,
	SIZES,
} from "/home/alperen/vscode/foodie-app/foodie-app-2/theme.jsx";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	Animated,
	SafeAreaView,
	ScrollView,
} from "react-native";

const FilterButton = ({ options }) => {
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState([]);
	const [buttonWidth, setButtonWidth] = useState(new Animated.Value(100));

	const handleFilterToggle = async () => {
		setIsFilterOpen(!isFilterOpen);

		if (!isFilterOpen) {
			// change the button width to a larger value
			Animated.timing(buttonWidth, {
				toValue: 300,
				duration: 10,
				useNativeDriver: false,
			}).start();
		} else {
			// change button to original value
			Animated.timing(buttonWidth, {
				toValue: 100,
				duration: 10,
				useNativeDriver: false,
			}).start();
		}
	};

	const [cuisines, setCuisines] = useState(1);

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={handleFilterToggle}>
				<Animated.View style={[{ width: buttonWidth }]} />
				<View style={styles.filterContainer}>
					<Icon
						style={styles.filterButtonItem}
						name="filter"
						size={30}
						color="black"
					/>
					<Text style={styles.filterButtonItem}>Filter</Text>
				</View>
			</TouchableOpacity>
			{isFilterOpen && (
				<View style={styles.dropdown}>
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
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
	button: {
		backgroundColor: "white",
		padding: 10,
		paddingLeft: 30,
		paddingRight: 30,
		borderRadius: 50,
		marginRight: 10,
		alignItems: "center",
		justifyContent: "center",
		borderColor: "black",
		borderWidth: 1,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
		paddingBottom: 20,
	},
	dropdown: {
		position: "absolute",
		top: 60,
		left: 0,
		backgroundColor: COLORS.lightGray4,
		width: 300, // <-- set the width to 300
		borderRadius: SIZES.radius,
		padding: SIZES.padding,
		elevation: 1,
		shadowColor: "black",
		shadowOpacity: 0.8,
		shadowRadius: 2,
		shadowOffset: {
			height: 1,
			width: 1,
		},
	},
	option: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 5,
		flex: 1,
		width: 310,
	},
	filterContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	filterButtonItem: {
		marginRight: 5,
	},

	subtitle: {
		color: COLORS.grey,
		fontWeight: "700",
		fontSize: SIZES.h4,
	},
	category: {
		borderRadius: 15,
		borderWidth: 2,
		padding: 5,
		paddingHorizontal: 10,
	},
	row: {
		flex: 1,
		flexWrap: "wrap",
		flexDirection: "row",
	},
});

export default FilterButton;
