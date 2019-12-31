import React from "react";
import { connect } from "react-redux";
import {
  Shop as IShop,
  Collection,
  ShopState
} from "../../redux/shop/shopReducer";
import selectShopItems from "../../redux/shop/shopSelector";
import { CollectionsOverviewContainer } from "./CollectionsOverview.styles";

import CollectionPreview from "../collection-preview/CollectionPreview.component";

const mapStateToProps = (state: IShop) => ({
  collections: selectShopItems(state)
});

const CollectionsOverview = ({ collections }: ShopState) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, title, routeName, items }: Collection) => (
        <CollectionPreview
          key={id}
          title={title}
          routeName={routeName}
          items={items}
        />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default connect(mapStateToProps)(CollectionsOverview);
