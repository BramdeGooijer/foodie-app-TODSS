import React, { Text, SafeAreaView } from "react-native";
import { CategorieAdComponent } from "../../components/globalComponents/catergorieAdComponent";

export default function DashboardScreen() {
	return (
		<SafeAreaView>
			<Text>Ontdek</Text>

			<Text>Hier komt de "ontdek" pagina</Text>

			<CategorieAdComponent />
		</SafeAreaView>
	);
}
