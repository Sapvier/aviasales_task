import React, {useState} from 'react';
import {TabsWrapper} from "./styled";
import {sortArray} from "./index";
import {useSelector, useDispatch} from "react-redux";
import {saveSortedTickets} from "../../store/tickets/actions";

const Tabs = () => {
    const tickets = useSelector(state => state.ticketsReducer.tickets).slice(0, 5)
    const dispatch = useDispatch()
    const [tabs, setTabs] = useState(
        [
            {text: `Самый дешевый`, isActive: false, sort: "price"},
            {text: `Самый быстрый`, isActive: false, sort: "speed"},
            {text: `Оптимальный`, isActive: false, sort: "optimal"},
        ]
    )

    const clickHandler = (sort) => {
        setTabs(tabs.map(tab => tab.sort === sort ? {...tab, isActive: true}
            : {...tab, isActive: false}
        ))
        const sorted = sortArray(sort, tickets)
        dispatch(saveSortedTickets(sorted))
    }

    return (
        <TabsWrapper>
            {tabs.map((tab, i) => <div onClick={() => clickHandler(tab.sort)} data-active={tab.isActive} key={i}>{tab.text}</div>)}
        </TabsWrapper>
    );
};


export default Tabs;
