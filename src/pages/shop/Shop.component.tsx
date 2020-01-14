import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, RouteComponentProps } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { fetchCollectionsAsync } from "../../redux/shop/shopActions";
import CollectionsOverviewContainer from "../../container/collections-overview/CollectionsOverview.container";
import CollectionPageContainer from "../../container/collection-page/CollectionPage.container";
import { ShopContainer } from "./Shop.styles";

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
  fetchCollectionsAsyncReact: () => dispatch(fetchCollectionsAsync())
});

type FCState = RouteComponentProps & ReturnType<typeof mapDispatchToProps>;

const Shop: React.FC<FCState> = ({
  match,
  fetchCollectionsAsyncReact
}: FCState) => {
  useEffect(() => {
    fetchCollectionsAsyncReact();
  }, [fetchCollectionsAsyncReact]);

  return (
    <ShopContainer>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </ShopContainer>
  );
};

export default connect(null, mapDispatchToProps)(Shop);
