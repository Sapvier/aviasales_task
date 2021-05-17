import {combineReducers} from "redux"
import {authReducer} from "./auth/reducer";
import {ticketsReducer} from "./tickets/reducer";

export const rootReducer = combineReducers({
    authReducer, ticketsReducer
})