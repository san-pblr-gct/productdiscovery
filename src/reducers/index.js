import { combineReducers } from "redux-immutable";
import products from "./products";
import categories from "./categories";
const createRootReducer = () =>
  combineReducers({
    products,
    categories
  });

export default createRootReducer;
