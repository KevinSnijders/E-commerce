import React from "react";

import { CustomButtonContainer } from "./CustomButton.styles";

type CustomButtonProps = {
  type?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  onClick,
  children
}: CustomButtonProps) => (
  <CustomButtonContainer type={type} onClick={onClick}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
