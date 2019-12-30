import CartTypes from "./cartTypes";
import { CartActions } from "./cartActions";

export interface Item {
  id?: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ItemState {
  item: Item;
}

export interface CartState {
  isOpen: boolean;
  cartItems?: Array<Item> | null;
}

const initCartState: CartState = {
  isOpen: false,
  cartItems: []
};

const cartReducer = (state: CartState = initCartState, action: CartActions) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_IS_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case CartTypes.ADD_ITEM:
      return {
        ...state,
        carItems: [...state.cartItems, action.payload]
      };
    default:
      return {
        ...state
      };
  }
};

export default cartReducer;
