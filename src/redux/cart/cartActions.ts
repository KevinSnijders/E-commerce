import CartTypes from "./cartTypes";
import { Item } from "./cartReducer";

export interface ToggleCartAction {
  type: typeof CartTypes.TOGGLE_CART_IS_OPEN;
}

export interface AddItemAction {
  type: typeof CartTypes.ADD_ITEM;
  payload: Item;
}

export type CartActions = ToggleCartAction | AddItemAction;

export const toggleCart = () => {
  return {
    type: CartTypes.TOGGLE_CART_IS_OPEN
  };
};

export const addItem = (item: Item) => ({
  type: CartTypes.ADD_ITEM,
  payload: item
});
