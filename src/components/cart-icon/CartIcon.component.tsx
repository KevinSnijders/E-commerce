import React from "react";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { toggleCart } from "../../redux/cart/cartActions";

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer
} from "./CartIcon.styles";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  toggleCartFn: () => dispatch(toggleCart())
});

const CartIcon = ({ toggleCartFn }: ReturnType<typeof mapDispatchToProps>) => {
  return (
    <CartIconContainer>
      <ShoppingIcon onClick={toggleCartFn} />
      <ItemCountContainer>1</ItemCountContainer>
    </CartIconContainer>
  );
};

export default connect(null, mapDispatchToProps)(CartIcon);
