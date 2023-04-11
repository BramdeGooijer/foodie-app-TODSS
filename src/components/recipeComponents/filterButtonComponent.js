import React, { useState, useRef } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { COLORS, SIZES } from "../../theme/theme.js";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Animated,
} from "react-native";

export default function FilterButtonComponent(props) {
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
	const [allergenen, setAllergenen] = useState(1);

	const [showView, setShowView] = useState(true);
	const viewRef = useRef(null);

	const onLayout = () => {
		if (viewRef.current) {
			viewRef.current.measure((x, y, width, height) => {
				console.log(width);
				if (width > 80) {
					console.log("hi");
					setShowView(true);
				} else {
					console.log("bye");
					setShowView(false);
				}
			});
		}
	};

	return (
		<View style={styles.container} ref={viewRef} onLayout={onLayout}>
			<TouchableOpacity
				style={[styles.button, styles.shadowProp]}
				onPress={props.toggleFilter}>
				<Animated.View style={[{ width: buttonWidth }]} />
				<View style={styles.filterContainer}>
					<Icon
						style={styles.filterButtonIcon}
						name="filter"
						size={16}
						color="#3A3938"
					/>
					{showView ? (
						<Text style={styles.filterButtonText}>Filter</Text>
					) : null}
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
										borderColor:
											allergenen === 1 ? COLORS.primary : COLORS.grey,
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
										borderColor:
											allergenen === 2 ? COLORS.primary : COLORS.grey,
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
										borderColor:
											allergenen === 3 ? COLORS.primary : COLORS.grey,
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
										borderColor:
											allergenen === 4 ? COLORS.primary : COLORS.grey,
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
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
	title: {
		color: COLORS.title,
		fontWeight: "bold",
		fontSize: SIZES.h3,
		marginVertical: 5,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",

		width: "100%",
		height: 40,
		borderRadius: 70,

		// paddingLeft: 24,
		// paddingRight: 24,
		paddingTop: 8,
		paddingBottom: 8,

		backgroundColor: "white",
		// marginRight: 10,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
		paddingBottom: 20,
	},

	shadowProp: {
		shadowOffset: { width: 2, height: 2 },
		shadowColor: "black",
		shadowOpacity: 0.05,
		shadowRadius: 6,
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
	filterButtonIcon: {
		marginRight: 4,
	},
	filterButtonText: {
		fontFamily: "Plus-Jakarta-Sans-Semi-Bold",
		color: "#3A3938",
		fontSize: 16,
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
	row: {
		flex: 1,
		flexWrap: "wrap",
		flexDirection: "row",
	},
});
