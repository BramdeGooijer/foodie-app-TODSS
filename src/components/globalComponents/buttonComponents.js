/* eslint-disable react/react-in-jsx-scope */
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/AntDesign";
import { StyleSheet, View, Text } from "react-native";
import { FONTS } from "../../theme/theme";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export function IconButton(props) {
	return (
		<TouchableWithoutFeedback onPress={props.handleOnPress}>
			<View
				style={[
					iconButtonStyles.container,
					props.text === undefined && iconButtonStyles.round,
				]}>
				<Icon size={24} name={props.icon} color="#3A3938" />

				{props.text !== null && (
					<Text style={iconButtonStyles.text}>{props.text}</Text>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}

export function RedirectButton(props) {
	return (
		<TouchableWithoutFeedback onPress={props.handleOnPress}>
			<View style={redirectButtonStyles.container}>
				<Text style={redirectButtonStyles.text}>{props.text}</Text>
				<MaterialIcon size={24} color="white" name="arrow-forward" />
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
});
