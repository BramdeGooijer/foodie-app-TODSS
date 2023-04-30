import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DashboardScreen from "../screens/dashboard/dashboard";
import RecipesScreen from "../screens/recipes/recipes";
import FavoritesScreen from "../screens/favorites/favorites";
import ProfileScreen from "../screens/profile/profile";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import theme from "../theme";
import RecipeInfoOverlay from "../screens/recipes/recipeInfoOverlay";
import Icon from "react-native-vector-icons/MaterialIcons";

// tabs
const Tab = createBottomTabNavigator();

// stacks
const DashboardStack = createStackNavigator();
const RecipesStack = createStackNavigator();
const FavoritesStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const defaultOptions = {
	headerShown: false,
	// 	cardStyle: { backgroundColor: theme.background },
};

const BackButton = ({ navigation }) => {
	const onPress = () => navigation.goBack();

	return <Icon name="arrow-back" onPress={onPress} />;
};

function MainTabs() {
	return (
		<Tab.Navigator
			screenOptions={{
				labelPosition: "below-icon",
				tabBarInactiveTintColor: "black",
				tabBarActiveTintColor: theme.colors.success,
				tabBarLabelStyle: {
					fontSize: 16,
				},
				tabBarStyle: {
					borderTopColor: "#D9D9D9",
					height: 92,
					paddingTop: 8,
				},
			}}>
			<Tab.Screen
				name="Dashboard"
				component={DashboardStackScreen}
				options={{
					...defaultOptions,
					tabBarLabel: "Ontdek",
					// eslint-disable-next-line react/no-unstable-nested-components
					tabBarIcon: ({ focused }) => {
						return (
							<MaterialIcon
								size={22}
								name="home"
								color={focused && theme.colors.success}
							/>
						);
					},
				}}
			/>
			<Tab.Screen
				name="Recipes"
				component={RecipesStackScreen}
				options={{
					...defaultOptions,
					tabBarLabel: "Recepten",
					// eslint-disable-next-line react/no-unstable-nested-components
					tabBarIcon: ({ focused }) => {
						return (
							<MaterialIcon
								size={22}
								// style={{ height: 48 }}
								name="menu-book"
								color={focused && theme.colors.success}
							/>
						);
					},
				}}
			/>
			<Tab.Screen
				name="Favorites"
				component={FavoritesStackScreen}
				options={{
					...defaultOptions,
					tabBarLabel: "Favorieten",
					// eslint-disable-next-line react/no-unstable-nested-components
					tabBarIcon: ({ focused }) => {
						return (
							<MaterialIcon
								size={24}
								name="favorite-outline"
								color={focused && theme.colors.success}
							/>
						);
					},
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileStackScreen}
				options={{
					...defaultOptions,
					tabBarLabel: "Profiel",
					// eslint-disable-next-line react/no-unstable-nested-components
					tabBarIcon: ({ focused }) => {
						return (
							<MaterialIcon
								size={24}
								name="person-outline"
								color={focused && theme.colors.success}
							/>
						);
					},
				}}
			/>
		</Tab.Navigator>
	);
}

function DashboardStackScreen() {
	return (
		<DashboardStack.Navigator initialRouteName="Dashboard">
			<DashboardStack.Screen
				name="DashboardStack"
				component={DashboardScreen}
				options={{ ...defaultOptions }}
			/>
		</DashboardStack.Navigator>
	);
}
function RecipesStackScreen() {
	return (
		<RecipesStack.Navigator initialRouteName="Recipes">
			<RecipesStack.Screen
				name="RecipesStack"
				component={RecipesScreen}
				options={{ ...defaultOptions }}
			/>
		</RecipesStack.Navigator>
	);
}
function FavoritesStackScreen() {
	return (
		<FavoritesStack.Navigator initialRouteName="Favorites">
			<FavoritesStack.Screen
				name="FavoritesStack"
				component={FavoritesScreen}
				options={{ ...defaultOptions }}
			/>
		</FavoritesStack.Navigator>
	);
}
function ProfileStackScreen() {
	return (
		<ProfileStack.Navigator initialRouteName="Profile">
			<ProfileStack.Screen
				name="ProfileStack"
				component={ProfileScreen}
				options={{ ...defaultOptions }}
			/>
		</ProfileStack.Navigator>
	);
}
function MainStackScreen() {
	return (
		<MainStack.Navigator>
			<MainStack.Screen
				name="Main"
				component={MainTabs}
				options={{ ...defaultOptions }}
			/>
		</MainStack.Navigator>
	);
}

export default function AppStack() {
	return (
		<RootStack.Navigator initialRouteName="MainStack" presentation="modal">
			<RootStack.Screen
				name="MainStack"
				component={MainStackScreen}
				options={{ ...defaultOptions }}
			/>
			<RootStack.Screen
				name="RecipeInfoOverlay"
				component={RecipeInfoOverlay}
				options={({ navigation }) => ({
					headerShown: false,
				})}
			/>
		</RootStack.Navigator>
	);
}
