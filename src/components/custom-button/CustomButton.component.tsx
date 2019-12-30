import React from "react";

import { CustomButtonContainer } from "./CustomButton.styles";

type CustomButtonProps = {
  type?: string;
  onClick?: () => void;
  customProp?: string;
  children?: React.ReactNode;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  onClick,
  customProp,
  children
}: CustomButtonProps) => (
  <CustomButtonContainer type={type} onClick={onClick} customProp={customProp}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
