import React, { useState } from "react";
import "./CharacterQuestions.css";

function CharacterQuestions(props) {
  const [characterIconColor, setCharacterIconColor] = useState("Black");
  return (
    <div className="CharacterQuestions">
      <div className="row">
        <div className="col-6">Character {props.number + 1} name:</div>
        <input style={{ maxWidth: "44%" }} className="col-6" />
      </div>

      <div className="row">
        <div className="col-6">Move speed:</div>
        <input style={{ maxWidth: "44%" }} className="col-6" />
      </div>

      <div className="row">
        <div className="col-6">Icon color:</div>
        <input
          style={{ maxWidth: "44%" }}
          className="col-5"
          value={characterIconColor}
          onChange={({ target }) => {
            setCharacterIconColor(target.value);
          }}
        />
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
