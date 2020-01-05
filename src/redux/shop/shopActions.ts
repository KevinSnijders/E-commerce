import ShopTypes from "./shopTypes";
import { CollectionList } from "./shopReducer";

export interface UpdateCollectionsAction {
  type: typeof ShopTypes.UPDATE_COLLECTIONS;
  payload: CollectionList;
}

export type ShopActions = UpdateCollectionsAction;

export const updateCollections = (collectionsMap: CollectionList) => ({
  type: ShopTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
