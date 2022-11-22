import { combineReducers } from "redux";
import ProductReducers from "./Product";
import UserReducer from "./User";

const RootReducers = combineReducers({
    user:UserReducer,
    product:ProductReducers
})

export default RootReducers
