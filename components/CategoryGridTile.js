import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback,
} from "react-native";
import { CATEGORIES } from "../data/dumy-data";
import { Colors } from "react-native/Libraries/NewAppScreen";

const CategoryGridTile = ({ itemData, navigation }) => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View
            style={{
                ...styles.gridItem,
                backgroundColor: itemData.item.color,
            }}
        >
            <TouchableCmp
                style={styles.touchableCmp}
                onPress={() => {
                    navigation.navigate("CategoryMeals", {
                        categoryId: itemData.item.id,
                    });
                }}
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{itemData.item.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        // borderWidth: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        overflow: "hidden",
    },
    titleContainer: {
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 10,
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 19,
    },
    touchableCmp: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 10,
        // textAlign: "center",
    },
});
