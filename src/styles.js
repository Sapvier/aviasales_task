import styled from 'styled-components'
import {primaryBlue} from "./constants/constants";


export const Button = styled.button`
  padding: 10px;

  min-width: 100px;
  background-color: ${primaryBlue};
  border: none;
  border-radius: 5px;
  color: white;
`

export const LogoWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`