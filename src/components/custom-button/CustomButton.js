import React from 'react';
import {CustomButtonContainer} from './CustomButton.style';

const CustomButton = ({ children, ...others }) => (
  <CustomButtonContainer {...others}>
    {children}
  </CustomButtonContainer>
)

export default CustomButton;