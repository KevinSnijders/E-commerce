import React from "react";
import { connect } from "react-redux";
import selectShopItems from "../../redux/shop/shopSelector";
import CollectionPreview from "../../components/collection-preview/CollectionPreview.component";

import { ShopContainer } from "./Shop.styles";
import {
  Shop as IShop,
  Collection,
  ShopState
} from "../../redux/shop/shopReducer";

const mapStateToProps = (state: IShop) => ({
  collections: selectShopItems(state)
});

const Shop = ({ collections }: ShopState) => {
  return (
    <ShopContainer>
      {collections.map(({ id, title, routeName, items }: Collection) => (
        <CollectionPreview
          key={id}
          title={title}
          routeName={routeName}
          items={items}
        />
      ))}
    </ShopContainer>
  );
};

export default connect(mapStateToProps)(Shop);
