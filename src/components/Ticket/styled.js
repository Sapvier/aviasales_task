import styled from 'styled-components'
import {activeShadow, defaultShadow, primaryBlue, primaryText, secondaryGray} from "../../constants/constants";


export const TicketWrapper = styled.div`
  padding: 20px;
  min-height: 184px;
  min-width: 502px;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: ${defaultShadow};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 10px;
  
  &:hover {
    box-shadow: ${activeShadow};
    cursor: pointer;
  }

  & h2 {
    color: ${primaryBlue};
    margin: 0;
    font-size: 24px;
  }

  & img {
    margin: 0;
  }
`
export const TicketHeader = styled.div`
  height: 36px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const Segment = styled.div`
  height: 39px;
  width: 100%;
  display: flex;
  flex-direction: row;    
`
export const SegmentItem = styled.div`
  width: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: stretch;
  column-gap: 10px;

  & p {
    color: ${primaryText};
    font-size: 14px;
    width: 100%;
    height: 50%;
  }

  & h5 {
    color: ${secondaryGray};
    font-size: 12px;
    width: 100%;
    height: 50%;
  }

`