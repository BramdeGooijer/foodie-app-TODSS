import { useState } from "react";
import React, { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

export default function RecipeItemComponent(props) {
    const [liked, setLiked] = useState(props.liked);

    const handleLikeRecipe = () => {
        setLiked(!liked);
    }

    let recipeImage;

    switch(props.recipeImage) {
        case "recipeTestImage":
            recipeImage = require(`../../../assets/recipeImages/recipeTestImage.png`)
            break;
        case "recipeTestImageMarrokaans":
            recipeImage = require(`../../../assets/recipeImages/recipeTestImageMarrokaans.png`)
            break;
    }

    return (
        <View style={styles.itemContainer}>
            <Image 
                style={styles.recipeImage}
                source={recipeImage}
            />
            
            <Image
                id="lennaPlusIcon"
                style={[styles.lennaPlusIcon, {display: props.lennaPlus ? 'flex' : 'none'}]}
                source={require('../../../assets/lennaPlusTestIcon.png')}
            />

            <TouchableOpacity 
                onPress={handleLikeRecipe}
                style={styles.likedIconTouchable}
            >
                <Image 
                    style={styles.likedIcon}
                    source={ liked ? require('../../../assets/likedTestIcon.png') : require('../../../assets/unlikedTestIcon.png')}
                />
            </TouchableOpacity>

            <View style={styles.recipeInfoWrapper}>
                <View style={styles.recipeInfo}>
                    <Text style={styles.recipeCategoryText}>{props.category}</Text>
                    <Text style={styles.recipeSubText}>{props.subtext}</Text>
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

        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: "#F3F4F1",
    },

    recipeImage: {
        width: 133,
        height: 149,
        backgroundColor: "lightblue"
    },

    recipeInfoWrapper: {
        zIndex: 100,
    },
    
    lennaPlusIcon: {
        position: "absolute",
        top: 15,
        left: 15,
        // bottom: 20,
        // right: 20,
        height: 20,
        width: 60
    },

    likedIconTouchable: {
        position: "absolute",
        top: 15,
        right: 15,
        zIndex: 101,
    },
    
    likedIcon: {
        width: 23,
        height: 20,
    },

    recipeInfo: {
        padding: 20,
        justifyContent: "space-between",
        height: "100%",
        // backgroundColor: "red"
    },

    recipeCategoryText: {
        fontFamily: "Plus-Jakarta-Sans-Bold",
        fontSize: 12,
    },

    recipeSubText: {
        fontFamily: "Plus-Jakarta-Sans-Bold",
        fontSize: 16,
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