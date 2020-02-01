import React, { createContext, useReducer, useEffect } from "react";

// import CreateState from "./CreateState";
import Reducer from "./Reducer";
import * as Actions from "./Actions";

// import UseKeyboard from "../Hooks/UseKeyboard";

export const GameContext = createContext();

// const initialState = CreateState;
const initialState = {
  editMode: true,
  mapPosition: { left: 0, top: 0 },
  numberOfCols: 32,
  numberOfRows: 32,
  player1position: { x: 1, y: 1 },
  tileMap: [
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000",
    "00000000000000000000000000000000"
  ],
  selectedObject: 1
};

export default function GameProvider(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function keepInGrid(object) {
    if (object.x < 1) {
      object.x = 1;
    }
    if (object.y < 1) {
      object.y = 1;
    }
    if (object.x > state.numberOfCols) {
      object.x = state.numberOfCols;
    }
    if (object.y > state.numberOfRows) {
      object.y = state.numberOfRows;
    }
    return object;
  }

  function HandleKey(e) {
    let newPosition = state.player1position;
    if (e.code === "KeyQ" || e.code === "KeyA" || e.code === "KeyZ") {
      newPosition.x--;
      keepInGrid(newPosition);
    }
    if (e.code === "KeyE" || e.code === "KeyD" || e.code === "KeyX") {
      newPosition.x++;
      keepInGrid(newPosition);
    }
    if (e.code === "KeyS" || e.code === "KeyZ" || e.code === "KeyX") {
      newPosition.y++;
      keepInGrid(newPosition);
    }
    if (e.code === "KeyQ" || e.code === "KeyW" || e.code === "KeyE") {
      newPosition.y--;
      keepInGrid(newPosition);
    }
    dispatch({
      type: Actions.MOVE_CHARACTER,
      payload: newPosition
    });
  }

  function test(e) {
    if (e.toElement.dataset.clickable) {
      dispatch({
        type: e.toElement.dataset.action,
        payload: e
      });
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", HandleKey);
    return () => window.removeEventListener("keydown", HandleKey);
  }, []);

  useEffect(() => {
    window.addEventListener("click", test);
    return () => window.removeEventListener("keydown", test);
  }, []);

  const value = { state, dispatch, Actions };

  return (
    <>
      <GameContext.Provider value={value}>
        {props.children}
      </GameContext.Provider>
    </>
  );
}
