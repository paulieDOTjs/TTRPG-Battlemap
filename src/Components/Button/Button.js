import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button className={props.className + " Button"} {...props}>
      {props.name}
    </button>
  );
}

export default Button;
