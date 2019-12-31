import React from "react";
import { ItemState } from "../../redux/cart/cartReducer";

import {
  CartItemContainer,
  CartItemPreview,
  CartItemDetailsContainer
} from "./CartItem.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }: ItemState) => {
  return (
    <CartItemContainer>
      <CartItemPreview src={imageUrl} alt={name} />
      <CartItemDetailsContainer>
        <span>{name}</span>
        <span>{`${quantity} x €${price}`}</span>
      </CartItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
