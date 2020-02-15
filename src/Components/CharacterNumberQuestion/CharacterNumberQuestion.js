import React, { useState, useEffect, useContext } from "react";
import "./CharacterNumberQuestion.css";
import CharacterQuestions from "../CharacterQuestions/CharacterQuestions";
import * as Actions from "../../State/Actions";
import { GameContext } from "../../State/Context.js";

import Button from "../Button/Button";

function CharacterNumberQuestion(props) {
  const { dispatch } = useContext(GameContext);
  const [characters, setCharacters] = useState(props.props);

  function saveAllCharacters() {
    dispatch({
      type: Actions.UPDATE_CHARACTER_INFO,
      payload: characters
    });
  }

  useEffect(() => {
    setCharacters(props.props);
  }, [props.props]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          Number of characters:{" "}
          <span className="MakeBox">{characters.length}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Button
            style={{ width: "100%", marginTop: "12px" }}
            onClick={saveAllCharacters}
            data-action={Actions.ADD_CHARACTER}
          >
            Add a character
          </Button>
        </div>
        <div className="col-6">
          <Button
            style={{ width: "100%", marginTop: "12px" }}
            onClick={saveAllCharacters}
          >
            Save characters
          </Button>
        </div>
      </div>

      {characters.map((values, number) => {
        return (
          <CharacterQuestions
            setCharacterInfo={character => {
              const newCharacters = [...characters];
              newCharacters[number] = character;
              setCharacters(newCharacters);
            }}
            key={values.characterID}
            characterValues={{ ...values }}
            number={number}
          />
        );
      })}
    </>
  );
}

export default CharacterNumberQuestion;
