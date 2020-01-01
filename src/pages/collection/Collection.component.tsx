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
  const { title, items } = collection;
  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItems>
        {items.map((item: Item) => (
          <CollectionItem key={item.id} item={item} layout="grid" />
        ))}
      </CollectionItems>
    </CollectionContainer>
  );
};

export default connect(mapStateToProps)(CollectionPage);
