import React, { useContext } from "react";
import "./ObjectSelector.css";
import * as Actions from "../../State/Actions";
import { tileMap } from "../../Utils/tileMap";

import { GameContext } from "../../State/Context.js";

function ObjectSelector(props) {
  const { state } = useContext(GameContext);
  return (
    <div
      className="ObjectSelector"
      {...props}
      data-clickable={true}
      data-action={Actions.SELECT_OBJECT}
      data-tiletype={props.tiletype}
    >
      {tileMap[props.tiletype].className}
    </div>
  );
}

export default ObjectSelector;
