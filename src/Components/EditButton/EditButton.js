import React, { useContext } from "react";
import "./EditButton.css";
import Button from "../Button/Button";
import { EditContext } from "../../State/Context.js";

function EditButton(props) {
  const { editable, setEditable } = useContext(EditContext);

  function makeEditable() {
    console.log("hi");
    if (editable === true) {
      setEditable(false);
    } else {
      setEditable(true);
    }
    console.log(editable);
  }

  return (
    <Button className="EditButton" onClick={makeEditable} name="Edit"></Button>
  );
}

export default EditButton;
