    
import React from 'react';
import './Button.css';

const ButtonContainer = props => {
  return (
    <div className={`buttCont ${props.className}`}>
      {props.children}
    </div>
  );
};

export default ButtonContainer;