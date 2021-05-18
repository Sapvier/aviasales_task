import styled from 'styled-components'
import {defaultShadow, primaryBlue, primaryText, regular, secondaryGray} from "../../constants/constants";


export const Aside = styled.aside`
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const FiltersBox = styled.div`
  min-width: 232px;
  min-height: 252px;

  padding: 25px;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: ${defaultShadow};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & div {
    align-self: flex-start;
    margin: 0;
    font-size: 13px;
    font-weight: ${regular};
    color: ${primaryText}
  }

  & h5 {
    color: ${primaryText};
    font-size: 12px;
    text-align: left;
    margin: 0;
  }
`

export const CheckBox = styled.input`
  appearance: none;

  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 1px ${secondaryGray} solid;
  
  &:checked {    
    border: 1px ${primaryBlue} solid;
  }
  &:checked::after {
    background-color: darkred;
  }

  
`
