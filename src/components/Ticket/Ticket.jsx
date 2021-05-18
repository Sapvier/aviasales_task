import React from 'react';
import {Segment, SegmentItem, TicketHeader, TicketWrapper} from "./styled";
import {v4} from 'uuid';


const Ticket = ({ticket}) => {
        const price = (ticket.price + '').replace(/\B(?=(\d{3})+(?!\d))/g, " ")

        const getArrivalTime = (departure, duration) => {
            const departTime = new Date(departure)
            return new Date(departTime.setMinutes(departTime.getMinutes() + duration)).toTimeString().substr(0, 5)
        }

        const minutesConvert = (duration) => {
            const hours = (duration / 60);
            const rhours = Math.floor(duration / 60);
            const minutes = (hours - rhours) * 60;
            const rminutes = Math.round(minutes) < 10 ? '0' + Math.round(minutes) : Math.round(minutes);
            return rhours + ":" + rminutes;
        }


        return (
            <TicketWrapper>
                <TicketHeader>
                    <h2>{price} Р</h2>
                    <img src={ticket.logo} height='36' width="110" alt="carrier-logo"/>
                </TicketHeader>
                {ticket.segments.map(segment => (
                    <Segment key={v4()}>
                        <SegmentItem>
                            <h5>{segment.origin} - {segment.destination}</h5>
                            <p>{segment.date.substr(11, 5)} - {getArrivalTime(segment.date, segment.duration)}</p>
                        </SegmentItem>
                        <SegmentItem>
                            <h5>В ПУТИ</h5>
                            <p>{minutesConvert(segment.duration)}</p>
                        </SegmentItem>
                        <SegmentItem>
                            {segment.stops.length ?
                                <h5>{segment.stops.length} {segment.stops.length > 1 ? `ПЕРЕСАДКИ` : `ПЕРЕСАДКА`}</h5> : null}
                            <p>{segment.stops.join(', ')}</p>
                        </SegmentItem>
                    </Segment>
                ))}
            </TicketWrapper>
        );
    }
;


export default Ticket;
