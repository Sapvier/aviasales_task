import {SAVE_ID, SAVE_TICKETS} from "./types";

const initialState = () => ({
    tickets: [],
    stop: false,
    searchId: null
})


export const ticketsReducer = (state = initialState(), action) => {
    switch (action.type) {
        default:
            return state
        case SAVE_TICKETS: {
            return {...state, tickets: [...action.payload.tickets], stop: action.payload.stop}
        }
        case SAVE_ID: {
            return {...state, searchId: action.payload.searchId}
        }
    }
}