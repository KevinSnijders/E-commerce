import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelector";
import CollectionItem from "../../components/collection-item/CollectionItem.component";
import {
  CollectionContainer,
  CollectionTitle,
  CollectionItems
} from "./Collection.styles";
import { Shop } from "../../redux/shop/shopReducer";
import { Item } from "../../redux/cart/cartReducer";

const mapStateToProps = (state: Shop, ownProps: any) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  };
};
const CollectionPage = ({ collection }: ReturnType<typeof mapStateToProps>) => {
  return collection ? (
    <CollectionContainer>
      <CollectionTitle>{collection.title}</CollectionTitle>
      <CollectionItems>
        {collection.items.map((item: Item) => (
          <CollectionItem key={item.id} item={item} layout="grid" />
        ))}
      </CollectionItems>
    </CollectionContainer>
  ) : null;
};

export default connect(mapStateToProps)(CollectionPage);
