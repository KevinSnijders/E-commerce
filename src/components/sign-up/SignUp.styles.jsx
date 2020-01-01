import styled from "styled-components";
import { screen } from "../../helper";

export const SignUpContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 3.2rem;
  @media ${screen.md} {
    width: 45%;
  }
  @media ${screen.lg} {
    width: 38rem;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 0 0 1.2rem;
`;

export const SignUpSubtitle = styled.span``;
