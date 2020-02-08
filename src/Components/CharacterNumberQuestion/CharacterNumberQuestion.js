import React, { useState, useEffect, useContext } from "react";
import "./CharacterNumberQuestion.css";
import CharacterQuestions from "../CharacterQuestions/CharacterQuestions";
import * as Actions from "../../State/Actions";

import { GameContext } from "../../State/Context.js";

function CharacterNumberQuestion(props) {
  const { dispatch } = useContext(GameContext);
  const [numberOfCharacters, setNumberOfCharacters] = useState(
    props.props.length
  );

  const defaultCharacterInfo = {
    name: "Player",
    movespeed: "30",
    initiative: 0,
    color: "Red",
    position: {
      x: 1,
      y: 1
    }
  };

  // useEffect(() => {
  //   dispatch({
  //     type: Actions.UPDATE_NUMBER_OF_CHARACTERS,
  //     payload: numberOfCharacters
  //   });
  // }, [numberOfCharacters]);

  const characterQuestions = [];

  try {
    for (let i = 0; i < numberOfCharacters; i++) {
      if (i > props.props.length - 1) {
        console.log("hi");
        characterQuestions.push(
          <CharacterQuestions
            key={i}
            characterValues={defaultCharacterInfo}
            number={i}
          />
        );
      } else {
        characterQuestions.push(
          <CharacterQuestions
            key={i}
            characterValues={props.props[i]}
            number={i}
          />
        );
      }
    }
  } catch {
    return;
  }
  return (
    <>
      <div className="row">
        <div className="col-6">Number of characters:</div>
        <div className="col-6">
          <input
            value={numberOfCharacters}
            onChange={({ target }) => {
              setNumberOfCharacters(target.value);
            }}
          />
        </div>
      </div>
      {characterQuestions}
    </>
  );
}

export default CharacterNumberQuestion;
