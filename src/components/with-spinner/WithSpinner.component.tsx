import React, { ReactElement } from "react";
import { SpinnerContainer, SpinnerOverlay } from "./WithSpinner.styles";

interface HOCProps {
  isLoading: boolean;
}
const WithSpinner = (
  WrappedComponent: React.ComponentType<any>
): React.FunctionComponent<any> => {
  const Spinner = ({ isLoading, ...props }: HOCProps & ReactElement) => {
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
