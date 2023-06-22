import { useState } from "react";
import React, {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	Alert,
} from "react-native";
import {
	TextInput,
	TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { RedirectButton } from "../../components/globalComponents/buttonComponents";
import {
	createUserWithEmailAndPassword,
	loginWithEmailAndPassword,
} from "../../service/UserService";
import { useNavigation } from "@react-navigation/native";

export default function LoginPageOverlay() {
	const [usernameInput, setUsernameInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [createUser, setCreateUser] = useState(false);
	const navigation = useNavigation();

	async function handleLogin() {
		console.log("login");
		console.log(emailInput);
		console.log(passwordInput);
		if (
			emailInput !== null &&
			emailInput !== undefined &&
			passwordInput !== null &&
			passwordInput !== undefined &&
			emailInput.length > 0 &&
			passwordInput.length > 0
		) {
			await loginWithEmailAndPassword(emailInput, passwordInput).then(data => {
				if (data === true) {
					navigation.navigate("MainStack");
				}
			});
		}
	}

	async function handleCreateUser() {
		console.log("create user");
		console.log(usernameInput);
		console.log(emailInput);
		console.log(passwordInput);
		if (
			usernameInput !== null &&
			usernameInput !== undefined &&
			usernameInput.length > 0 &&
			emailInput !== null &&
			emailInput !== undefined &&
			emailInput.length > 0 &&
			passwordInput !== null &&
			passwordInput !== undefined &&
			passwordInput.length > 0
		) {
			await createUserWithEmailAndPassword(
				usernameInput,
				emailInput,
				passwordInput
			).then(data => {
				if (data === true) {
					Alert.alert("Je account is aangemaakt");
					setCreateUser(false);
				}
			});
		}
	}

	function handletoggleForm() {
		console.log("toggle form");
		setCreateUser(!createUser);
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentWrapper}>
				<View style={styles.titleArea}>
					<Text style={styles.welcomeText}>Welkom</Text>
					<Text style={styles.loginText}>
						{createUser === true ? "Registreren" : "Inloggen"}
					</Text>
				</View>
				<View style={styles.formArea}>
					{createUser === true && (
						<View>
							<Text style={styles.formLabel}>Gebruikersnaam</Text>
							<TextInput
								style={styles.formInput}
								onChangeText={setUsernameInput}
								value={usernameInput}
							/>
						</View>
					)}
					<View>
						<Text style={styles.formLabel}>
							{createUser === true
								? "E-mailadres"
								: "Gebruikersnaam of e-mailadres"}
						</Text>
						<TextInput
							style={styles.formInput}
							onChangeText={setEmailInput}
							textContentType="emailAddress"
							value={emailInput}
						/>
					</View>
					<View>
						<Text style={styles.formLabel}>Wachtwoord</Text>
						<TextInput
							style={styles.formInput}
							onChangeText={setPasswordInput}
							secureTextEntry={true}
							value={passwordInput}
						/>
						{createUser === false && (
							<View style={styles.forgotPasswordWrapper}>
								<Text
									style={[styles.greenUnderline, styles.forgotPasswordText]}>
									Wachtwoord vergeten?
								</Text>
							</View>
						)}
					</View>
				</View>
				<View style={styles.submitArea}>
					{createUser === true ? (
						<RedirectButton
							text="Registreren"
							handleOnPress={handleCreateUser}
						/>
					) : (
						<RedirectButton text="Inloggen" handleOnPress={handleLogin} />
					)}
					<Text style={styles.noAccountText}>
						{createUser === true
							? "Heb je al een account?"
							: "Nog geen account?"}
					</Text>
					<TouchableWithoutFeedback onPress={handletoggleForm}>
						<Text style={[styles.greenUnderline, styles.createUser]}>
							{createUser === true
								? "Log in met je account"
								: "Maak een account aan"}
						</Text>
					</TouchableWithoutFeedback>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	contentWrapper: {
		height: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 18,
		paddingTop: 122,
		paddingBottom: 52,
	},

	titleArea: {},

	welcomeText: {
		textAlign: "center",
		fontFamily: "Nexa-Rust-Script-Cursive",
		color: "#FBBA00",
		fontSize: 20,
	},

	loginText: {
		textAlign: "center",
		fontFamily: "Plus-Jakarta-Sans-Bold",
		fontSize: 28,
	},

	formArea: {
		width: "100%",
		gap: 26,
	},

	formLabel: {
		fontFamily: "Plus-Jakarta-Sans-Regular",
		fontSize: 18,
	},

	forgotPasswordWrapper: {
		marginTop: 6,
		alignSelf: "flex-end",
	},

	forgotPasswordText: {
		fontSize: 16,
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
	},

	submitArea: {
		alignItems: "center",
	},

	noAccountText: {
		marginTop: 29,
		fontFamily: "Plus-Jakarta-Sans-Regular",
		fontSize: 18,
	},

	createUser: {
		fontSize: 18,
	},

	greenUnderline: {
		marginTop: 8,
		fontFamily: "Plus-Jakarta-Sans-Regular",
		color: "#4C9E0B",
		textDecorationLine: "underline",
	},
});
