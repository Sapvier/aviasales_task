import React, {useEffect, useState} from 'react';
import {requestSearchId, requestTickets} from "../../api/fetch";
import {useDispatch, useSelector} from "react-redux";
import {saveTickets} from "../../store/tickets/actions";


const TicketsList = () => {
    const [id, setId] = useState({})
    const dispatch = useDispatch()


    useEffect(() => {
        requestSearchId()
            .then(r => r.json())
            .then(result => {
                setId(result)
                requestTickets(result.searchId).then(r => r.json()).then(tickets => dispatch(saveTickets(tickets)))
            })

    }, [])


    return (
        <>
            {/*tickets.map(ticket => <Ticket />)*/}
        </>
    );
};


export default TicketsList;
