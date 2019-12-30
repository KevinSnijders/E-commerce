import React from "react";
import { connect } from "react-redux";
import { State } from "../../redux/rootReducer";
import { auth } from "../../firebase/firebase.utils";
import { UserState } from "../../redux/user/userReducer";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./Header.styles";

const Header: React.FC<UserState> = ({ currentUser }: UserState) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact">Contact</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">Sign in</OptionLink>
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = (state: State) => ({
  currentUser: state.user
});

export default connect(mapStateToProps)(Header);
