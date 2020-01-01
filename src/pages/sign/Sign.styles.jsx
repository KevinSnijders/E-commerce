import styled from "styled-components";
import { screen } from "../../helper";

export const SignContainer = styled.div`
  display: block;
  padding: 0 1.2rem;
  margin: 3.2rem auto;

  @media ${screen.md} {
    display: flex;
    justify-content: space-between;
  }
`;
