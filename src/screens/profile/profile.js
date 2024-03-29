import React, { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { RedirectButton } from "../../components/globalComponents/buttonComponents";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function ProfileScreen() {
	const navigation = useNavigation();
	const [username, setUsername] = useState("Gerard Joling");

	function handleEditPassword() {
		console.log("edit password");
		navigation.navigate("EditProfileOverlay", { editType: "password" });
	}

	function handleEditUsername() {
		console.log("edit username");
		navigation.navigate("EditProfileOverlay", {
			editType: "username",
			currentUsername: username,
		});
	}

	function handleLogout() {
		console.log("logout");
		navigation.navigate("LoginPage");
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topArea}>
				<Text style={styles.pageTitle}>Profiel</Text>
			</View>
			<View style={styles.mainArea}>
				<Text style={styles.usernameText}>{username}</Text>
				<View style={styles.buttonWrapper}>
					<RedirectButton
						handleOnPress={handleEditPassword}
						text="Wachtwoord wijzigen"
						icon="edit"
					/>
					<RedirectButton
						handleOnPress={handleEditUsername}
						text="Naam wijzigen"
						icon="edit"
					/>
					<RedirectButton
						handleOnPress={handleLogout}
						text="Uitloggen"
						invert="true"
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
	},

	topArea: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		flex: 1,
	},

	mainArea: {
		flex: 8,
		justifyContent: "space-between",
		alignItems: "center",
	},

	pageTitle: {
		fontFamily: "Plus-Jakarta-Sans-Bold",
		fontSize: 18,
	},

	usernameText: {
		fontFamily: "Plus-Jakarta-Sans-Bold",
		fontSize: 28,
		marginTop: 60,
	},

	buttonWrapper: {
		gap: 10,
		marginBottom: 40,
	},
});
