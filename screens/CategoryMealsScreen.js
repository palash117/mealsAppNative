import React, { version } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dumy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({ navigation }) => {
    const category = CATEGORIES.filter(
        (c) => c.id === navigation.getParam("categoryId")
    )[0];
    const displayedMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(category.id) >= 0
    );

    return <MealList meals={displayedMeals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const category = CATEGORIES.filter(
        (c) => c.id === navigationData.navigation.getParam("categoryId")
    )[0];
    return {
        headerTitle: category.title,
        headerStyle: {
            backgroundColor: category.color,
        },
        headerTintColor: "white",
    };
};
export default CategoryMealsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
