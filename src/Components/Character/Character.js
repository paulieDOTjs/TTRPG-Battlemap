import React from "react";
import "./Character.css";

function Character(props) {
  return (
    <div
      className="Character"
      {...props}
      key="props.props.name"
      style={{
        gridColumnStart: props.props.position.x,
        gridRowStart: props.props.position.y,
        backgroundColor: props.props.color
      }}
    >
      <p className="Name">{props.props.name}</p>
    </div>
  );
}

export default Character;
