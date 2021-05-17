import {SAVE_TICKETS} from "./types";

const initialState = () => ({
    tickets: [],
    stop: false
})


export const ticketsReducer = (state = initialState(), action) => {
    switch (action.type) {
        default:
            return state
        case SAVE_TICKETS: {
            return {...state, tickets: [...action.payload.tickets], stop: action.payload.stop}
        }
    }
}