import CartTypes from "./cartTypes";

export interface ToggleCartAction {
  type: typeof CartTypes.TOGGLE_CART_IS_OPEN;
}

export type CartActions = ToggleCartAction;

export const toggleCart = () => {
  return {
    type: CartTypes.TOGGLE_CART_IS_OPEN
  };
};
