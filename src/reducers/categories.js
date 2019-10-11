import { fromJS } from "immutable";
import { SET_PRODUCTS, SEARCH_PRODUCTS } from "../actions/products";

const initialState = fromJS({
  data: [],
  selectedCategory: ""
});
const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      // eslint-disable-next-line no-case-declarations
      let unique = [...new Set(action.payload.map(item => item.category))];
      return state.set("data", fromJS(unique));
    case SEARCH_PRODUCTS:
      return state.set("selectedCategory", fromJS(action.payload));

    default:
      return state;
  }
};

export default products;
