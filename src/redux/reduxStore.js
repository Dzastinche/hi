import { configureStore } from "@reduxjs/toolkit";
import { recipe } from "./reducers/reducers";

export const store = configureStore({
  reducer: { recipe: recipe.reducer },
});
