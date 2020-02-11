import React, { useContext } from "react";
import "./PlayPage.css";
import Grid from "../../Components/Grid/Grid";

import { GameContext } from "../../State/Context.js";

function PlayPage(props) {
  const { state } = useContext(GameContext);

  return (
    <div className="PlayPage">{state.selectMode ? "find a map" : <Grid />}</div>
  );
}

export default PlayPage;
