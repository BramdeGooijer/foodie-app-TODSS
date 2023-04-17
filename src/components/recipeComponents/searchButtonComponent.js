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

export default function SearchButtonComponent() {
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

	const [showText, setShowText] = useState(true);
	const viewRef = useRef(null);

	const onLayout = () => {
		if (viewRef.current) {
			viewRef.current.measure((x, y, width, height) => {
				if (width > 80) {
					setShowText(true);
				} else {
					setShowText(false);
				}
			});
		}
	};

	return (
		<View ref={viewRef} onLayout={onLayout}>
			{!showSearchBar && (
				<TouchableOpacity style={styles.button} onPress={handleButtonClick}>
					<Icon name="search" size={18} color="#3A3938" style={styles.icon} />
					{showText ? <Text style={styles.buttonText}>Zoeken</Text> : null}
				</TouchableOpacity>
			)}
			{showSearchBar && (
				<Animated.View style={styles.inputContainer}>
					<TextInput
						ref={inputRef}
						style={styles.input}
						placeholder="zoeken..."
						autoComplete={"off"}
						onBlur={handleInputBlur}
						autoFocus={true}
						onChangeText={handleInputChange}
						value={inputValue}
					/>
				</Animated.View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		fontSize: 16,
		backgroundColor: "white",
		minWidth: "100%",
		borderRadius: 70,

		height: 40,

		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 24,
		paddingRight: 24,

		shadowColor: "black",
		shadowOpacity: 0.05,
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowRadius: 6,
	},

	button: {
		backgroundColor: "white",
		borderRadius: 70,

		paddingTop: 8,
		paddingBottom: 8,
		// paddingLeft: 24,
		// paddingRight: 24,

		width: "100%",
		height: 40,

		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",

		shadowColor: "black",
		shadowOpacity: 0.05,
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowRadius: 6,
	},

	buttonText: {
		color: "#3A3938",
		fontFamily: "Plus-Jakarta-Sans-Semi-Bold",
		fontSize: 16,
	},

	icon: {
		marginRight: 4,
	},
});
