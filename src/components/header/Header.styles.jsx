import styled from "styled-components";
import { Link } from "react-router-dom";
import { screen } from "../../helper";

export const HeaderContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0 2.4rem;
  margin: 1.8rem 0 0;

  @media ${screen.md} {
    margin: 0;
    padding: 0 1.2rem;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 7rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    with: 5rem;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 1rem 1.6rem;
  cursor: pointer;

  &:last-child {
    padding-right: 0;
  }
`;
