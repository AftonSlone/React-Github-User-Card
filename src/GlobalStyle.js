import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: black;
    font-family: Open-Sans, Helvetica, Sans-Serif;

    h3 {
      color: white;
    }
    
    div {
      width: 100%;
    }

    .searchBar {
      margin: 0% auto;
      display: flex;
      justify-content: center;
    }
   
  }
  
 
`;

export default GlobalStyle;
