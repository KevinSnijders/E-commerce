import { createSelector } from "reselect";
import { Cart } from "./cartReducer";

const selectCart = (state: Cart) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartIsOpen = createSelector(
  [selectCart],
  cart => cart.isOpen
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, cartItem) => acc + (cartItem.quantity || 0), 0)
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (acc, cartItem) => acc + (cartItem.quantity || 0) * cartItem.price,
      0
    )
);
