import React, { SafeAreaView, StyleSheet, Text, Button } from "react-native";

export default function EditProfileOverlay({ navigation, route }) {
	return (
		<SafeAreaView>
			<Text>overlay</Text>
			<Button onPress={navigation.goBack} title="Go Back"></Button>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
