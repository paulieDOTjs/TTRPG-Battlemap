import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button
      className={props.className + " Button"}
      data-clickable={true}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
