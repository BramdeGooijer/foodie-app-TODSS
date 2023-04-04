import React, { View, Text, StyleSheet, Image } from "react-native";

export default function RecipeItemComponent() {
    return (
        <View style={styles.itemContainer}>
            <Image 
                style={styles.recipeImage}
                source={require('../../../assets/recipeImages/recipeTestImage.png')}
            />
            <View style={styles.recipeInfoWrapper}>
                <View style={styles.recipeInfo}>
                    <Text style={styles.recipeCategoryText}>Diner</Text>
                    <Text style={styles.recipeSubText}>Romige en eiwitrijke pasta met geroosterde groenten</Text>
                    <View style={styles.allergyIconWrapper}>
                        <Image 
                            style={styles.allergyIcon}
                            source={require('../../../assets/allergyIcons/allergyTestIcon.png')}
                        />
                        <Image 
                            style={styles.allergyIcon}
                            source={require('../../../assets/allergyIcons/allergyTestIcon.png')}
                        />
                        <Image 
                            style={styles.allergyIcon}
                            source={require('../../../assets/allergyIcons/allergyTestIcon.png')}
                        />
                    </View>
                </View>
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
    
    recipeInfo: {
        padding: 20,
        justifyContent: "space-between",
        height: "100%",
        // backgroundColor: "red"
    },

    recipeCategoryText: {
        fontFamily: "Plus-Jakarta-Sans-Bold",
        fontSize: "12px",
    },

    recipeSubText: {
        fontFamily: "Plus-Jakarta-Sans-Bold",
        fontSize: "16px",
        width: "45%",
        // backgroundColor: "yellow"
    },

    allergyIconWrapper: {
        flexDirection: "row",
    },

    allergyIcon: {
        width: 30,
        height: 30,
    },
});