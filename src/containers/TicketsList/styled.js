import styled from 'styled-components'
import {primaryBlue} from "../../constants";


export const TicketsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  row-gap: 20px;
  
  & h3 {
    height: 70vh;
  }
`
export const TicketsListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 20px;
`

export const ShowMoreButton = styled.button`
  width: 502px;
  height: 50px;
  text-transform: uppercase;

  background-color: ${primaryBlue};
  border: none;
  color: white;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
`