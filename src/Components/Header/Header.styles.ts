import styled, { createGlobalStyle } from 'styled-components';

export const HeaderStyles = createGlobalStyle`

  div {
    font-family: serif;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: black;
    color: white;
    letter-spacing: 2px;
  }



  h2 {
    font-style: italic;
    font-weight: 100;
  }
`;

export const Heading = styled("div")`
  font-size: 50px;
` 