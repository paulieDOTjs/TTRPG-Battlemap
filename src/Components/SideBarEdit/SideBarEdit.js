import React, { useMemo, useState, useContext } from "react";
import "./SideBarEdit.css";
import ObjectSelector from "../ObjectSelector/ObjectSelector";
import Button from "../Button/Button";
import CharacterNumberQuestion from "../CharacterNumberQuestion/CharacterNumberQuestion";
import * as Actions from "../../State/Actions";

import { GameContext } from "../../State/Context.js";

function SideBarEdit(props) {
  const { state, dispatch } = useContext(GameContext);
  const [mapInfo, setMapInfo] = useState({
    x: state.tileMap[0].length,
    y: state.tileMap.length
  });

  const characters = [...state.characters];

  function handleSubmit(e) {
    e.preventDefault();
    let newValues = mapInfo;
    newValues.x = parseInt(newValues.x);
    newValues.y = parseInt(newValues.y);

    dispatch({
      type: Actions.CREATE_MAP,
      payload: newValues
    });
  }

  return useMemo(() => {
    return (
      <div className="SideBarEdit container">
        <div className="row">
          <div className="col">
            <h1 className="SideBarHeadline">EDIT VIEW</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Button
              data-action={Actions.TOGGLE_EDIT_MODE}
              style={{ minWidth: "100%" }}
            >
              Play Mode
            </Button>
          </div>
          <div className="col-6">
            <Button data-action={Actions.SAVE_MAP} style={{ minWidth: "100%" }}>
              Save map
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Button
              data-action={Actions.USE_SELECTED_MAP}
              style={{ minWidth: "100%" }}
            >
              View saved maps
            </Button>
          </div>
          <div className="col-6">
            <Button
              data-action={Actions.USE_SELECTED_MAP}
              style={{ minWidth: "100%" }}
            >
              View public maps
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h3 style={{ marginBottom: 0 }}>Edit Map Details:</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-6">Map name: </div>
          <div className="col-6">
            <input
              value={state.mapName}
              onChange={({ target }) => {
                dispatch({
                  type: Actions.UPDATE_MAP_NAME,
                  payload: target.value
                });
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-5">Private map:</div>
          <div className="col-1">
            <div
              style={{ marginLeft: "-10px", cursor: "pointer" }}
              className={
                state.private
                  ? "FakeCheckbox checkBoxOn"
                  : "FakeCheckbox checkBoxOff"
              }
              data-clickable={true}
              data-action={Actions.TOGGLE_PRIVATE_MAP}
            ></div>
          </div>
          <div className="col-5">Saved:</div>
          <div className="col-1">
            <div
              style={{ marginLeft: "-10px" }}
              className={
                state.saved
                  ? "FakeCheckbox checkBoxOn"
                  : "FakeCheckbox checkBoxOff"
              }
              data-clickable={true}
            ></div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h3 style={{ marginBottom: 0 }}>Edit Map Layout:</h3>
          </div>
        </div>

        <form className="SetupForm" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">Number of columns:</div>
            <div className="col-6">
              <input
                value={mapInfo.x}
                onChange={({ target }) => {
                  setMapInfo({ ...mapInfo, x: target.value });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">Number of rows:</div>
            <div className="col-6">
              <input
                value={mapInfo.y}
                onChange={({ target }) => {
                  setMapInfo({ ...mapInfo, y: target.value });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Button
                style={{ minWidth: "100%" }}
                data-action={Actions.NO_ACTION}
              >
                Submit
              </Button>
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col">
            <h3 style={{ marginBottom: 0 }}>Edit Map Objects:</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <ObjectSelector tiletype="1" />
          </div>
          <div className="col-6">
            <ObjectSelector tiletype="4" />
          </div>
          <div className="col-6">
            <ObjectSelector tiletype="8" />
          </div>
          <div className="col-6">
            <ObjectSelector tiletype="W" />
          </div>
          <div className="col-12">
            <ObjectSelector tiletype="0" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h3 style={{ marginBottom: 0 }}>Edit Characters:</h3>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <CharacterNumberQuestion props={characters} />
          </div>
        </div>
      </div>
    );
  }, [
    state.editMode,
    state.saved,
    state.private,
    mapInfo,
    state.characters,
    state.mapName
  ]);
}

export default SideBarEdit;
