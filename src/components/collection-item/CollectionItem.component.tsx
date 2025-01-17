import React from "react";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { addItem } from "../../redux/cart/cartActions";
import { Item, ItemState } from "../../redux/cart/cartReducer";

import {
  CollectionItemContainer,
  BackgroundImageContainer,
  CollectionFooterContainer,
  AddButton,
  NameContainer,
  PriceContainer
} from "./CollectionItem.styles";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  addItemFn: (item: Item) => dispatch(addItem(item))
});

interface Layout {
  layout?: string;
}

type CollectionItem = ItemState &
  Layout &
  ReturnType<typeof mapDispatchToProps>;

const CollectionItem = ({ item, layout, addItemFn }: CollectionItem) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer layout={layout}>
      <BackgroundImageContainer className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{`€${price}`}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItemFn(item)} customProp="inverted">
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default connect(null, mapDispatchToProps)(CollectionItem);
