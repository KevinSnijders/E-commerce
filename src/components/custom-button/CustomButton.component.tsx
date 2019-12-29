import React from "react";

import { CustomButtonContainer } from "./CustomButton.styles";

type CustomButtonProps = {
  type?: string;
  onClick?: () => void;
  isGoogleSignIn?: boolean;
  children?: React.ReactNode;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  onClick,
  isGoogleSignIn,
  children
}: CustomButtonProps) => (
  <CustomButtonContainer
    type={type}
    isGoogleSignIn={isGoogleSignIn}
    onClick={onClick}
  >
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
