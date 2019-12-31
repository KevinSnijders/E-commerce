import { createSelector } from "reselect";
import { Shop } from "./shopReducer";

const selectShop = (state: Shop) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export interface CollectionId {
  collectionId: string;
}

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map((key: any) => collections[key])
);

export const selectCollection = (collectionUrlParam: any) =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
