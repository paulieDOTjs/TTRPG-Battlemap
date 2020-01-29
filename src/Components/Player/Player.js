import React from "react";
import "./Player.css";

function Player(props) {
  return (
    <div
      className="Player"
      style={{
        gridColumnStart: props.player1.x,
        gridRowStart: props.player1.y
      }}
    >
      {props.name}
    </div>
  );
}

export default Player;
