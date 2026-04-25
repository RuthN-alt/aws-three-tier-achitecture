import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background: #02140f;
    color: #d1fae5; /* soft green text */
    font-family: Arial, Helvetica, sans-serif;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  a {
    color: #00ff9f;
    text-decoration: none;
  }
`;