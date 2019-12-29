import React from "react";

import { CustomButtonContainer } from "./CustomButton.styles";

type CustomButtonProps = {
  type: string;
  children?: React.ReactNode;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  children
}: CustomButtonProps) => (
  <CustomButtonContainer type={type}>{children}</CustomButtonContainer>
);

export default CustomButton;
