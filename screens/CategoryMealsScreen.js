import React, { version } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dumy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = ({ navigation }) => {
    const meals = useSelector((state) => state.meals.filteredMeals);
    const category = CATEGORIES.filter(
        (c) => c.id === navigation.getParam("categoryId")
    )[0];
    const displayedMeals = meals.filter(
        (meal) => meal.categoryIds.indexOf(category.id) >= 0
    );
    displayedMeals.map((d) => console.log(d.id));
    if (displayedMeals.length == 0) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <DefaultText>
                    No meal found, try after updating filters.
                </DefaultText>
            </View>
        );
    }
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
