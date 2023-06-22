import {
	View,
	Text,
	TextInput,
	SafeAreaView,
	StyleSheet,
	RefreshControl,
	Animated,
} from "react-native";
import React from "react";
import RecipeItemComponent from "../../components/recipeComponents/recipeItemComponent";
import { FONTS } from "../../theme/theme.js";
import FilterItemsComponent from "../../components/recipeComponents/filterItemsComponent";
import { useEffect, useState, useRef, useCallback } from "react";
import debounce from "lodash/debounce";
import { getAllRecipes, getRecipe } from "../../service/RecipeService";
import { ScrollView } from "react-native-gesture-handler";
import { IconButton } from "../../components/globalComponents/buttonComponents";
import { searchRecipe } from "../../service/RecipeService";

export default function RecepiesScreen() {
	const [openFilter, setOpenFilter] = useState(false);
	const [recipeItems, setRecipeItems] = useState();
	const [refreshing, setRefreshing] = useState(false);

	const [showSearchBar, setShowSearchBar] = useState(false);
	const inputRef = useRef(null);
	const animatedValue = useRef(new Animated.Value(0)).current;
	const [inputValue, setInputValue] = useState("");

	async function handleInputSubmit(text) {
		await searchRecipe(text, 0, "")
			.then(response => response.json())
			.then(data => {
				console.log(data.items);

				setRecipeItems(data.items);
			})
			.catch(error => {
				console.log(error);
			});
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedHandleInputSubmit = useCallback(
		debounce(text => {
			handleInputSubmit(text);
		}, 500),
		[]
	);

	const handleInputChange = useCallback(
		text => {
			setInputValue(text);
			clearTimeout(debouncedHandleInputSubmit.timerId);
			debouncedHandleInputSubmit.timerId = setTimeout(() => {
				debouncedHandleInputSubmit(text);
			}, 500);
		},
		[debouncedHandleInputSubmit]
	);

	const handleButtonClick = () => {
		setShowSearchBar(true);
		Animated.timing(animatedValue, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
		}).start(() => inputRef.current.focus());
	};

	const handleInputBlur = () => {
		setShowSearchBar(false);
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true,
		}).start();
	};

	const [showText, setShowText] = useState(true);

	useEffect(() => {
		loadData();
	}, []);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		loadData();
		setTimeout(() => {
			setRefreshing(false);
		}, 1000);
	}, []);

	async function loadData() {
		await getAllRecipes(100, 0, "")
			.then(response => response.json())
			.then(data => {
				console.log(data.items);

				setRecipeItems(data.items);
			})
			.catch(error => {
				console.log(error);
			});
	}

	const handleFilter = () => {
		setOpenFilter(!openFilter);
	};

	return (
		<SafeAreaView style={styles.pageContainer}>
			{openFilter && (
				<FilterItemsComponent
					style={styles.filterArea}
					toggleFilter={handleFilter}
				/>
			)}

			<View style={styles.topArea}>
				<Text style={styles.pageTitle}>Alle plantaardige recepten</Text>
				<View style={styles.buttonWrapper}>
					<View style={styles.buttonItem1}>
						{!showSearchBar && (
							<IconButton
								icon="search1"
								text="zoeken"
								handleOnPress={handleButtonClick}
							/>
						)}
						{showSearchBar && (
							<Animated.View style={styles.inputContainer}>
								<TextInput
									ref={inputRef}
									style={styles.input}
									placeholder="zoeken..."
									autoComplete={"off"}
									onBlur={handleInputBlur}
									autoFocus={true}
									onChangeText={handleInputChange}
									value={inputValue}
								/>
							</Animated.View>
						)}
					</View>
					<View style={styles.buttonItem2}>
						<IconButton
							icon="filter"
							text="Filter"
							handleOnPress={handleFilter}
						/>
					</View>
				</View>
			</View>

			<View style={styles.mainArea}>
				<Text style={styles.amountOfRecipesText}>
					{recipeItems !== undefined ? recipeItems.length : 0} resultaten
				</Text>
				<ScrollView
					style={styles.recipeList}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}>
					{recipeItems !== undefined &&
						recipeItems.map(item => {
							return (
								<RecipeItemComponent
									key={item.id}
									id={item.id}
									liked={false}
									lennaplus={item.plusRecipe}
									recipeImage="recipeTestImage"
									category={item.categories[0]}
									subtext={item.name}
									allergies={["gluten"]}
								/>
							);
						})}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	// Page container
	pageContainer: {
		width: "100%",
		height: "100%",

		backgroundColor: "#F3F4F1",
	},

	// Page areas
	topArea: {
		flex: 1,
		minHeight: "0%",

		alignItems: "center",
		justifyContent: "space-evenly",
		// backgroundColor: "blue",
	},

	mainArea: {
		flex: 5,

		paddingTop: 20,
		paddingRight: 20,
		paddingLeft: 20,

		backgroundColor: "white",
	},

	// Styling for top area items
	pageTitle: {
		// flex: 1,

		fontSize: 18,
		fontWeight: 700,
		fontFamily: FONTS.bold,
	},

	buttonWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 8,

		maxWidth: "90%",
		width: "90%",

		zIndex: 102,
	},

	buttonItem1: {
		flex: 1,
		// backgroundColor: "blue",
	},
	buttonItem2: {
		flex: 1,
		// backgroundColor: "blue",
	},

	// Styling for main area items
	amountOfRecipesText: {
		fontSize: 16,
		fontFamily: FONTS.SemiBold,

		marginBottom: 15,
	},

	recipeList: {
		// borderWidth: 2,
		// borderColor: "yellow",
	},

	// Search bar
	input: {
		fontSize: 16,
		backgroundColor: "white",
		width: 173,
		borderRadius: 70,

		height: 40,

		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 24,
		paddingRight: 24,

		shadowColor: "black",
		shadowOpacity: 0.05,
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowRadius: 6,
	},
});
