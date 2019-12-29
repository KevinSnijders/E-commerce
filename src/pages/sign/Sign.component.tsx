import React from "react";
import SignIn from "../../components/sign-in/SignIn.component";
import SignUp from "../../components/sign-up/SignUp.component";

import { SignContainer } from "./Sign.styles";

const Sign = () => {
  return (
    <SignContainer>
      <SignIn />
      <SignUp />
    </SignContainer>
  );
};

export default Sign;
