import styled from "styled-components";
import { screen } from "../../helper";

export const SignInContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;

  @media ${screen.md} {
    width: 45%;
  }
  @media ${screen.lg} {
    width: 38rem;
  }
`;

export const SignInTitle = styled.h2`
  margin: 0 0 1.2rem;
`;

export const SignInSubtitle = styled.span``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
