import React, {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FONTS } from "../theme/theme.js";
import { useState } from "react";

export default function Ingredients() {
	const [checkedItems, setCheckedItems] = useState([]);

	const data = [
		{
			id: "1",
			name: "Salmon Cakes",
			ingredients: ["salmon", "breadcrumbs", "seasonings", "tartar sauce"],
			neededItems: ["pan", "silverware", "knife", "oven"],
		},
	];

	const handleToggleCheck = ingredient => {
		if (checkedItems.includes(ingredient)) {
			setCheckedItems(checkedItems.filter(item => item !== ingredient));
		} else {
			setCheckedItems([...checkedItems, ingredient]);
		}
	};

	const renderItem = ({ item }) => {
		return (
			<View style={styles.item}>
				{item.ingredients.map((ingredient, index) => {
					const isChecked = checkedItems.includes(ingredient);
					return (
						<TouchableOpacity
							key={index}
							style={styles.checkboxContainer}
							onPress={() => handleToggleCheck(ingredient)}>
							<View
								style={[
									styles.checkbox,
									isChecked ? styles.checkboxChecked : null,
								]}>
								<FontAwesome
									size={28}
									name={isChecked ? "check" : "circle-o"}
									color={isChecked ? "#FBBA00" : "#FBBA00"}
								/>
							</View>
							<Text style={styles.checkboxLabel}>{ingredient}</Text>
						</TouchableOpacity>
					);
				})}
				<Text style={styles.neededTitle}>Benodigden:</Text>
				{item.neededItems.map((neededItem, index) => {
					const isChecked = checkedItems.includes(neededItem);
					return (
						<TouchableOpacity
							key={index}
							style={styles.checkboxContainer}
							onPress={() => handleToggleCheck(neededItem)}>
							<View
								style={[
									styles.checkbox,
									isChecked ? styles.checkboxChecked : null,
								]}>
								<FontAwesome
									size={28}
									name={isChecked ? "check" : "circle-o"}
									color={isChecked ? "#FBBA00" : "#FBBA00"}
								/>
							</View>
							<Text style={styles.checkboxLabel}>{neededItem}</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={item => item.id}
				extraData={checkedItems}
			/>
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
	},
	checkbox: {
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	neededTitle: {
		fontSize: 16,
		fontFamily: FONTS.Regular,
		fontWeight: "bold",
	},
});
