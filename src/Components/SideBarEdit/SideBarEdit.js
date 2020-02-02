import React from "react";
import "./SideBarEdit.css";
import ObjectSelector from "../ObjectSelector/ObjectSelector";

function SideBarEdit(props) {
  return (
    <div className="SideBarEdit container">
      <div className="row">
        <div className="col">
          <h1 className="SideBarHeadline">EDIT MODE</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ObjectSelector tiletype="0" />
        </div>
        <div className="col-6">
          <ObjectSelector tiletype="1" />
        </div>
        <div className="col-6">
          <ObjectSelector tiletype="3" />
        </div>
        <div className="col-6">
          <ObjectSelector tiletype="7" />
        </div>
      </div>
    </div>
  );
}

export default SideBarEdit;
