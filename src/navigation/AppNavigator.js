import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppStack from "./AppStack";
function AppNavigator({ linking }) {
	return (
		<NavigationContainer linking={linking}>
			<AppStack />
		</NavigationContainer>
	);
}
export default AppNavigator;
