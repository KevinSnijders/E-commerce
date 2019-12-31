import { createSelector } from "reselect";
import { Shop } from "./shopReducer";

const selectShop = (state: Shop) => state.shop;

const selectShopItems = createSelector([selectShop], shop => shop.collections);

export default selectShopItems;
