import React from "react";
import "./SideBarEdit.css";
import ObjectSelector from "../ObjectSelector/ObjectSelector";
import ButtonEdit from "../ButtonEdit/ButtonEdit";

function SideBarEdit(props) {
  return (
    <div className="SideBarEdit container">
      <div className="row">
        <div className="col">
          <h1 className="SideBarHeadline">EDIT VIEW</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ButtonEdit />
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
