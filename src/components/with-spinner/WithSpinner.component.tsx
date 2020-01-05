import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./WithSpinner.styles";

const WithSpinner = (WrappedComponent: any) => {
  const Spinner = ({ isLoading, ...props }: any) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...props} />
    );
  };

  return Spinner;
};

export default WithSpinner;
