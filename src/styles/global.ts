import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 18px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 18px Roboto, sans-serif;
  }

  button, a {
    cursor: pointer
  }
`;