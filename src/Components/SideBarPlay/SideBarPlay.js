import React from "react";
import "./SideBarPlay.css";
import ButtonEdit from "../ButtonEdit/ButtonEdit";

function SideBarPlay(props) {
  return (
    <div className="SideBarEdit container">
      <div className="row">
        <div className="col">
          <h1 className="SideBarHeadline">PLAY VIEW</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ButtonEdit />
        </div>
      </div>
    </div>
  );
}

export default SideBarPlay;
