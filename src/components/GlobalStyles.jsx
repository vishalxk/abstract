/*
  A combination of Josh Comeau and Andy Bell's Custom CSS Resets.
  https://www.joshwcomeau.com/css/custom-css-reset/
  https://piccalil.li/blog/a-modern-css-reset/
*/

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }
  
  #root, html, body {
    height: 100%;
  }

  html {
    color-scheme: light;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 115%;
    background-color: var(--background-color);
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root {
    isolation: isolate;
    height: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* CSS Variables */
  :root {
    /* Fonts */
    --font-family: 'Wotfard', Futura, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    --bold: 600;
    --semi-bold: 500;
    --regular: 400;
    --light: 300;

    /* Colors */
    --blue: hsl(232, 62%, 57%);
    --lavender: hsl(237, 45%, 90%);
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 0%);
    --dark-grey: 	hsl(210, 4%, 10%);

    /* Shadows */
  }
`;

export default GlobalStyles;
