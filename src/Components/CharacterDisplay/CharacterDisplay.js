import React from "react";
import "./CharacterDisplay.css";
import CharacterIcon from "../CharacterIcon/CharacterIcon";
import CharacterInfo from "../CharacterInfo/CharacterInfo";

function CharacterDisplay(props) {
  return (
    <div className={props.className} {...props}>
      <div className="col-4 CharacterIconBox">
        <CharacterIcon color={props.props.color} />
      </div>
      <div className="col-8" style={{ margin: 0 }}>
        <CharacterInfo props={props.props} />
      </div>
    </div>
  );
}

export default CharacterDisplay;
