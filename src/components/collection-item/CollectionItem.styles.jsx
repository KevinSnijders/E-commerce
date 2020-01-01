import styled, { css } from "styled-components";
import { screen } from "../../helper";
import { CustomButtonContainer } from "../custom-button/CustomButton.styles";

const FlexLayout = css`
  width: 100vw;

  @media ${screen.sm} {
    width: 44vw;
  }

  @media ${screen.md} {
    width: 30vw;
  }
`;

const GridLayout = css`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
`;

const getLayoutStyles = ({ layout }) => {
  if (layout === "grid") {
    return GridLayout;
  }

  return FlexLayout;
};

export const CollectionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  padding: 0 1.2rem;
  margin-bottom: 2.4rem;
  ${getLayoutStyles}

  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    &:hover {
      .image,
      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButtonContainer)`
  width: 70%;
  opacity: 0.7;
  position: absolute;
  top: 240px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 1rem;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  overflow: hidden;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  padding: 1.2rem;
`;

export const NameContainer = styled.span``;

export const PriceContainer = styled.span`
  text-align: right;
`;
