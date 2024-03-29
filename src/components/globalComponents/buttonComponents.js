/* eslint-disable react/react-in-jsx-scope */
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/AntDesign";
import { StyleSheet, View, Text } from "react-native";
import { FONTS } from "../../theme/theme";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useState } from "react";

export function IconButton(props) {
	// const [textItem, setTextItem] = useState();

	// if (props.text) {
	//     setTextItem(<Text style={iconButtonStyles.text}>{props.text}</Text>);
	// }

	return (
		<TouchableWithoutFeedback onPress={props.handleOnPress}>
			<View
				style={[
					iconButtonStyles.container,
					props.text === undefined && iconButtonStyles.round,
				]}>
				<Icon size={24} name={props.icon} color="#3A3938" />

				{props.text && <Text style={iconButtonStyles.text}>{props.text}</Text>}
			</View>
		</TouchableWithoutFeedback>
	);
}

export function IconButtonCategorie(props) {
	return (
		<TouchableWithoutFeedback onPress={props.handleOnPress}>
			<View
				style={[
					iconButtonStyles.container2,
					props.text === undefined && iconButtonStyles.round,
				]}>
				<Icon size={24} name={props.icon} color="#FBBA00" />

				{props.text && <Text style={iconButtonStyles.text2}>{props.text}</Text>}
			</View>
		</TouchableWithoutFeedback>
	);
}

export function MaterialIconButton(props) {
	const [textItem, setTextItem] = useState();

	if (props.text) {
		setTextItem(<Text style={iconButtonStyles.text}>{props.text}</Text>);
	}

	return (
		<TouchableWithoutFeedback onPress={props.handleOnPress}>
			<View
				style={[
					iconButtonStyles.container,
					props.text === undefined && iconButtonStyles.round,
				]}>
				<MaterialIcon size={24} name={props.icon} color="#3A3938" />

				{textItem}
			</View>
		</TouchableWithoutFeedback>
	);
}

export function RedirectButton(props) {
	return (
		<TouchableWithoutFeedback onPress={props.handleOnPress}>
			<View
				style={[
					redirectButtonStyles.container,
					props.invert && redirectButtonStyles.invertBackground,
					props.maximumWidth && { width: "100%" },
				]}>
				<Text
					style={[
						redirectButtonStyles.text,
						props.invert && redirectButtonStyles.invertText,
					]}>
					{props.text}
				</Text>
				{props.icon && (
					<MaterialIcon size={24} color="white" name={props.icon} />
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}

const iconButtonStyles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 5,

		width: 173,
		height: 40,

		borderRadius: 9999999,
		backgroundColor: "white",

		shadowOffset: { width: 2, height: 2 },
		shadowColor: "black",
		shadowOpacity: 0.05,
		shadowRadius: 6,
	},

	text: {
		color: "#3A3938",
		fontSize: 16,
		fontFamily: FONTS.SemiBold,
	},

	round: {
		aspectRatio: 1,
		width: 44,
		height: 44,
	},

	container2: {
		justifyContent: "center",
		alignItems: "center",
		gap: 5,

		width: 165,
		height: 70,

		borderRadius: 9999999,
		backgroundColor: "white",

		shadowOffset: { width: 2, height: 2 },
		shadowColor: "black",
		shadowOpacity: 0.05,
		shadowRadius: 6,
	},

	text2: {
		color: "#3A3938",
		fontSize: 16,
		fontFamily: FONTS.Bold,
	},
});

const redirectButtonStyles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 14,

		width: 354,
		height: 49,

		borderRadius: 9999999,
		backgroundColor: "#294406",

		shadowOffset: { width: 2, height: 2 },
		shadowColor: "black",
		shadowOpacity: 0.05,
		shadowRadius: 6,
	},

	text: {
		color: "white",
		fontFamily: FONTS.SemiBold,
		fontSize: 20,
	},

	invertBackground: {
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "#294406",
	},

	invertText: {
		color: "#294406",
		fontFamily: FONTS.SemiBold,
		fontSize: 20,
	},
});
