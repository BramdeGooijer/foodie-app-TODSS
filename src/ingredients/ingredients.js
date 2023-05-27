import React, { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FONTS } from "../theme/theme.js";
import { useState } from "react";

export default function IngredientsComponent(props) {
	const [checkedItems, setCheckedItems] = useState([]);
	const [ingredients, setIngredients] = useState(props.ingredients);
	const [requirements, setRequirements] = useState(props.requirements);

	const handleToggleCheck = ingredient => {
		if (checkedItems.includes(ingredient)) {
			setCheckedItems(checkedItems.filter(item => item !== ingredient));
		} else {
			setCheckedItems([...checkedItems, ingredient]);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.item}>
				{ingredients.map((ingredient, index) => {
					const isChecked = checkedItems.includes(ingredient.ingredientName);
					return (
						<TouchableOpacity
							key={index}
							style={styles.checkboxContainer}
							onPress={() => handleToggleCheck(ingredient.ingredientName)}>
							<View
								style={[
									styles.checkbox,
									isChecked ? styles.checkboxChecked : null,
								]}>
								<FontAwesome
									size={28}
									name={isChecked ? "check" : "circle-o"}
									color="#FBBA00"
								/>
							</View>
							<Text
								style={[
									styles.checkboxLabel,
									isChecked ? styles.checkboxLabelChecked : null,
								]}>
								{ingredient.amount} {ingredient.ingredientName}
							</Text>
						</TouchableOpacity>
					);
				})}
				<Text style={styles.neededTitle}>Benodigden:</Text>
				{requirements.map((neededItem, index) => {
					const isChecked = checkedItems.includes(neededItem.name);
					return (
						<TouchableOpacity
							key={index}
							style={styles.checkboxContainer}
							onPress={() => handleToggleCheck(neededItem.name)}>
							<View
								style={[
									styles.checkbox,
									isChecked ? styles.checkboxChecked : null,
								]}>
								<FontAwesome
									size={28}
									name={isChecked ? "check" : "circle-o"}
									color="#FBBA00"
								/>
							</View>
							<Text
								style={[
									styles.checkboxLabel,
									isChecked ? styles.checkboxLabelChecked : null,
								]}>
								{neededItem.name}
							</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	item: {
		marginBottom: 20,
	},
	itemName: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	checkboxContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 5,
	},
	checkboxLabel: {
		fontSize: 16,
		marginRight: 5,
		opacity: 1, // Initial opacity of 1 (fully visible)
		textDecorationLine: "none",
	},
	checkboxLabelChecked: {
		opacity: 0.5, // Opacity of 0.5 (slightly opaque)
		textDecorationLine: "line-through", // Strikethrough text
	},
	checkbox: {
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	neededTitle: {
		fontSize: 16,
		fontFamily: FONTS.Bold,
	},
});
