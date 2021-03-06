import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealsNavigator from "./navigation/MealsNavigator";
import { enableScreens } from "react-native-screens";
import mealsReducer from "./store/reducers/meals";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

enableScreens();

const store = createStore(combineReducers({ meals: mealsReducer }));
const fetchFonts = () => {
    Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
};

export default function App() {
    const [fontLoaded, setfontLoaded] = useState(false);
    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => {
                    setTimeout(() => {
                        setfontLoaded(true);
                    }, 1000);
                }}
            ></AppLoading>
        );
    }
    return (
        <Provider store={store}>
            <MealsNavigator></MealsNavigator>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
