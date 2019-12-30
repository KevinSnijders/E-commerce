import React from "react";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { toggleCart } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";
import { Cart } from "../../redux/cart/cartReducer";

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer
} from "./CartIcon.styles";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  toggleCartFn: () => dispatch(toggleCart())
});

const mapStateToProps = (state: Cart) => ({
  itemCount: selectCartItemsCount(state)
});

const CartIcon = ({
  toggleCartFn,
  itemCount
}: ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>) => {
  return (
    <CartIconContainer>
      <ShoppingIcon onClick={toggleCartFn} />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
