/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef, useCallback } from "react";
import {
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Text,
	Animated,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import debounce from "lodash/debounce";

const searchbar = () => {
	const [showSearchBar, setShowSearchBar] = useState(false);
	const inputRef = useRef(null);
	const animatedValue = useRef(new Animated.Value(0)).current;
	const [inputValue, setInputValue] = useState("");

	const handleInputSubmit = text => {
		console.log(text);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedHandleInputSubmit = useCallback(
		debounce(text => {
			handleInputSubmit(text);
		}, 500),
		[]
	);

	const handleInputChange = useCallback(
		text => {
			setInputValue(text);
			clearTimeout(debouncedHandleInputSubmit.timerId);
			debouncedHandleInputSubmit.timerId = setTimeout(() => {
				debouncedHandleInputSubmit(text);
			}, 500);
		},
		[debouncedHandleInputSubmit]
	);

	const handleButtonClick = () => {
		setShowSearchBar(true);
		Animated.timing(animatedValue, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
		}).start(() => inputRef.current.focus());
	};

	const handleInputBlur = () => {
		setShowSearchBar(false);
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true,
		}).start();
	};

	const buttonStyle = {
		transform: [
			{
				translateX: animatedValue.interpolate({
					inputRange: [0, 1],
					outputRange: [0, 0],
				}),
			},
			{
				scaleX: animatedValue.interpolate({
					inputRange: [0, 0.5, 1],
					outputRange: [1, 0.5, 0],
				}),
			},
		],
	};

	const inputStyle = {
		transform: [
			{
				translateX: animatedValue.interpolate({
					inputRange: [0, 1],
					outputRange: [0, 0],
				}),
			},
			{
				scaleX: animatedValue.interpolate({
					inputRange: [0, 0.5, 1],
					outputRange: [0, 0.5, 1],
				}),
			},
		],
	};

	return (
		<View>
			{!showSearchBar && (
				<TouchableOpacity
					style={[styles.button, buttonStyle]}
					onPress={handleButtonClick}>
					<Icon name="search" size={24} color="black" style={styles.icon} />
					<Text style={styles.buttonText}>zoeken</Text>
				</TouchableOpacity>
			)}
			{showSearchBar && (
				<Animated.View style={[styles.inputContainer, inputStyle]}>
					<TextInput
						ref={inputRef}
						style={styles.input}
						placeholder="zoeken..."
						onBlur={handleInputBlur}
						autoFocus={true}
						onChangeText={handleInputChange}
						value={inputValue}
					/>
				</Animated.View>
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
		paddingLeft: 20,
		paddingRight: 20,
		marginLeft: 40,
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
		fontSize: 18,
	},

	icon: {
		marginRight: 10,
	},
});

export default searchbar;
