/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props =>
      props.theme.colors.background} url(${githubBackground}) no-repeat 70% top;
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 16px Roboto, sans-serif;
    color: ${props => props.theme.colors.text};
  }

  button, a {
    cursor: pointer
  }
`;
