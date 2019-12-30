import CartTypes from "./cartTypes";
import { CartActions } from "./cartActions";
import addItemToCart from "./CartUtils";

export interface Item {
  id?: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
}

export interface ItemState {
  item: Item;
}

export interface Cart {
  cart: {
    cartItems: Array<Item>;
  };
}

export interface CartItems {
  cartItems: Array<Item>;
}

export interface CartState {
  isOpen?: boolean;
  cartItems?: Array<Item>;
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
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return {
        ...state
      };
  }
};

export default cartReducer;
