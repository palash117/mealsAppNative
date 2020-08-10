import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import DefaultText from "./DefaultText";

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectedMeal}>
                <View style={styles.container}>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground
                            source={{ uri: props.image }}
                            style={styles.bgImage}
                        >
                            <Text style={styles.title} numberOfLines={1}>
                                {props.title}
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <DefaultText>{props.duration}m</DefaultText>
                        <DefaultText>
                            {props.complexity.toUpperCase()}
                        </DefaultText>
                        <DefaultText>
                            {props.affordablity.toUpperCase()}
                        </DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: "96%",
        backgroundColor: "#ccc",
        marginVertical: 5,
        borderRadius: 10,
        overflow: "hidden",
        marginHorizontal: "2%",
    },
    mealHeader: {
        height: "90%",
    },
    mealRow: {
        flexDirection: "row",
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: "space-between",
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        color: "white",
        backgroundColor: "rgba(0,0,0,0.5)",
        textAlign: "center",
    },
});
