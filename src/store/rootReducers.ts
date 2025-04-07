import { combineReducers } from "redux";
import userReducers from "@/store/user/user.reducers";

export const rootReducers = combineReducers({
    user: userReducers,
}); 