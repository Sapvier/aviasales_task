import {FETCH_ID_FAIL, FETCH_ID_FETCHING, FETCH_ID_SUCCESS, SIGN_IN, SIGN_OUT} from "./types";


const initialState = () => {
    const localStore = JSON.parse(localStorage.getItem('isAuth')) === null ? false
        : JSON.parse(localStorage.getItem('isAuth'))

    return {
        isAuth: localStore,
        fetchStatus: 'idle'
    }
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
        case FETCH_ID_FETCHING: {
            return {...state, fetchStatus: 'fetching'}
        }
        case FETCH_ID_SUCCESS: {
            return {...state, fetchStatus: 'success'}
        }
        case FETCH_ID_FAIL: {
            return {...state, fetchStatus: 'fail'}
        }
    }
}