import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice"; // getting our reducer from navSlice

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
