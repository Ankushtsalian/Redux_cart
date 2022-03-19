import { combineReducers } from "redux";
import { cartReducer, Reducer } from "./Reducer";
const rootReducer = combineReducers({
  Reducer: Reducer,
  cartReducer: cartReducer,
});
export default rootReducer;
