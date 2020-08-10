import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Platform,
} from "react-native";
import { CATEGORIES } from "../data/dumy-data";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CategoryGridTile from "../components/CategoryGridTile";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const CategoriesScreen = ({ navigation }) => {
    const renderGridItem = (itemData) => {
        return <CategoryGridTile itemData={itemData} navigation={navigation} />;
    };
    return (
        // <View style={styles.screen}>
        //     <Text>The categories Screen!</Text>
        // </View>
        <FlatList
            numColumns={2}
            renderItem={renderGridItem}
            data={CATEGORIES}
        />
    );
};

CategoriesScreen.navigationOptions = (navigationData) => ({
    headerTitle: "Meal Categories",
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
});
export default CategoriesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
