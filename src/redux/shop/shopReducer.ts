import { Item } from "../cart/cartReducer";
import ShopTypes from "./shopTypes";

export interface Collection {
  id?: number;
  title: string;
  routeName: string;
  items: Array<Item>;
}

export interface CollectionList {
  collections: Array<Collection>;
}

export interface Shop {
  shop: {
    collections: Array<Collection>;
  };
}

export interface ShopState {
  collections: {
    [key: string]: Collection;
  } | null;
}

const initShopData: ShopState = {
  collections: null
};

const shopReducer = (state: ShopState = initShopData, action: any) => {
  switch (action.type) {
    case ShopTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
