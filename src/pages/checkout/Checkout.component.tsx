import React from "react";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";
import {
  selectCartItems,
  selectCartTotalPrice
} from "../../redux/cart/cartSelector";
import { Cart, Item } from "../../redux/cart/cartReducer";
import {
  CheckoutContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from "./Checkout.styles";

const mapStateToProps = (state: Cart) => ({
  cartItems: selectCartItems(state),
  totalPrice: selectCartTotalPrice(state)
});
const Checkout = ({
  cartItems,
  totalPrice
}: ReturnType<typeof mapStateToProps>) => {
  return (
    <CheckoutContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((item: Item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <TotalContainer>{`TOTAL: €${totalPrice}`}</TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </WarningContainer>
    </CheckoutContainer>
  );
};

export default connect(mapStateToProps)(Checkout);
