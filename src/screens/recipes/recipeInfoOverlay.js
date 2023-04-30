import { SafeAreaView, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RecipeInfoOverlay({navigation}) {

	return (
		<SafeAreaView>
			<Button title="go back" onPress={() => navigation.goBack()}></Button>
			<View>
				<Text>Recipe info overlay</Text>
			</View>
		</SafeAreaView>
	);
}
