import React from "react";
import "./CharacterIcon.css";
import * as Actions from "../../State/Actions";

function CharacterIcon(props) {
  return (
    <div
      className="CharacterIcon"
      {...props}
      style={{ backgroundColor: props.color }}
      data-clickable="true"
      data-action={Actions.SET_TURN}
    >
      {props.children}
    </div>
  );
}

export default CharacterIcon;
