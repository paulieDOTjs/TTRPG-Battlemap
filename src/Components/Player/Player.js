import React, { useContext } from "react";
import "./Player.css";
import { GameContext } from "../../State/Context.js";

function Player(props) {
  const { state } = useContext(GameContext);

  return (
    <div
      className="Player"
      style={{
        gridColumnStart: state.player1position.x,
        gridRowStart: state.player1position.y
      }}
    >
      {props.name}
    </div>
  );
}

export default Player;
