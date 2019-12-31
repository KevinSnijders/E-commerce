import React from "react";
import { connect } from "react-redux";
import {
  Shop as IShop,
  Collection,
  CollectionList
} from "../../redux/shop/shopReducer";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector";
import { CollectionsOverviewContainer } from "./CollectionsOverview.styles";

import CollectionPreview from "../collection-preview/CollectionPreview.component";

const mapStateToProps = (state: IShop) => ({
  collections: selectCollectionsForPreview(state)
});

const CollectionsOverview = ({ collections }: CollectionList) => {
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
