import React from "react";
import { connect } from "react-redux";
import { Item, CartItems } from "../../redux/cart/cartReducer";
import CartItem from "../cart-item/CartItem.component";
import {
  CartDropdownContainer,
  CartItemsContainer,
  CartDropdownEmpty,
  CartDropdownButton
} from "./CartDropdown.styles";

type Cart = {
  cart: {
    cartItems: Array<Item>;
  };
};

const mapStateToProps = ({ cart: { cartItems } }: Cart) => ({
  cartItems
});

const CartDropdown = ({ cartItems }: CartItems) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem: Item) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <CartDropdownEmpty>Your cart is empty</CartDropdownEmpty>
        )}
      </CartItemsContainer>
      <CartDropdownButton>Go to checkout</CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default connect(mapStateToProps)(CartDropdown);
