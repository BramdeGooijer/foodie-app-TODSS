import React, { View, Text, StyleSheet, Image } from "react-native";

export default function RecipeItemComponent() {
    return (
        <View style={styles.itemContainer}>
            <Image 
                style={styles.recipeImage}
                source={require('../../../assets/recipeImages/recipeTestImage.png')}
            />
            <View style={styles.recipeInfoWrapper}>
                <Text>Romige en eiwitrijke pasta met geroosterde groenten</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        width: "100%",
        height: 149,

        marginBottom: 20,

        backgroundColor: "#F3F4F1",
    },

    recipeImage: {
        width: 133,
        height: 149,
        backgroundColor: "lightblue"
    },

    recipeInfoWrapper: {

    },
});