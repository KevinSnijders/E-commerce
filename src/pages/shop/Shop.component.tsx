import React from "react";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";

import { ShopContainer } from "./Shop.styles";

const Shop: React.FunctionComponent<{}> = () => {
  return (
    <ShopContainer>
      <CollectionsOverview />
    </ShopContainer>
  );
};

export default Shop;
