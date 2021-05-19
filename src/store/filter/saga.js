import {takeEvery, put} from 'redux-saga/effects'
import {SET_CHECKED} from "./types";
import {filterArray} from "../../components/Filter";
import {saveSortedTickets} from "../tickets/actions";


export function* onGetChecked(action) {
    try {
        const filtered = filterArray(action.payload.id, action.payload.tickets)
        yield put(saveSortedTickets(filtered))
    } catch (e) {
        console.log(e)
    }
}

export default function* filterSaga() {
    yield takeEvery(SET_CHECKED, onGetChecked)
}