import React from "react";
import "./SideBarPlay.css";
import Button from "../Button/Button";
import * as Actions from "../../State/Actions";

function SideBarPlay(props) {
  return (
    <div className="SideBarEdit container">
      <div className="row">
        <div className="col">
          <h1 className="SideBarHeadline">PLAY VIEW</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Button
            style={{ minWidth: "100%" }}
            data-action={Actions.TOGGLE_EDIT_MODE}
          >
            Edit Mode
          </Button>
        </div>
        <div className="col-6">
          <Button style={{ minWidth: "100%" }} data-action={Actions.END_TURN}>
            End Turn
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SideBarPlay;
