import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AnyAction } from "redux";
import { Cart, Item, CartItems } from "../../redux/cart/cartReducer";
import CartItem from "../cart-item/CartItem.component";
import { selectCartItems } from "../../redux/cart/cartSelector";
import { toggleCart } from "../../redux/cart/cartActions";

import {
  CartDropdownContainer,
  CartItemsContainer,
  CartDropdownEmpty,
  CartDropdownButton
} from "./CartDropdown.styles";

const mapStateToProps = (state: Cart) => ({
  cartItems: selectCartItems(state)
});

const CartDropdown = ({
  cartItems,
  history,
  dispatch
}: CartItems & RouteComponentProps & AnyAction) => {
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
      <CartDropdownButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCart());
        }}
      >
        Go to checkout
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
