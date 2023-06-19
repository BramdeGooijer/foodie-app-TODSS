import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FONTS } from "../../theme/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { IconButton, IconButtonCategorie } from "./buttonComponents";
import { MaterialIconButton } from "./buttonComponents";

export function CategorieAdComponent() {
    const navigation = useNavigation();

	return (
        <View style={categorieAdComponentStyles.container}>
            <Text style={categorieAdComponentStyles.ontdek}>Ontdek</Text>
            <Text style={categorieAdComponentStyles.categorie}>Categorieën</Text>

            <View style={categorieAdComponentStyles.buttonContainer}>
            <View style={categorieAdComponentStyles.buttonWrapper}>
                    <IconButtonCategorie
                        icon="rest"
                        text="Ontbijt"
                    />
                </View>
                <View style={categorieAdComponentStyles.buttonWrapper}>
                    <IconButtonCategorie
                        icon="rest"
                        text="Lunch"
                    />
                </View>
                <View style={categorieAdComponentStyles.buttonWrapper}>
                    <IconButtonCategorie
                        icon="rest"
                        text="Dinner"
                    />
                </View>
                <View style={categorieAdComponentStyles.buttonWrapper}>
                    <IconButtonCategorie
                        icon="rest"
                        text="Dessert"
                    />
                </View>
                <View style={categorieAdComponentStyles.buttonWrapper}>
                    <IconButtonCategorie
                        icon="rest"
                        text="Drankje"
                    />
                </View>
                <View style={categorieAdComponentStyles.buttonWrapper}>
                    <IconButtonCategorie
                        icon="rest"
                        text="Borrelhap"
                    />
                </View>
            </View>

            <TouchableOpacity
                style={categorieAdComponentStyles.redirectContainer}
                onPress={() => {
                    navigation.navigate("Recipes");
                }}
            >
                <Text style={categorieAdComponentStyles.redirectText}>Alle categorieën</Text>
                <Ionicons name="arrow-forward" size={20} color="white" />
            </TouchableOpacity>
        </View>
	);
}

const categorieAdComponentStyles = StyleSheet.create({
    container: {    
        width: "100%",
        height: 420,
        backgroundColor: "#294406",
    },
    ontdek: {
        color: "#FFFFFF",
        fontSize: 20,
        textAlign: "center",
        marginTop: 20,
        fontFamily: "Nexa-Rust-Script-Cursive",
    },
    categorie: {
        color: "#FBBA00",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: FONTS.Bold,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    buttonWrapper: {
        margin: 8, 
    },
    redirectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    redirectText: {
        color: 'white',
        fontSize: 16,
        fontFamily: FONTS.Bold,
        marginRight: 8,
    },
});
