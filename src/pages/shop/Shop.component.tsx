import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";
import CollectionPage from "../collection/Collection.component";
import { ShopContainer } from "./Shop.styles";

const Shop: React.FunctionComponent<RouteComponentProps> = ({
  match
}: RouteComponentProps) => {
  return (
    <ShopContainer>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </ShopContainer>
  );
};

export default Shop;
