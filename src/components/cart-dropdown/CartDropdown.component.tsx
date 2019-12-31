import React from "react";
import { connect } from "react-redux";
import { Cart, Item, CartItems } from "../../redux/cart/cartReducer";
import CartItem from "../cart-item/CartItem.component";
import { selectCartItems } from "../../redux/cart/cartSelector";
import {
  CartDropdownContainer,
  CartItemsContainer,
  CartDropdownEmpty,
  CartDropdownButton
} from "./CartDropdown.styles";

const mapStateToProps = (state: Cart) => ({
  cartItems: selectCartItems(state)
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
