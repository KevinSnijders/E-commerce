import React from "react";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { ItemState, Item } from "../../redux/cart/cartReducer";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cartActions";

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from "./CheckoutItem.styles";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  clearItemFn: (item: Item) => dispatch(clearItemFromCart(item)),
  addItemFn: (item: Item) => dispatch(addItem(item)),
  removeItemFn: (item: Item) => dispatch(removeItem(item))
});

const CheckoutItem = ({
  item,
  clearItemFn,
  addItemFn,
  removeItemFn
}: ItemState & ReturnType<typeof mapDispatchToProps>) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={e => (e.keyCode === 37 ? removeItemFn(item) : null)}
          onClick={() => removeItemFn(item)}
        >
          &#10094;
        </div>
        <span>{quantity}</span>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={e => (e.keyCode === 39 ? addItemFn(item) : null)}
          onClick={() => addItemFn(item)}
        >
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer
        role="button"
        tabIndex={0}
        onClick={() => clearItemFn(item)}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
