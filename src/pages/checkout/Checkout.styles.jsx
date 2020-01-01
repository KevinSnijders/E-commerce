import styled from "styled-components";
import { screen } from "../../helper";

export const CheckoutContainer = styled.div`
  margin: 0 auto;
  padding: 3.2rem 2.4rem 0;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4.8rem;

  @media ${screen.md} {
    width: 80%;
    padding: 3.2rem 1.2rem 0;
  }

  button {
    margin-left: auto;
    margin-top: 5rem;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  width: 23%;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    text-transform: capitalize;
  }

  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 3rem;
  margin-left: auto;
  font-size: 3.6rem;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 4rem;
  font-size: 2.4rem;
  color: orangered;
`;
