import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;

  @media screen and (max-width: 800px) {
    font-size: 50%;
  }
}

body {
  font-family: "Open Sans Condensed";
  padding: 2rem 4rem;
  font-size: 1.6rem;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyle;
