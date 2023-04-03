import React, { useState, useRef } from "react";
import {
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Text,
	Animated,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const searchbar = () => {
	const [showSearchBar, setShowSearchBar] = useState(false);
	const inputRef = useRef(null);
	const animatedValue = useRef(new Animated.Value(0)).current;

	const handleButtonClick = () => {
		setShowSearchBar(true);
		Animated.timing(animatedValue, {
			toValue: 1,
			duration: 500,
			useNativeDriver: false,
		}).start(() => inputRef.current.focus());
	};

	const handleInputBlur = () => {
		setShowSearchBar(false);
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 500,
			useNativeDriver: false,
		}).start();
	};

	const buttonStyle = {
		transform: [
			{
				translateX: animatedValue.interpolate({
					inputRange: [0, 1],
					outputRange: [0, -180],
				}),
			},
		],
	};

	const inputStyle = {
		transform: [
			{
				translateX: animatedValue.interpolate({
					inputRange: [0, 1],
					outputRange: [180, 0],
				}),
			},
		],
	};

	return (
		<View>
			{!showSearchBar && (
				<TouchableOpacity style={styles.button} onPress={handleButtonClick}>
					<Icon name="search" size={24} color="black" style={styles.icon} />
					<Text style={styles.buttonText}>zoeken</Text>
				</TouchableOpacity>
			)}
			{showSearchBar && (
				<TextInput
					ref={inputRef}
					style={styles.input}
					placeholder="zoeken..."
					onBlur={handleInputBlur}
					autoFocus={true}></TextInput>
			)}
		</View>
	);
};
const styles = StyleSheet.create({
	input: {
		fontSize: 36,
		backgroundColor: "#DFDFDF",
		minWidth: "100%",
		borderRadius: 35,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 30,
		paddingRight: 30,
		shadowColor: "black",
		shadowOpacity: 0.5,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 2,
		elevation: 5,
	},

	button: {
		backgroundColor: "#DFDFDF",
		borderRadius: 35,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 30,
		paddingRight: 30,
		flexDirection: "row",
		alignItems: "center",
		shadowColor: "black",
		shadowOpacity: 0.5,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 2,
		elevation: 5,
	},

	buttonText: {
		fontSize: 24,
	},

	icon: {
		marginRight: 15,
	},
});

export default searchbar;
