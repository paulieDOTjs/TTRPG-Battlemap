import React, { useContext } from "react";
import "./SideBar.css";

import { GameContext } from "../../State/Context.js";
import EditSideBar from "../EditSideBar/EditSideBar";
import PlaySideBar from "../PlaySideBar/PlaySideBar";

function SideBar(props) {
  const { gameState } = useContext(GameContext);

  return (
    <section className="SideBar">
      {(gameState.editMode === true && <EditSideBar />) ||
        (gameState.editMode === false && <PlaySideBar />)}
    </section>
  );
}

export default SideBar;
