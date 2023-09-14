import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reduce";

const store = configureStore({
  reducer: mainReducer,
});

export default store;
