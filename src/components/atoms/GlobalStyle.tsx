import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    margin: 0;
  }

  button:focus,
  input:focus {
    outline: none;
  }

  button {
    border: none;
  }

  img {
    -webkit-user-drag: none;
  }
`;

/**
 * @component
 * */
export default GlobalStyle;
