import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import CollectionItem from "../collection-item/CollectionItem.component";
import { Collection } from "../../redux/shop/shopReducer";
import { Item } from "../../redux/cart/cartReducer";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from "./CollectionPreview.styles";

type CollectionWithRouteProps = Collection & RouteComponentProps;

const PreviewCollection = ({
  title,
  items,
  history,
  match,
  routeName
}: Collection & CollectionWithRouteProps) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </TitleContainer>
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

export default withRouter(PreviewCollection);
