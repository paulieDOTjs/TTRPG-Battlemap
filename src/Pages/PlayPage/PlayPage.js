import React, { useMemo, useContext } from "react";
import "./PlayPage.css";
import Grid from "../../Components/Grid/Grid";

import { GameContext } from "../../State/Context.js";

function PlayPage(props) {
  console.log("play page");
  const { state } = useContext(GameContext);
  return useMemo(() => {
    return (
      <div className="PlayPage">
        {state.selectMode ? "find a map" : <Grid />}
      </div>
    );
  }, [state.tileMap]);
}

export default PlayPage;
