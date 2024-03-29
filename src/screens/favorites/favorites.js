import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	ScrollView,
	Animated,
	RefreshControl,
	TextInput,
} from "react-native";
import React from "react";
import { IconButton } from "../../components/globalComponents/buttonComponents";
import { FONTS } from "../../theme/theme";
import { useState, useEffect, useRef, useCallback } from "react";
import FilterItemsComponent from "../../components/recipeComponents/filterItemsComponent";
import RecipeItemComponent from "../../components/recipeComponents/recipeItemComponent";
import { getFavoriteRecipes } from "../../service/RecipeService";
import debounce from "lodash/debounce";
import { searchRecipe } from "../../service/RecipeService";
import { useIsFocused } from "@react-navigation/native";

export default function FavoritesScreen(props) {
	const [showSearchBar, setShowSearchBar] = useState(false);
	const [openFilter, setOpenFilter] = useState(false);
	const [recipeItems, setRecipeItems] = useState();
	const [refreshing, setRefreshing] = useState(false);
	const inputRef = useRef(null);
	const animatedValue = useRef(new Animated.Value(0)).current;
	const [inputValue, setInputValue] = useState("");
	const isFocused = useIsFocused();

	useEffect(() => {
		loadData();
		if (isFocused) {
			console.log("hi");
			loadData();
		}
	}, [isFocused]);

	const handleFilter = () => {
		setOpenFilter(!openFilter);
	};

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

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		loadData();
		setTimeout(() => {
			setRefreshing(false);
		}, 1000);
	}, []);

	async function loadData() {
		await getFavoriteRecipes(100, 0, "")
			.then(response => response.json())
			.then(data => {
				console.log(data.items);

				setRecipeItems(data.items);
			})
			.catch(error => {
				console.log(error);
			});
	}

	return (
		<SafeAreaView style={styles.pageContainer}>
			{openFilter && (
				<FilterItemsComponent
					style={styles.filterArea}
					toggleFilter={handleFilter}
				/>
			)}

			<View style={styles.topArea}>
				<Text style={styles.pageTitle}>Jouw favorieten</Text>
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
						{/* <FilterButtonComponent toggleFilter={handleFilter} /> */}
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
									liked={true}
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
