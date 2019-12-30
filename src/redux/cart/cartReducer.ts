import CartTypes from "./cartTypes";
import { CartActions } from "./cartActions";

export interface CartState {
  isOpen?: boolean;
}

const initCartState: CartState = {
  isOpen: false
};

const cartReducer = (state: CartState = initCartState, action: CartActions) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_IS_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    default:
      return {
        ...state
      };
  }
};

export default cartReducer;
