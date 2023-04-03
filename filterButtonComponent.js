import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	Animated,
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

	// const handleOptionSelect = option => {
	// 	// Check if the option is already selected
	// 	if (selectedOptions.includes(option)) {
	// 		// If it is, remove it from the selectedOptions array
	// 		const newSelectedOptions = selectedOptions.filter(
	// 			item => item !== option
	// 		);
	// 		setSelectedOptions(newSelectedOptions);
	// 	} else {
	// 		// If it isn't, add it to the selectedOptions array
	// 		setSelectedOptions([...selectedOptions, option]);
	// 	}
	// };

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
			{isFilterOpen && <View style={styles.dropdown}>{}</View>}
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
		top: 50,
		right: 10,
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowRadius: 5,
		elevation: 5,
		padding: 10,
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
});

export default FilterButton;
