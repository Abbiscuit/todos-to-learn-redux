import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing:border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.main};
    /* transition: .6s  all ease; */
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.main};
  }

  button {
    margin: 0;
    border: none;
    display: inline-block;
  }
`;
