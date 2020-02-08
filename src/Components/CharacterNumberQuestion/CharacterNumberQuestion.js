import React, { useContext } from "react";
import "./CharacterNumberQuestion.css";
import CharacterQuestions from "../CharacterQuestions/CharacterQuestions";
import * as Actions from "../../State/Actions";

import { GameContext } from "../../State/Context.js";
import Button from "../Button/Button";

function CharacterNumberQuestion(props) {
  const { state } = useContext(GameContext);
  return (
    <>
      <div className="row">
        <div className="col-12">
          Number of characters:{" "}
          <span className="MakeBox">{state.characters.length}</span>
        </div>
      </div>
      <Button
        style={{ width: "100%", marginTop: "12px" }}
        data-action={Actions.ADD_CHARACTER}
      >
        Add a character
      </Button>
      {state.characters.map((values, number) => {
        return (
          <CharacterQuestions
            key={number}
            characterValues={values}
            number={number}
          />
        );
      })}
    </>
  );
}

export default CharacterNumberQuestion;
