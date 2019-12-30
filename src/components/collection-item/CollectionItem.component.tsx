import React from "react";
import { Product } from "../../pages/shop/Shop.component";

import {
  CollectionItemContainer,
  BackgroundImageContainer,
  CollectionFooterContainer,
  AddButton,
  NameContainer,
  PriceContainer
} from "./CollectionItem.styles";

const CollectionItem: React.FC<Product> = ({
  name,
  imageUrl,
  price
}: Product) => {
  return (
    <CollectionItemContainer>
      <BackgroundImageContainer className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton customProp="inverted">Add to cart</AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
