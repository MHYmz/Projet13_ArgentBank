import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalReducer";

const appStore = configureStore({
  reducer: globalReducer,
});

export default appStore;
