import { createGlobalStyle } from "styled-components";
import { screen } from "./helper";

const GlobalStyle = createGlobalStyle`
html {
  font-size: 50%;

  @media ${screen.md} {
    font-size: 62.5%;
  }
}

body {
  font-family: "Open Sans Condensed";
  font-size: 1.6rem;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}

.app {
  width: auto;
  margin: auto;
  @media ${screen.md} {
    width: 750px;
  }
  @media ${screen.lg} {
    width: 970px;
  }
  @media ${screen.xl} {
    width: 1170px;
  }
}
`;

export default GlobalStyle;
