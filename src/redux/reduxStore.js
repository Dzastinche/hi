import { configureStore } from "@reduxjs/toolkit";
import { recipe, cartBurgers } from "./reducers/reducers";

export const store = configureStore({
  reducer: { recipe: recipe.reducer, cartBurgers: cartBurgers.reducer },
});
