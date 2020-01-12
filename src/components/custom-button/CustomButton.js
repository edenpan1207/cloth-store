import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, inverted, isGoogleSignIn, ...others }) => (
  <button className={`
    custom-button 
    ${inverted ? 'inverted' : ''} 
    ${isGoogleSignIn ? 'google-sign-in' : ''}`} 
    {...others}
  >
    {children}
  </button>
)

export default CustomButton;