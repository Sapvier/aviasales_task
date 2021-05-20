import React, {useCallback, useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
//components
import TicketsList from "../../containers/TicketsList/TicketsList";
//styles
import {Page} from "../styled";
//utils
import {fetchTicketsLoading} from "../../store/tickets/actions";
import {fetchIdLoading} from "../../store/auth/actions";
import {sortArray} from "../../components/Tabs";



const TicketsPage = () => {
    const [sorted, setSorted] = useState([])
    const dispatch = useDispatch()
    const tickets = useSelector(state => state.ticketsReducer.tickets).slice(0, 5)
    const searchId = useSelector(state => state.ticketsReducer.searchId)
    const fetchStatus = useSelector(state => state.ticketsReducer.fetchStatus)
    const stableDispatch = useCallback(
        dispatch, [],
    );

    useEffect(() => {
        stableDispatch(fetchIdLoading())
    }, [stableDispatch])

    useEffect(() => {
        stableDispatch(fetchTicketsLoading(searchId))
    }, [searchId]);

    useEffect(() => {
        if(fetchStatus === 'success') {
            setSorted(sortArray('price', tickets))
        }
    }, [fetchStatus])


    return (
        <Page>
            <TicketsList tickets={tickets}/>
        </Page>
    );
}


export default TicketsPage;
