import React, { useContext } from "react";
import "./SideBar.css";

import { GameContext } from "../../State/Context.js";
import SideBarEdit from "../SideBarEdit/SideBarEdit";
import SideBarPlay from "../SideBarPlay/SideBarPlay";

function SideBar(props) {
  const { state } = useContext(GameContext);

  return (
    <section className="SideBar">
      {(state.editMode === true && <SideBarEdit />) ||
        (state.editMode === false && <SideBarPlay />)}
    </section>
  );
}

export default SideBar;
