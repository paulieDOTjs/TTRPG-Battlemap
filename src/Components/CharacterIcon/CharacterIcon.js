import React from "react";
import "./CharacterIcon.css";

function CharacterIcon(props) {
  return (
    <div
      className="CharacterIcon"
      {...props}
      style={{ backgroundColor: props.color }}
    >
      {props.children}
    </div>
  );
}

export default CharacterIcon;
