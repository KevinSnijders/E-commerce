import React from "react";
import {
  CartDropdownContainer,
  CartItemsContainer,
  CartDropdownEmpty,
  CartDropdownButton
} from "./CartDropdown.styles";

const CartDropdown = () => {
  return (
    <CartDropdownContainer>
      <CartDropdownEmpty>No items</CartDropdownEmpty>
      <CartItemsContainer>CardItems</CartItemsContainer>
      <CartDropdownButton>Go to checkout</CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
