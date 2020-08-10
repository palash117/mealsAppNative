import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import { createAppContainer } from "react-navigation";
import Colors from "../constants/Colors";
import FavouritesScreen from "../screens/FavouritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";

const FavouritesScreenNavigator = createStackNavigator({
    Filter: FavouritesScreen,
});

const MealsNavigator = createStackNavigator(
    {
        // short form
        Categories: CategoriesScreen,

        // long form
        CategoryMeals: {
            screen: CategoryMealsScreen,
        },
        MealDatail: MealDetailsScreen,
    },
    {
        headerTitle: "Meal Categories",
        headerStyle: {
            backgroundColor: Colors.primary,
        },
        headerTintColor: "white",
    }
);
const tabScreenConfig = {
    Meal: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name="ios-restaurant"
                        size={25}
                        color={tabInfo.tintColor}
                    ></Ionicons>
                );
            },
            tabBarColor: Colors.primary,
        },
    },
    Fav: {
        screen: FavouritesScreenNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name="ios-star"
                        size={25}
                        color={tabInfo.tintColor}
                    ></Ionicons>
                );
            },
            tabBarColor: Colors.ascent,
        },
    },
};

const MealsFavTabNavigator =
    Platform.OS == "android"
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
              activeTintColor: Colors.ascent,
              shifting: true,
          })
        : createBottomTabNavigator(tabScreenConfig, {
              tabBarOptions: {
                  activeTintColor: Colors.ascent,
              },
          });

const FilterStackNavigator = createStackNavigator({
    Filter: FiltersScreen,
});

const mainNavigator = createDrawerNavigator({
    Meals: MealsFavTabNavigator,
    Filters: FilterStackNavigator,
});
export default createAppContainer(mainNavigator);
