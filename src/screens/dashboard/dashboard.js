import React, { Text, SafeAreaView } from "react-native";
import ButtonComponents from "../../../src/components/redirectComponent/redirectButtons.js";

export default function DashboardScreen() {
	return (
		<SafeAreaView>
			<Text>Ontdek</Text>

			<Text>Hier komt de "ontdek" pagina</Text>
			<ButtonComponents />
		</SafeAreaView>
	);
}
