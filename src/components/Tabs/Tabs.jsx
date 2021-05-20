import React from 'react';
import {TabsWrapper} from "./styled";
import {useSelector, useDispatch} from "react-redux";
import {setSorted} from "../../store/sort/actions";

const Tabs = () => {
    const tickets = useSelector(state => state.ticketsReducer.slicedTickets)
    const tabs = useSelector(state => state.sortReducer)
    const dispatch = useDispatch()


    const clickHandler = (id) => {
        dispatch(setSorted({id, tabs, tickets}))
    }

    return (
        <TabsWrapper>
            {tabs.map((tab, i) => <div
                onClick={() => clickHandler(tab.sort)}
                data-active={tab.isActive}
                key={i}>{tab.text}
            </div>)}
        </TabsWrapper>
    );
};


export default Tabs;
