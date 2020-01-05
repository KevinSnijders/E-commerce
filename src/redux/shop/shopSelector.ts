import { createSelector } from "reselect";
import { Shop } from "./shopReducer";

const selectShop = (state: Shop) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections
      ? Object.keys(collections).map((key: any) => collections[key])
      : []
);

export const selectCollection = (collectionUrlParam: any) =>
  createSelector([selectCollections], collections =>
    collections ? collections[collectionUrlParam] : null
  );
