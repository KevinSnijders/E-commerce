import React from "react";
import { Product } from "../../pages/shop/Shop.component";

import {
  CollectionItemContainer,
  BackgroundImageContainer,
  CollectionFooterContainer,
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
      <BackgroundImageContainer imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
