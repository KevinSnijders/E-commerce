import React from "react";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { UserState, User } from "../../redux/user/userReducer";
import { CartState, Cart } from "../../redux/cart/cartReducer";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.component";
import { selectCartIsOpen } from "../../redux/cart/cartSelector";
import selectCurrentUser from "../../redux/user/userSelector";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./Header.styles";

const mapStateToProps = (state: User & Cart) => ({
  currentUser: selectCurrentUser(state),
  isOpen: selectCartIsOpen(state)
});

type HeaderState = UserState & CartState;

const Header = ({ currentUser, isOpen }: HeaderState) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact">Contact</OptionLink>
        {currentUser ? (
          <OptionLink as="div" to="/" onClick={() => auth.signOut()}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">Sign in</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {isOpen ? <CartDropdown /> : null}
    </HeaderContainer>
  );
};

export default connect(mapStateToProps)(Header);
