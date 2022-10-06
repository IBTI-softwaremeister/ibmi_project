import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'BMJUA';
    outline: none;
    border: none;
  }

  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  @font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

`;
