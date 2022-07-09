import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
      
  }

  :root {
    --main-white: #ecf0f1;
    --main-red: #eb4d4b;
    --main-green: #1dd1a1;
  }
    
  body {
    background-color: #1e272e;
    font-family: sans-serif;
    letter-spacing: 0.3px;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: sans-serif;
    font-weight: 200
  }

  input, button {
      font-family: sans-serif;
      font-size: 1rem;
}

  button {
    cursor: pointer;
    letter-spacing: 1px;
  }

  a {
    text-decoration: none
  }

  ul {
    list-style: none
  }
`;
