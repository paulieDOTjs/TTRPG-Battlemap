import React, { useState, useContext } from "react";
import "./SideBar.css";

import { EditContext } from "../../State/Context.js";
import EditSideBar from "../EditSideBar/EditSideBar";
import PlaySideBar from "../PlaySideBar/PlaySideBar";

function SideBar(props) {
  const { editable } = useContext(EditContext);

  return (
    <section className="SideBar">
      {(editable === true && <EditSideBar />) ||
        (editable === false && <PlaySideBar />)}
    </section>
  );
}

export default SideBar;
