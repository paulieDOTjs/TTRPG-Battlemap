import React from "react";
import "./Button.css";

function Button(props) {
  return <button {...props}>{props.name}</button>;
}

export default Button;
