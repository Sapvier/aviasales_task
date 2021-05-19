import {
    FETCH_TICKETS_FAIL,
    FETCH_TICKETS_FETCHING,
    FETCH_TICKETS_SUCCESS,
    SAVE_ID,
    SAVE_SORTED_TICKETS,
    SAVE_TICKETS
} from "./types";

export const saveTickets = (payload) => ({
    type: SAVE_TICKETS, payload
})
export const saveSortedTickets = (payload) => ({
    type: SAVE_SORTED_TICKETS, payload
})
export const saveSearchId = (payload) => ({
    type: SAVE_ID, payload
})

export const fetchTicketsLoading = (payload) => ({
    type: FETCH_TICKETS_FETCHING, payload
})

export const fetchTicketsFailed = () => ({
    type: FETCH_TICKETS_FAIL
})
export const fetchTicketsSuccess = () => ({
    type: FETCH_TICKETS_SUCCESS
})