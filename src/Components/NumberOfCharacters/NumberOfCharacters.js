import React, { useState } from "react";
import "./NumberOfCharacters.css";
import CharacterQuestions from "../CharacterQuestions/CharacterQuestions";

function NumberOfCharacters(props) {
  const [numberOfCharacters, setNumberOfCharacters] = useState();
  const characterQuestions = [];

  for (let i = 0; i < numberOfCharacters; i++) {
    characterQuestions.push(<CharacterQuestions number={i} />);
  }
  return (
    <>
      <div className="row">
        <div className="col-6">Number of players:</div>
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

export default NumberOfCharacters;
