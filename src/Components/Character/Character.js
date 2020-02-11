import React, { useContext, useMemo } from "react";
import "./Character.css";

import { GameContext } from "../../State/Context.js";

//Gets state from context
function Character(props) {
  const { state } = useContext(GameContext);
  return useMemo(() => {
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
  }, [state]);
}

export default Character;
