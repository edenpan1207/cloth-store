import React from 'react';
import {SpinnerOverlay, SpinnerContainer} from './WithSpinner.style';

const WithSpinner = WrappedComponent => {
  const Spinner = ({isLoading, ...others}) => {
    return isLoading ? 
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
      : <WrappedComponent {...others} />
  }

  return Spinner;
}

export default WithSpinner;