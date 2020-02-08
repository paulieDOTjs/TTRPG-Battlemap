import React, { useEffect, useState, useContext } from "react";
import "./CharacterQuestions.css";
import * as Actions from "../../State/Actions";

import { GameContext } from "../../State/Context.js";

function CharacterQuestions(props) {
  console.log(props.characterValues.position);
  const { dispatch } = useContext(GameContext);
  const [characterInfo, setCharacterInfo] = useState({
    name: props.characterValues.name,
    movespeed: props.characterValues.movespeed,
    initiative: props.characterValues.initiative,
    color: props.characterValues.color,
    position: { ...props.characterValues.position },
    number: props.number
  });

  useEffect(() => {
    return () =>
      dispatch({
        type: Actions.UPDATE_CHARACTER_INFO,
        payload: characterInfo
      });
  }, [characterInfo]);

  return (
    <div className="CharacterQuestions">
      <div className="row">
        <div className="col-6"># {props.number + 1} name: </div>
        <div className="col-6">
          <input
            value={characterInfo.name}
            onChange={({ target }) => {
              console.log(characterInfo);
              setCharacterInfo({ ...characterInfo, name: target.value });
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-6">Initiative:</div>
        <div className="col-6">
          <input
            value={characterInfo.initiative}
            onChange={({ target }) => {
              console.log(characterInfo);
              setCharacterInfo({ ...characterInfo, initiative: target.value });
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-6">Move speed:</div>
        <div className="col-6">
          <input
            value={characterInfo.movespeed}
            onChange={({ target }) => {
              console.log(characterInfo);
              setCharacterInfo({ ...characterInfo, movespeed: target.value });
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-6">Icon color:</div>
        <div className="col-5">
          <input
            value={characterInfo.color}
            onChange={({ target }) => {
              console.log(characterInfo);
              setCharacterInfo({ ...characterInfo, color: target.value });
            }}
          />
        </div>
        <div
          className="col-1"
          style={{ marginLeft: "-3px", marginTop: "10px" }}
        >
          <div
            className="CharacterIconSetup"
            style={{ backgroundColor: characterInfo.color }}
          />
        </div>
      </div>
    </div>
  );
}

export default CharacterQuestions;
