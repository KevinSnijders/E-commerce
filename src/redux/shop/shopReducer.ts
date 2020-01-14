import { Item } from "../cart/cartReducer";
import ShopTypes from "./shopTypes";
import { ShopActions } from "./shopActions";

export interface Collection {
  id?: number;
  title: string;
  routeName: string;
  items: Array<Item>;
}

export interface Collections {
  collections: Array<Collection>;
}

export interface ShopState {
  collections: {
    [key: string]: Collection;
  } | null;
  isFetching: boolean;
  errorMessage: undefined | string;
}

const initShopData: ShopState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state: ShopState = initShopData, action: ShopActions) => {
  switch (action.type) {
    case ShopTypes.FETCH_COLLECTIONS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case ShopTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case ShopTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
