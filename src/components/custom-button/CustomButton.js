import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn, ...others }) => (
  <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`} {...others}>
    {children}
  </button>
)

export default CustomButton;