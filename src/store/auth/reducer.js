import {SIGN_IN, SIGN_OUT} from "./types";

const initialState = () => {
    if (JSON.parse(localStorage.getItem('isAuth')) === null) {
        return {isAuth: false}
    } else return JSON.parse(localStorage.getItem('isAuth'))
}


export const authReducer = (state = initialState(), action) => {
    switch (action.type) {
        default:
            return state
        case SIGN_IN: {
            return {...state, isAuth: true}
        }
        case SIGN_OUT: {
            return {...state, isAuth: false}
        }
    }
}