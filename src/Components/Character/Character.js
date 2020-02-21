import React, { useContext, useMemo } from "react";
import "./Character.css";

import { GameContext } from "../../State/Context.js";

//Gets state from context
function Character(props) {
  const { state } = useContext(GameContext);
  return (
    <div
      className={
        props.highlight === "true"
          ? "Character HighlightCharacter"
          : "Character"
      }
      {...props}
      key="props.props.name"
      style={{
        height: state.tileSize / 2 + "rem",
        width: state.tileSize / 2 + "rem",
        gridColumnStart: props.props.position.x,
        gridRowStart: props.props.position.y,
        backgroundColor: props.props.color,
        fontSize: state.tileSize / 3 + "rem"
      }}
    >
      {props.props.name.slice(0, 1)}
    </div>
  );
}

export default Character;
