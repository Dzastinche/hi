import { createSlice } from "@reduxjs/toolkit";

let initialState = [];
export const recipe = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    getRecipes: (state, action) => {
      return action.payload;
    },
    changeRecipes: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const { getRecipes, changeRecipes } = recipe.actions;
