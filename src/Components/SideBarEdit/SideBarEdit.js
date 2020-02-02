import React from "react";
import "./SideBarEdit.css";
import ObjectSelector from "../ObjectSelector/ObjectSelector";

function SideBarEdit(props) {
  return (
    <div className="SideBarEdit">
      <h1>EDIT MODE</h1>
      <ObjectSelector tiletype="0" />
      <ObjectSelector tiletype="1" />
      <ObjectSelector tiletype="2" />
      <ObjectSelector tiletype="3" />
      <ObjectSelector tiletype="4" />
      <ObjectSelector tiletype="5" />
      <ObjectSelector tiletype="6" />
      <ObjectSelector tiletype="7" />
      <ObjectSelector tiletype="8" />
      <ObjectSelector tiletype="9" />
      <ObjectSelector tiletype="Q" />
    </div>
  );
}

export default SideBarEdit;
