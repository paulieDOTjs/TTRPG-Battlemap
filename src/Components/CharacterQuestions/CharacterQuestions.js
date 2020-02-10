import React, { useState, useContext } from "react";
import "./CharacterQuestions.css";
import * as Actions from "../../State/Actions";

import { GameContext } from "../../State/Context.js";
import Button from "../Button/Button";

function CharacterQuestions(props) {
  const { dispatch } = useContext(GameContext);
  const [characterInfo, setCharacterInfo] = useState({
    name: props.characterValues.name,
    characterID: props.characterValues.characterID,
    movespeed: props.characterValues.movespeed,
    initiative: props.characterValues.initiative,
    color: props.characterValues.color,
    position: { ...props.characterValues.position },
    number: props.number
  });

  function saveCharacter(event) {
    event.preventDefault();

    dispatch({
      type: Actions.UPDATE_CHARACTER_INFO,
      payload: characterInfo
    });
  }

  function deleteCharacter(event) {
    event.preventDefault();

    dispatch({
      type: Actions.DELETE_CHARACTER,
      payload: characterInfo
    });
  }

  return (
    <div className="CharacterQuestions">
      <form>
        <div className="row">
          <div className="col-6"># {props.number + 1} name: </div>
          <div className="col-6">
            <input
              value={characterInfo.name}
              onChange={({ target }) => {
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
                setCharacterInfo({
                  ...characterInfo,
                  initiative: target.value
                });
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
                const string = target.value.replace(/\s/g, "");
                setCharacterInfo({ ...characterInfo, color: string });
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

        <div className="row">
          <div className="col-6">
            <Button
              onClick={saveCharacter}
              style={{ width: "100%" }}
              data-number={props.number}
            >
              Save character
            </Button>
          </div>
          <div className="col-6">
            <Button
              onClick={deleteCharacter}
              style={{ width: "100%" }}
              data-number={props.number}
            >
              Delete character
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CharacterQuestions;
