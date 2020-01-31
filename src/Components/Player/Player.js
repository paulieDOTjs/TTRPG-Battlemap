import React, { useContext } from "react";
import "./Player.css";
import { GameContext } from "../../State/Context.js";

function Player(props) {
  const { gameState } = useContext(GameContext);

  return (
    <div
      className="Player"
      style={{
        gridColumnStart: gameState.player1position.x,
        gridRowStart: gameState.player1position.y
      }}
    >
      {props.name}
    </div>
  );
}

export default Player;
