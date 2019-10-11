import { fromJS } from "immutable";
import { SET_PRODUCTS, SEARCH_PRODUCTS } from "../actions/products";

const initialState = fromJS({
  data: [],
  results: []
});
const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return state.set("data", fromJS(action.payload));
    case SEARCH_PRODUCTS:
      if (action.payload === "")
        return state.set("results", fromJS(state.get("data")));
      // eslint-disable-next-line no-case-declarations
      const filterData = state.get("data").filter(item => {
        if (item.get("category") === action.payload) {
          return item;
        }
      });

      return state.set("results", fromJS(filterData));
    default:
      return state;
  }
};

export default products;
