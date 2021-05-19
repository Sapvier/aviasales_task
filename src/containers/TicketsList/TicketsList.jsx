import React, {useState} from 'react';
import {v4} from 'uuid';
//components
import Filter from "../../components/Filter/Filter";
import Tabs from "../../components/Tabs/Tabs";
import Ticket from "../../components/Ticket/Ticket";
//styles
import {LogoWrapper} from "../../styles";
import {ShowMoreButton, TicketsListContainer, TicketsListWrapper} from "./styled";
//assets
import Logo from "../../assets/Logo.svg";
import {useSelector} from "react-redux";


const TicketsList = ({tickets}) => {
    const fetchStatus = useSelector(state => state.ticketsReducer.fetchStatus)

    return (
        <>
            <LogoWrapper>
                <img src={Logo} height='60' width='60' alt="logo"/>
            </LogoWrapper>
            <TicketsListContainer>
                <Filter/>
                <TicketsListWrapper>
                    <Tabs/>
                    {fetchStatus === 'fetching' ? <h3>Loading...</h3>
                        : <>
                            {tickets.map(ticket => <Ticket key={v4()} ticket={{
                                ...ticket,
                                logo: `//pics.avs.io/99/36/${ticket.carrier}.png`
                            }}/>)}
                            <ShowMoreButton>Показать еще 5 билетов!</ShowMoreButton>
                        </>
                    }
                </TicketsListWrapper>
            </TicketsListContainer>
        </>
    );
}


export default TicketsList


