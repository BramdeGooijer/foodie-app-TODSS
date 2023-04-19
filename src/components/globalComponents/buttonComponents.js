import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, View, Text } from "react-native";

export default function IconButton(props) {
    return (
        <View style={[styles.iconButtonContainer, props.text === undefined && styles.round]}>
            <MaterialIcon 
            size={24}
            name={props.icon}
            />
            {
                props.text !== null &&
                <Text style={styles.iconText}>{props.text}</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    iconButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        width: 173,
        height: 40,

        borderRadius: 9999999,
        backgroundColor: "white",
    },

    iconText: {
        fontSize: 16,
    },

    round: {
       aspectRatio: 1,
       width: 44,
       height: 44,
    },
});