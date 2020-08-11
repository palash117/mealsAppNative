import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";
import DefaultText from "../components/DefaultText";
import { toggleFavourite } from "../store/actions/meals";
import { useSelector, useDispatch } from "react-redux";

const MealDetailsScreen = (props) => {
    const mealId = props.navigation.getParam("mealId");

    const dispatch = useDispatch();

    const toggleFavouriteHandler = useCallback(() => {
        console.log("toggleFavouriteHandler clicked");
        dispatch(toggleFavourite(mealId));
    }, [mealId, dispatch]);

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavouriteHandler });
    }, [toggleFavouriteHandler]);

    const meals = useSelector((state) => state.meals.meals);

    const selectedMeal = meals.find((meal) => meal.id === mealId);

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
                <Text key={ingredient} style={styles.subTitle}>
                    {ingredient}
                </Text>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map((step) => (
                <Text key={step} style={styles.subTitle}>
                    {step}
                </Text>
            ))}
        </ScrollView>
    );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
    console.log("navigationsOptions called ");
    const mealTitle = navigationData.navigation.getParam("mealTitle");
    const toggleFav = navigationData.navigation.getParam("toggleFav");
    const isFavourite = navigationData.navigation.getParam("isfavourite");
    return {
        headerTitle: mealTitle,
        headerStyle: {
            backgroundColor: Colors.primary,
        },
        headerTintColor: "white",
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Favourite"
                    iconName={isFavourite ? "ios-star" : "ios-star-outline"}
                    onPress={() => {
                        console.log("favourited!");
                        navigationData.navigation.setParams({
                            isfavourite: !isFavourite,
                        });
                        toggleFav();
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
