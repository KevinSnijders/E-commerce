import styled from "styled-components";
import CustomButton from "../custom-button/CustomButton.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 324px;
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  box-shadow: ${({ theme: { shadow } }) => shadow.normal};
  background-color: white;
  top: 7rem;
  right: 2.5rem;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme: { colors } }) => colors.black};
  }
`;

export const CartDropdownEmpty = styled.span`
  font-size: 1.8rem;
  margin: 5rem auto;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;
