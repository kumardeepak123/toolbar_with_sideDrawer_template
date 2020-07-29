import React from "react";
import './Button.css'

const button = (props) => {

    const btnType = props.btnType ;
    
  return (
    <button
      className={[ "Button", btnType ].join(" ")}
      onClick={props.btnClicked} 
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default button;
