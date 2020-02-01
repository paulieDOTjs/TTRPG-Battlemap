import React from "react";
import "./ButtonMap.css";
import Button from "../Button/Button";
import * as Actions from "../../State/Actions";

function ButtonMap(props) {
  return (
    <Button
      className="ButtonMap"
      data-action={Actions.CREATE_MAP}
      name="Create Map"
    ></Button>
  );
}

export default ButtonMap;
