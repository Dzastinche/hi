import { createSlice } from "@reduxjs/toolkit";

let initialState = [];
export const recipe = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    getAllRecipes: (state, action) => {
      return action.payload;
    },
    changeRecipes: (state, action) => {
      state.values = action.payload;
    },
  },
});
export const cartBurgers = createSlice({
  name: "recipesForCart",
  initialState,
  reducers: {
    getRecipes: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { getAllRecipes, changeRecipes } = recipe.actions;
export const { getRecipes } = cartBurgers.actions;
