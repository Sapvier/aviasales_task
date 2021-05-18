import styled from 'styled-components'
import {errorRed, primaryBlue, secondaryGray, defaultShadow} from "../../constants/constants";


export const AuthFormWrapper = styled.div`
  min-height: 200px;
  min-width: 330px;
  padding: 25px;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: ${defaultShadow};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & form {
    min-height: 70%;
    min-width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  & input {
    height: 35px;
    min-width: 100%;
    border: 1px solid ${secondaryGray};
    border-radius: 5px;
    margin-bottom: 15px;
    padding: 5px;
    outline: none;
  }

  & input:focus {
    border: 1px solid ${primaryBlue};
  }

  & a {
    text-decoration: none;
    color: dodgerblue;
  }

  & h1 {
    margin: 0 0 10px 0;
    text-align: center;
  }

  & label {
    align-self: flex-start;
    margin-bottom: 3px;
  }

  & div {
    min-width: 90%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  & span {
    font-size: 12px;
    color: ${errorRed};
    margin-top: -15px;
  }


`