import styled from 'styled-components'
import {defaultShadow, hoverBlue, primaryBlue, primaryText} from "../../constants";


export const TabsWrapper = styled.div`
  min-width: 502px;
  height: 50px;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: ${defaultShadow};
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: stretch;  
  
  & div {
    height: 100%;
    min-width: 33.3%; 
    text-align: center;  
    line-height: 50px;
    font-size: 12px;
    color: ${primaryText};
    cursor: pointer;
    text-transform: uppercase;
  }
  & div[data-active=true] {
    color: white;
    background-color: ${primaryBlue};
  }
  
  & div:hover:not(div[data-active=true]) {
    background-color: ${hoverBlue};    
  }
  
  
  & div:first-child {
    border-radius: 5px 0 0 5px;    
  }
  & div:last-child {
    border-radius: 0 5px 5px 0;
  }
`

