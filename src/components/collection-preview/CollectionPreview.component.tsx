import React from "react";
import CollectionItem from "../collection-item/CollectionItem.component";
import { Collection, Product } from "../../pages/shop/Shop.component";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from "./CollectionPreview.styles";

const PreviewCollection: React.FC<Collection> = ({
  title,
  products
}: Collection) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {products
          .filter((product: Product, index: number) => index < 4)
          .map(({ id, name, imageUrl, price }: Product) => (
            <CollectionItem
              key={id}
              id={id}
              name={name}
              imageUrl={imageUrl}
              price={price}
            />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default PreviewCollection;
