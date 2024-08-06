import { createGlobalStyle } from 'styled-components';
import backgroundImage from './bgImage.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: 'Arial', sans-serif;
    /* color: #fff; */
  }
`;

export default GlobalStyle;