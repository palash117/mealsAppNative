import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { Switch } from "react-native-paper";
import { filterMeals } from "../store/actions/meals";
import { useDispatch } from "react-redux";

const FilterSwitch = (props) => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.title}</Text>
            <Switch
                value={props.value}
                onValueChange={(newValue) => props.setValue(newValue)}
                trackColor={{ false: Colors.ascent, true: Colors.primary }}
            ></Switch>
        </View>
    );
};
const FiltersScreen = (props) => {
    const dispatch = useDispatch();
    const [glutenFree, setglutenFree] = useState(false);
    const [vegan, setvegan] = useState(false);
    const [vegetarian, setvegetarian] = useState(false);
    const [lactoseFree, setlactoseFree] = useState(false);
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: glutenFree,
            vegan: vegan,
            vegetarian: vegetarian,
            lactoseFree: lactoseFree,
        };
        console.log(appliedFilters);
        dispatch(filterMeals(appliedFilters));
    }, [glutenFree, vegan, vegetarian, lactoseFree]);

    useEffect(() => {
        props.navigation.setParams({ save: saveFilters });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available filters</Text>
            <FilterSwitch
                title="Gluten Free"
                value={glutenFree}
                setValue={setglutenFree}
            ></FilterSwitch>
            <FilterSwitch
                title="Vegan"
                value={vegan}
                setValue={setvegan}
            ></FilterSwitch>
            <FilterSwitch
                title="Vegetarian"
                value={vegetarian}
                setValue={setvegetarian}
            ></FilterSwitch>
            <FilterSwitch
                title="Lactose free"
                value={lactoseFree}
                setValue={setlactoseFree}
            ></FilterSwitch>
        </View>
    );
};

export default FiltersScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
    filterContainer: {
        marginVertical: 10,
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: "open-sans-bold",
    },
});

FiltersScreen.navigationOptions = (navigationData) => ({
    headerTitle: "Filter Meals",
    headerStyle: {
        backgroundColor: Colors.primary,
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
    headerRight: (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title="Menu"
                iconName="ios-save"
                onPress={() => {
                    console.log("button pressed");
                    navigationData.navigation.getParam("save")();
                }}
            ></Item>
        </HeaderButtons>
    ),
});
