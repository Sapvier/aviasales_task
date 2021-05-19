import {takeEvery, call, put} from 'redux-saga/effects'
import {FETCH_TICKETS_FETCHING} from "./types";
import {fetchTickets} from "../../api/fetch";
import {fetchTicketsFailed, fetchTicketsSuccess, saveTickets} from "./actions";


export function* onGetTickets(action) {
    try {
        const tickets = yield call(fetchTickets, action.payload)
        yield put(fetchTicketsSuccess())
        yield put(saveTickets(tickets))
    } catch (e) {
        yield put(fetchTicketsFailed())
    }
}


export default function* ticketsSaga() {
    yield takeEvery(FETCH_TICKETS_FETCHING, onGetTickets)
}