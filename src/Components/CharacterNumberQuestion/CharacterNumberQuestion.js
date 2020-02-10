import React from "react";
import "./CharacterNumberQuestion.css";
import CharacterQuestions from "../CharacterQuestions/CharacterQuestions";
import * as Actions from "../../State/Actions";

import Button from "../Button/Button";

function CharacterNumberQuestion(props) {
  return (
    <>
      <div className="row">
        <div className="col-12">
          Number of characters:{" "}
          <span className="MakeBox">{props.props.length}</span>
        </div>
      </div>
      <Button
        style={{ width: "100%", marginTop: "12px" }}
        data-action={Actions.ADD_CHARACTER}
      >
        Add a character
      </Button>
      {props.props.map((values, number) => {
        return (
          <CharacterQuestions
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
