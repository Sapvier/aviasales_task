import styled from 'styled-components'
import {defaultShadow, hoverBlue, primaryBlue, primaryText, regular, secondaryGray} from "../../constants";


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
  padding: 20px 0 10px 0;

  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: ${defaultShadow};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & div {
    width: 100%;
    height: 40px;
    padding: 10px 20px;
    align-self: flex-start;
    margin: 0;
    font-size: 13px;
    font-weight: ${regular};
    color: ${primaryText};
  }

  & div:hover {
    background-color: ${hoverBlue};
  }

  & h5 {
    padding: 0 20px 10px 20px;
    color: ${primaryText};
    font-size: 12px;
    text-align: left;
    margin: 0;
    text-transform: uppercase;
  }
`

export const CheckBox = styled.input`
  position: absolute;
  opacity: 0;

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & + label:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 3px;
    border: 1px ${secondaryGray} solid;
  }

  &:checked + label:before {
    background: white;
    border: 1px ${primaryBlue} solid;
  }

  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  &:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }

  &:checked + label:after {
    content: '';
    position: absolute;
    left: 6px;
    top: 10px;
    background: ${primaryBlue};
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 ${primaryBlue},
    4px 0 0 ${primaryBlue},
      4px -2px 0 ${primaryBlue},
      4px -4px 0 ${primaryBlue},
      4px -6px 0 ${primaryBlue},
      4px -8px 0 ${primaryBlue};
    transform: rotate(45deg);
  }
`
