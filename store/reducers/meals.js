import { TOGGLE_FAVOURITE, UPDATE_FILTERS } from "../actions/actionTypes";

const { MEALS } = require("../../data/dumy-data");

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouritedMeals: [],
};
const mealsReducer = (state = initialState, action) => {
    console.log("meals reducer ", action);
    const { type, payload } = action;
    switch (type) {
        case TOGGLE_FAVOURITE:
            const existingIndex = state.favouritedMeals.findIndex(
                (meal) => meal.id == payload
            );
            if (existingIndex >= 0) {
                return {
                    ...state,
                    favouritedMeals: state.favouritedMeals.filter(
                        (meal) => meal.id != payload
                    ),
                };
            } else {
                let favMeal = state.meals.find((meal) => meal.id == payload);
                return {
                    ...state,
                    favouritedMeals: state.favouritedMeals.concat(favMeal),
                };
            }
        case UPDATE_FILTERS: {
            // glutenFree: glutenFree,
            // vegan: vegan,
            // vegetarian: vegetarian,
            // lactoseFree: lactoseFree,
            let filteredMeals = state.filteredMeals.filter((meal) => {
                if (payload.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (payload.vegan && !meal.isVegan) {
                    return false;
                }
                if (payload.vegetarian && !meal.isVegetarian) {
                    return false;
                }
                if (payload.lactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                return true;
            });
            return { ...state, filteredMeals: filteredMeals };
        }
        default:
            return state;
    }
    return state;
};

export default mealsReducer;
