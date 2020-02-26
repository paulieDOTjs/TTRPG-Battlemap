import React, { useContext } from "react";
import "./Resizer.css";
import Button from "../Button/Button";
import * as Actions from "../../State/Actions";
import { GameContext } from "../../State/Context.js";

function Resizer(props) {
  const { dispatch } = useContext(GameContext);

  function handlePlus(e) {
    dispatch({
      type: Actions.UPDATE_MAP_ZOOM,
      payload: "plus"
    });
  }
  function handleMinus(e) {
    dispatch({
      type: Actions.UPDATE_MAP_ZOOM,
      payload: "minus"
    });
  }

  return (
    <div className="Resizer">
      <div className="row">
        <div className="col-12" style={{ textAlign: "center" }}>
          Resize map
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Button style={{ width: "100%" }} onClick={handleMinus}>
            -
          </Button>
        </div>
        <div className="col-6">
          <Button
            style={{ width: "100%", marginRight: "10px" }}
            onClick={handlePlus}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Resizer;
