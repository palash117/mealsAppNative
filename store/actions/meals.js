import { TOGGLE_FAVOURITE, UPDATE_FILTERS } from "./actionTypes";

export const toggleFavourite = (mealId) => {
    console.log("meals actions toggleFavourite ", mealId);
    return { type: TOGGLE_FAVOURITE, payload: mealId };
};

export const filterMeals = (filters) => {
    console.log("meals actions filterMeals ", filters);
    return { type: UPDATE_FILTERS, payload: filters };
};
