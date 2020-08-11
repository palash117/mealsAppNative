import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

const FavouritesScreen = ({ navigation }) => {
    const favouritedMeals = useSelector((state) => state.meals.favouritedMeals);
    console.log("favourites in favourites screen ", favouritedMeals);

    if (favouritedMeals.length === 0) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <DefaultText>
                    No meal found, try after favouriting some meals.
                </DefaultText>
            </View>
        );
    }
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
