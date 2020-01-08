import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import ShopTypes from "./shopTypes";
import { Collections, ShopState } from "./shopReducer";
import {
  firestore,
  convertCollectionToMap
} from "../../firebase/firebase.utils";

export interface FetchCollectionAction {
  type: typeof ShopTypes.FETCH_COLLECTIONS_REQUEST;
  payload: ShopState;
}

export interface FetchCollectionSuccesAction {
  type: typeof ShopTypes.FETCH_COLLECTIONS_SUCCESS;
  payload: ShopState;
}

export interface FetchCollectionFailureAction {
  type: typeof ShopTypes.FETCH_COLLECTIONS_FAILURE;
  payload: ShopState;
}

export type ShopActions =
  | FetchCollectionAction
  | FetchCollectionSuccesAction
  | FetchCollectionFailureAction;

export const fetchCollections = () => ({
  type: ShopTypes.FETCH_COLLECTIONS_REQUEST
});

export const fetchCollectionsSucces = (collections: Collections) => ({
  type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const fetchCollectionsFailure = (errorMessage: string) => ({
  type: ShopTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsAsync = () => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollections());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionMap = convertCollectionToMap(snapshot);
        dispatch(fetchCollectionsSucces(collectionMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
