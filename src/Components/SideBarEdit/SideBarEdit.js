import React from "react";
import "./SideBarEdit.css";
import ObjectSelector from "../ObjectSelector/ObjectSelector";
import Button from "../Button/Button";
import * as Action from "../../State/Actions";

function SideBarEdit(props) {
  return (
    <div className="SideBarEdit container">
      <div className="row">
        <div className="col">
          <h1 className="SideBarHeadline">EDIT VIEW</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Button
            data-action={Action.TOGGLE_EDIT_MODE}
            style={{ minWidth: "100%" }}
          >
            Play Mode
          </Button>
        </div>
        <div className="col-6">
          <Button data-action={Action.CREATE_MAP} style={{ minWidth: "100%" }}>
            Reset Map
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ObjectSelector tiletype="1" />
        </div>
        <div className="col-6">
          <ObjectSelector tiletype="4" />
        </div>
        <div className="col-6">
          <ObjectSelector tiletype="8" />
        </div>
        <div className="col-6">
          <ObjectSelector tiletype="W" />
        </div>
        <div className="col-12">
          <ObjectSelector tiletype="0" />
        </div>
      </div>
    </div>
  );
}

export default SideBarEdit;
