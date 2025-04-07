import { combineReducers } from "redux";
import authenticationReducer from "./authenticationSlice";

const globalReducer = combineReducers({
  authentication: authenticationReducer,
});

export default globalReducer;
