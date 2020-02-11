import React, { useState, useContext, useEffect } from "react";
import "./CharacterQuestions.css";
import * as Actions from "../../State/Actions";

import { GameContext } from "../../State/Context.js";
import Button from "../Button/Button";

function CharacterQuestions({ number, setCharacterInfo, ...props }) {
  const { dispatch } = useContext(GameContext);
  const characterInfo = {
    name: props.characterValues.name,
    characterID: props.characterValues.characterID,
    movespeed: props.characterValues.movespeed,
    initiative: props.characterValues.initiative,
    color: props.characterValues.color,
    position: { ...props.characterValues.position },
    number: number
  };

  function deleteCharacter(event) {
    event.preventDefault();

    dispatch({
      type: Actions.DELETE_CHARACTER,
      payload: characterInfo
    });
  }

  return (
    <div className="CharacterQuestions">
      <div className="row">
        <div className="col-6"># {number + 1} name: </div>
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
        <div className="col-12">
          <Button
            onClick={deleteCharacter}
            style={{ width: "100%" }}
            data-number={number}
          >
            Delete character
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CharacterQuestions;
