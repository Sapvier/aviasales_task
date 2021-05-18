import React, {useEffect} from 'react';
import {requestSearchId, requestTickets} from "../../api/fetch";
import {useDispatch, useSelector} from "react-redux";
import {saveSearchId, saveTickets} from "../../store/tickets/actions";
import Ticket from "../../components/Ticket/Ticket";
import {v4} from 'uuid';
import {ShowMoreButton, TicketsListContainer, TicketsListWrapper} from "./styled";
import Filter from "../../components/Filter/Filter";
import Tabs from "../../components/Tabs/Tabs";
import Logo from "../../assets/Logo.svg";
import {LogoWrapper} from "../../styles";


const TicketsList = () => {
    const dispatch = useDispatch()
    const tickets = useSelector(state => state.ticketsReducer.tickets).slice(0, 5)


    useEffect(() => {
        requestSearchId()
            .then(r => r.json())
            .then(result => {
                dispatch(saveSearchId(result))
                requestTickets(result.searchId).then(r => r.json()).then(tickets => dispatch(saveTickets(tickets))
                )
            })
    }, [])


    return (
        <>
            <LogoWrapper>
                <img src={Logo} height='60' width="60" alt="logo"/>
            </LogoWrapper>
            <TicketsListContainer>
                <Filter/>
                <TicketsListWrapper>
                    <Tabs/>
                    {tickets.map(ticket => <Ticket key={v4()} ticket={{...ticket, logo: `//pics.avs.io/99/36/${ticket.carrier}.png`}}/>)}
                    <ShowMoreButton>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</ShowMoreButton>
                </TicketsListWrapper>
            </TicketsListContainer>
        </>
    );
}


export default TicketsList


