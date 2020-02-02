import React, { useContext } from "react";
import "./ObjectSelector.css";
import * as Actions from "../../State/Actions";
import { tileMapDirectory } from "../../Utils/tileMapDirectory";

import { GameContext } from "../../State/Context.js";

function ObjectSelector(props) {
  const { state } = useContext(GameContext);
  return (
    <div
      className="ObjectSelector"
      data-clickable={true}
      data-action={Actions.SELECT_OBJECT}
      data-tiletype={props.tiletype}
      {...props}
    >
      {tileMapDirectory[props.tiletype].pseudoName}
    </div>
  );
}

export default ObjectSelector;
