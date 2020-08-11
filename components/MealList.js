import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";

const MealList = (props) => {
    const favouriteMeals = useSelector((state) => state.meals.favouritedMeals);
    const renderMealItem = (itemData) => {
        return (
            <MealItem
                title={itemData.item.title}
                onSelectedMeal={() => {
                    props.navigation.navigate("MealDatail", {
                        mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isfavourite:
                            favouriteMeals.findIndex(
                                (m) => m.id == itemData.item.id
                            ) >= 0
                                ? true
                                : false,
                    });
                }}
                navigation={props.navigation}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordablity={itemData.item.affordablity}
                image={itemData.item.imageUrl}
            ></MealItem>
        );
    };
    return (
        <View style={styles.screen}>
            <FlatList
                data={props.meals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: "100%" }}
            />
        </View>
    );
};

export default MealList;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
