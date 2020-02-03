import React, { useContext } from "react";
import "./ButtonEdit.css";
import Button from "../Button/Button";
import * as Actions from "../../State/Actions";

import { GameContext } from "../../State/Context.js";

function ButtonEdit(props) {
  const { state } = useContext(GameContext);
  return (
    <Button className="ButtonEdit" data-action={Actions.TOGGLE_EDIT_MODE}>
      {state.editMode ? "Play View" : "Edit View"}
    </Button>
  );
}

export default ButtonEdit;
