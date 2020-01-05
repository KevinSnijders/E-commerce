import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route, RouteComponentProps } from "react-router-dom";
import { Dispatch, AnyAction } from "redux";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";
import CollectionPage from "../collection/Collection.component";
import { ShopContainer } from "./Shop.styles";

import { CollectionList } from "../../redux/shop/shopReducer";

import {
  firestore,
  convertCollectionToMap
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shopActions";

import WithSpinner from "../../components/with-spinner/WithSpinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  updateCollectionsFn: (collectionsMap: CollectionList) =>
    dispatch(updateCollections(collectionsMap))
});

const Shop: React.FC<RouteComponentProps &
  ReturnType<typeof mapDispatchToProps>> = ({
  match,
  updateCollectionsFn
}: RouteComponentProps & ReturnType<typeof mapDispatchToProps>) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionToMap(snapshot);
      updateCollectionsFn(collectionMap);
      setLoading(false);
    });
  }, [updateCollectionsFn]);

  return (
    <ShopContainer>
      <Route
        exact
        path={`${match.path}`}
        render={(props: any) => (
          <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props: any) => (
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </ShopContainer>
  );
};

export default connect(null, mapDispatchToProps)(Shop);
