import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--light-grey);
  }
  
  html, body {
    max-height: 100vh;
    max-width: 100vw;
    
    width: 100%;
    height: 100%;

    overflow: hidden;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }

  html {
    background: var(--primary);
  }

  :root {
    --primary: #04080F;
    --white: #FFF;
    --dark-blue: #385E94;
    --medium-blue: #A1C6EA;
    --light-blue: #BBD1EA;
    --light-grey: #DAE3E5;
  }
`;
