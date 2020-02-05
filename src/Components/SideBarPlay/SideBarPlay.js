import React, { useContext } from "react";
import "./SideBarPlay.css";
import Button from "../Button/Button";
import * as Actions from "../../State/Actions";
import CharacterDisplay from "../CharacterDisplay/CharacterDisplay";
import { GameContext } from "../../State/Context.js";

function SideBarPlay(props) {
  const { state } = useContext(GameContext);
  const characterDisplays = [];
  for (let i = 0; i < state.characters.length; i++) {
    if (state.turn === i) {
      characterDisplays.push(
        <CharacterDisplay
          className="Highlight CharacterDisplay row"
          props={state.characters[i]}
        />
      );
    } else {
      characterDisplays.push(
        <CharacterDisplay
          className="CharacterDisplay row"
          props={state.characters[i]}
        />
      );
    }
  }

  return (
    <div className="SideBarPlay container">
      <div className="row">
        <div className="col">
          <h1 className="SideBarHeadline" style={{ color: "#FFB417" }}>
            PLAY VIEW
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Button
            style={{ minWidth: "100%" }}
            data-action={Actions.TOGGLE_EDIT_MODE}
            className="Button LightMode"
          >
            Edit Mode
          </Button>
        </div>
        <div className="col-6">
          <Button
            style={{ minWidth: "100%" }}
            data-action={Actions.END_TURN}
            className="Button LightMode"
          >
            End Turn
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h3 style={{ margin: 0 }}>Characters</h3>
        </div>
      </div>
      <div className="CharacterDisplaySection">{characterDisplays}</div>
      <div className="row">
        <div className="col-12">
          {state.movespeedRemaining}
        </div>
      </div>
    </div>
  );
}

export default SideBarPlay;
