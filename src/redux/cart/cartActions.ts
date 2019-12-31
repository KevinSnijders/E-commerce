import CartTypes from "./cartTypes";
import { Item } from "./cartReducer";

export interface ToggleCartAction {
  type: typeof CartTypes.TOGGLE_CART_IS_OPEN;
}

export interface AddItemAction {
  type: typeof CartTypes.ADD_ITEM;
  payload: Item;
}

export interface RemoveItemAction {
  type: typeof CartTypes.REMOVE_ITEM;
  payload: Item;
}

export interface ClearItemFromCartAction {
  type: typeof CartTypes.CLEAR_ITEM_FROM_CART;
  payload: Item;
}

export type CartActions =
  | ToggleCartAction
  | AddItemAction
  | RemoveItemAction
  | ClearItemFromCartAction;

export const toggleCart = () => {
  return {
    type: CartTypes.TOGGLE_CART_IS_OPEN
  };
};

export const addItem = (item: Item) => ({
  type: CartTypes.ADD_ITEM,
  payload: item
});

export const removeItem = (item: Item) => ({
  type: CartTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = (item: Item) => ({
  type: CartTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
