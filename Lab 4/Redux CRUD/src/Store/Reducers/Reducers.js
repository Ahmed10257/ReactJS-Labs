import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  product: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
