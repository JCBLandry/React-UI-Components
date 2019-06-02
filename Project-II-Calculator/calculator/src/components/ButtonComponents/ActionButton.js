import React from 'react';
import './Button.css';


function ActionButton  (props) {
  return (
    <button className={`bigBut ${props.className}`}>
      {props.text}
    </button>
  );
};

export default ActionButton;