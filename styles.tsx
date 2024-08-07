import { createGlobalStyle } from "styled-components"


 const GlobalStyle = createGlobalStyle`
  html {
   font-size: 62.5%;
   font-family: Arial, sans-serif;
  }
  
  body {
    color: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.6rem;        
  }
`;


export default GlobalStyle;