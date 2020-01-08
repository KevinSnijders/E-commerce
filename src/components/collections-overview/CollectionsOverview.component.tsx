import React from "react";
import { connect } from "react-redux";
import { Shop as ShopState } from "../../redux/rootReducer";
import { Collection, Collections } from "../../redux/shop/shopReducer";

import { selectCollectionsForPreview } from "../../redux/shop/shopSelector";
import { CollectionsOverviewContainer } from "./CollectionsOverview.styles";

import CollectionPreview from "../collection-preview/CollectionPreview.component";

const mapStateToProps = (state: ShopState) => ({
  collections: selectCollectionsForPreview(state)
});

const CollectionsOverview = ({ collections }: Collections) => {
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
