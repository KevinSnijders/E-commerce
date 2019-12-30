import styled from "styled-components";
import CustomButton from "../custom-button/CustomButton.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  background-color: white;
  top: 9rem;
  right: 4rem;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CartDropdownEmpty = styled.span`
  font-size: 1.8rem;
  margin: 5rem auto;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;
