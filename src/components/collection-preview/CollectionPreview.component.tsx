import React from "react";
import CollectionItem from "../collection-item/CollectionItem.component";
import { Collection } from "../../pages/shop/Shop.component";
import { Item } from "../../redux/cart/cartReducer";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from "./CollectionPreview.styles";

const PreviewCollection: React.FC<Collection> = ({
  title,
  items
}: Collection) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item: Item, index: number) => index < 4)
          .map((item: Item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default PreviewCollection;
