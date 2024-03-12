import { createGlobalStyle } from 'styled-components';

import { ADAPTIVE } from './common/tokens/screen';

export const GlobalStyled = createGlobalStyle`
  :root {
    --font-montserrat: "Montserrat",sans-serif;
    --font-open-sans: "Open Sans",sans-serif;
    --white-color: #fff;
    --black-color: #000;
    --black-color2: #1d1d1d;
    --title-color: #13141a;
    --text-color: #5e5e5e;
    --primary-color1: #46d993;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }

  html,
  body {
    /* max-width: 100vw; */
    /* overflow-x: hidden; */
  }

  body {
    /* color: rgb(var(--foreground-rgb));
    background: linear-gradient(
        to bottom,
        transparent,
        rgb(var(--background-end-rgb))
      )
      rgb(var(--background-start-rgb)); */
    
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;

    background: rgb(247, 247, 245);

    padding: 0px;

    ${ADAPTIVE.minWidth.tablet} {
      /* padding: 0px 24px; */
    }

    ${ADAPTIVE.minWidth.desktop} {
      /* padding: 0px 48px; */
    }
  }

  #root {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;
