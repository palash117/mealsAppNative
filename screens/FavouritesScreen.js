import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { MEALS } from "../data/dumy-data";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const FavouritesScreen = ({ navigation }) => {
    const favouritedMeals = MEALS.filter(
        (meal) => ["m1", "m2", "m3", "m5"].indexOf(meal.id) >= 0
    );
    return <MealList meals={favouritedMeals} navigation={navigation} />;
};

export default FavouritesScreen;

FavouritesScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: "Favourites",
        headerStyle: {
            backgroundColor: Colors.ascent,
        },
        headerTintColor: "white",
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navigationData.navigation.toggleDrawer();
                    }}
                ></Item>
            </HeaderButtons>
        ),
    };
};
