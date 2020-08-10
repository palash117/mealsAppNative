import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { MEALS } from "../data/dumy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";
import DefaultText from "../components/DefaultText";

const MealDetailsScreen = (props) => {
    const mealId = props.navigation.getParam("mealId");
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <ScrollView>
            <Image
                style={styles.image}
                source={{ uri: selectedMeal.imageUrl }}
            ></Image>
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>
                    {selectedMeal.complexity.toUpperCase()}
                </DefaultText>
                <DefaultText>
                    {selectedMeal.affordablity.toUpperCase()}
                </DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => (
                <Text style={styles.subTitle}>{ingredient}</Text>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map((step) => (
                <Text style={styles.subTitle}>{step}</Text>
            ))}
        </ScrollView>
    );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
    console.log("navigationsOptions called ");
    const mealId = navigationData.navigation.getParam("mealId");

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerStyle: {
            backgroundColor: Colors.primary,
        },
        headerTintColor: "white",
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Favourite"
                    iconName="ios-star"
                    onPress={() => {
                        console.log("favourited!");
                    }}
                ></Item>
            </HeaderButtons>
        ),
    };
};
export default MealDetailsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    image: {
        width: "100%",
        height: 200,
    },
    details: {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-around",
    },
    title: {
        fontFamily: "open-sans-bold",
        textAlign: "center",
    },
    subTitle: {
        textAlign: "center",
    },
});
