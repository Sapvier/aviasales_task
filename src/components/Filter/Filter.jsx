import React from 'react';
import {Aside, CheckBox, FiltersBox} from "./styled";


const Filter = () => {
    return (
        <Aside>
            <FiltersBox>
                <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
                <div>
                    <CheckBox type="checkbox" id="all-stops"/>
                    <label htmlFor="all-stops">Все</label>
                </div>
                <div>
                    <CheckBox type="checkbox" id="no-stops"/>
                    <label htmlFor="no-stops">Без пересадок</label>
                </div>
                <div>
                    <CheckBox type="checkbox" id="one-stop"/>
                    <label htmlFor="one-stop">1 пересадка</label>
                </div>
                <div>
                    <CheckBox type="checkbox" id="two-stops"/>
                    <label htmlFor="two-stops">2 пересадки</label>
                </div>
                <div>
                    <CheckBox type="checkbox" id="three-stops"/>
                    <label htmlFor="three-stops">3 пересадки</label>
                </div>
            </FiltersBox>
        </Aside>
    );
};

export default Filter;
