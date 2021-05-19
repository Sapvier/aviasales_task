import React, {useCallback, useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
//components
import TicketsList from "../../containers/TicketsList/TicketsList";
//styles
import {Page} from "../styled";
//utils
import {fetchTicketsLoading} from "../../store/tickets/actions";
import {fetchIdLoading} from "../../store/auth/actions";


const TicketsPage = () => {
    const dispatch = useDispatch()
    const tickets = useSelector(state => state.ticketsReducer.tickets).slice(0, 5)
    const searchId = useSelector(state => state.ticketsReducer.searchId)
    const stableDispatch = useCallback(
        dispatch, [],
    );

    useEffect(() => {
        stableDispatch(fetchIdLoading())
    }, [stableDispatch])

    useEffect(() => {
        stableDispatch(fetchTicketsLoading(searchId))
    }, [searchId]);


    return (
        <Page>
            <TicketsList tickets={tickets}/>
        </Page>
    );
}


export default TicketsPage;
