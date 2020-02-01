import React, { useContext } from "react";
import "./SideBar.css";

import { GameContext } from "../../State/Context.js";
import EditSideBar from "../EditSideBar/EditSideBar";
import PlaySideBar from "../PlaySideBar/PlaySideBar";

function SideBar(props) {
  const { state } = useContext(GameContext);

  return (
    <section className="SideBar">
      {(state.editMode === true && <EditSideBar />) ||
        (state.editMode === false && <PlaySideBar />)}
    </section>
  );
}

export default SideBar;
