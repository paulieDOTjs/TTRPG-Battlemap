import React, { useContext } from "react";
import "./EditButton.css";
import Button from "../Button/Button";
import { GameContext } from "../../State/Context.js";

function EditButton(props) {
  const { gameState, setGameState } = useContext(GameContext);

  function makeEditable() {
    if (gameState.editMode === true) {
      setGameState({ ...gameState, editMode: false });
    } else {
      setGameState({ ...gameState, editMode: true });
    }
  }

  return (
    <Button className="EditButton" onClick={makeEditable} name="Edit"></Button>
  );
}

export default EditButton;
