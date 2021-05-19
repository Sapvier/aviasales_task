import {
    FETCH_ID_FAIL,
    FETCH_ID_FETCHING,
    FETCH_ID_SUCCESS,
    SIGN_IN, SIGN_OUT
} from "./types";


export const signIn = () => (
    {type: SIGN_IN}
)
export const signOut = () => (
    {type: SIGN_OUT}
)
export const fetchIdLoading = () => ({
    type: FETCH_ID_FETCHING
})

export const fetchIdFailed = () => ({
    type: FETCH_ID_FAIL
})
export const fetchIdSuccess = () => ({
    type: FETCH_ID_SUCCESS
})


