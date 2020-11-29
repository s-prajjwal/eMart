import { combineReducers } from "redux";
import beerReducer from "./beerReducer";
const createRootReducer = () =>
  combineReducers({
    beerReducer,
  });

export default createRootReducer;
