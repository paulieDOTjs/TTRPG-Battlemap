import React from "react";
import "./ButtonEdit.css";
import Button from "../Button/Button";
import * as Actions from "../../State/Actions";

function ButtonEdit(props) {
  return (
    <Button
      className="ButtonEdit"
      data-action={Actions.TOGGLE_EDIT_MODE}
      name="Edit"
    ></Button>
  );
}

export default ButtonEdit;
