import React from 'react';
import {Aside, CheckBox, FiltersBox} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {setChecked} from "../../store/filter/actions";


const Filter = () => {
    const tickets = useSelector(state => state.ticketsReducer.tickets).slice(0, 5)
    const checkboxes = useSelector(state => state.filterReducer)
    const dispatch = useDispatch()

    const changeHandler = (id) => {
        dispatch(setChecked({id, checkboxes, tickets}))
    }


    return (
        <Aside>
            <FiltersBox>
                <h5>Количество пересадок</h5>
                {checkboxes.map(checkbox => (
                    <div key={checkbox.id}>
                        <CheckBox type="checkbox" id={checkbox.id} checked={checkbox.isActive} onChange={() => null}/>
                        <label htmlFor={checkbox.id} onClick={() => changeHandler(checkbox.id)}>{checkbox.text}</label>
                    </div>
                ))}
            </FiltersBox>
        </Aside>
    );
};

export default Filter;
