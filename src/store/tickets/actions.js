import {SAVE_ID, SAVE_TICKETS} from "./types";

export const saveTickets = (payload) => ({
    type: SAVE_TICKETS, payload
})
export const saveSearchId = (id) => ({
    type: SAVE_ID, payload: id
})