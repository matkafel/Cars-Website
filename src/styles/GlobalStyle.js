import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    overflow-x: hidden;
    body::-webkit-scrollbar {
    width: 1em;
}
 

 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
  }
`;

export default GlobalStyle;
