import React, { useState } from "react";
import "./CharacterQuestions.css";

function CharacterQuestions(props) {
  const [characterIconColor, setCharacterIconColor] = useState("Black");
  return (
    <div className="CharacterQuestions">
      <div className="row">
        <div className="col-6">Character {props.number + 1} name:</div>
        <div className="col-6">
          <input />
        </div>
      </div>

      <div className="row">
        <div className="col-6">Move speed:</div>
        <div className="col-6">
          <input />
        </div>
      </div>

      <div className="row">
        <div className="col-6">Icon color:</div>
        <div className="col-5">
          <input
            value={characterIconColor}
            onChange={({ target }) => {
              setCharacterIconColor(target.value);
            }}
          />
        </div>
        <div className="col-1" style={{ marginLeft: 0 }}>
          <div
            className="CharacterIconSetup"
            style={{ backgroundColor: characterIconColor }}
          />
        </div>
      </div>
    </div>
  );
}

export default CharacterQuestions;
