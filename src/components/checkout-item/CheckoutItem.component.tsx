import React from "react";
import { ItemState } from "../../redux/cart/cartReducer";
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from "./CheckoutItem.styles";

const CheckoutItem = ({
  item: { imageUrl, name, price, quantity }
}: ItemState) => {
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div>&#10094;</div>
        <span>{quantity}</span>
        <div>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
