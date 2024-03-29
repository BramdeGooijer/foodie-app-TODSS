import { useState } from "react";
import React, {
	SafeAreaView,
	StyleSheet,
	Text,
	Button,
	View,
	TouchableWithoutFeedback,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { RedirectButton } from "../../components/globalComponents/buttonComponents";
import { Dimensions } from "react-native";
import { changeUsername } from "../../service/UserService";

export default function EditProfileOverlay({ navigation, route }) {
	const [profileInput, setProfileInput] = useState("");
	const [oldPasswordInput, setOldPasswordInput] = useState("");
	const [newPasswordInput, setNewPasswordInput] = useState("");
	const [repeatNewPasswordInput, setRepeatNewPasswordInput] = useState("");
	const { editType, currentUsername } = route.params;

	function handleReturn() {
		console.log("return");
		navigation.goBack();
	}

	async function handleChangeName() {
		console.log("change name to: " + profileInput);
		if (
			profileInput.length > 0 &&
			profileInput !== undefined &&
			profileInput !== null
		) {
			await changeUsername(profileInput).then(data => {
				console.log(data);
				if (data === true) {
					navigation.goBack();
				}
				// temporary code for testing until request is live on backend
				if (data === false) {
					navigation.goBack();
				}
			});
		}
	}

	function handleChangePassword() {
		console.log("change password");
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topArea}>
				<View style={styles.returnButton}>
					<TouchableWithoutFeedback onPress={handleReturn}>
						<MaterialIcon size={25} name="arrow-back" color="#000000" />
					</TouchableWithoutFeedback>
				</View>
				<Text style={styles.titleText}>
					{editType === "username" && "Naam wijzigen"}
					{editType === "password" && "Wachtwoord wijzigen"}
				</Text>
			</View>
			<View style={styles.mainArea}>
				{editType === "username" && (
					<View style={styles.editProfileContent}>
						<View>
							<Text style={styles.formLabel}>Naam</Text>
							<TextInput
								style={styles.formInput}
								onChangeText={setProfileInput}
								placeholder={currentUsername}
								value={profileInput}
							/>
						</View>
						<View
							style={[
								styles.buttonWrapper,
								{ width: Dimensions.get("window").width - 135 },
							]}>
							<RedirectButton
								text="Annuleren"
								maximumWidth={true}
								invert={true}
								handleOnPress={handleReturn}
							/>
							<RedirectButton
								text="Opslaan"
								maximumWidth={true}
								handleOnPress={handleChangeName}
							/>
						</View>
					</View>
				)}
				{editType === "password" && (
					<View style={styles.editProfileContent}>
						<View style={styles.formWrapper}>
							<View>
								<Text style={styles.formLabel}>Oud wachtwoord</Text>
								<TextInput
									style={styles.formInput}
									onChangeText={oldPasswordInput}
									secureTextEntry={true}
									value={setOldPasswordInput}
								/>
							</View>
							<View>
								<Text style={styles.formLabel}>Nieuw wachtwoord</Text>
								<TextInput
									style={styles.formInput}
									onChangeText={newPasswordInput}
									secureTextEntry={true}
									value={setNewPasswordInput}
								/>
							</View>
							<View>
								<Text style={styles.formLabel}>Herhaal nieuw wachtwoord</Text>
								<TextInput
									style={styles.formInput}
									onChangeText={repeatNewPasswordInput}
									secureTextEntry={true}
									value={setRepeatNewPasswordInput}
								/>
							</View>
						</View>
						<View
							style={[
								styles.buttonWrapper,
								{ width: Dimensions.get("window").width - 135 },
							]}>
							<RedirectButton
								text="Annuleren"
								maximumWidth={true}
								invert={true}
								handleOnPress={handleReturn}
							/>
							<RedirectButton
								text="Opslaan"
								maximumWidth={true}
								handleOnPress={handleChangePassword}
							/>
						</View>
					</View>
				)}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "F3F4F1",
	},

	topArea: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F3F4F1",
		marginTop: 20,
		marginBottom: 15,
	},

	mainArea: {
		height: "100%",
		backgroundColor: "white",
		paddingHorizontal: 18,
		paddingVertical: 34,
	},

	returnButton: {
		position: "absolute",
		left: 32,
	},

	titleText: {
		fontFamily: "Plus-Jakarta-Sans-Semi-Bold",
		fontSize: 18,
		lineHeight: 34,
		margin: 0,
	},

	formWrapper: {
		gap: 20,
	},

	formLabel: {
		fontFamily: "Plus-Jakarta-Sans-Regular",
		fontSize: 18,
	},

	formInput: {
		height: 48,
		width: "100%",
		borderWidth: 1,
		borderRadius: 78,
		borderColor: "#E0E0E0",
		backgroundColor: "white",
		paddingHorizontal: 20,
		paddingVertical: 14,
		marginTop: 6,
	},

	editProfileContent: {
		justifyContent: "space-between",
		height: "85%",
	},

	buttonWrapper: {
		flexDirection: "row",
		gap: 12,
	},
});
