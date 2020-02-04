import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button className={"Button"} data-clickable={true} {...props}>
      {props.children}
    </button>
  );
}

export default Button;
