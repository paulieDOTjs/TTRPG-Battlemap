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
  selectedObject: 0,
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
  ]
};

export default function GameProvider(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function HandleKey(e) {
    dispatch({
      type: Actions.MOVE_CHARACTER,
      payload: e.code
    });
  }

  useEffect(() => {
    window.addEventListener("keydown", HandleKey);
    return () => window.removeEventListener("keydown", HandleKey);
  }, []);

  function handleClick(e) {
    if (e.target.dataset.clickable) {
      dispatch({
        type: e.target.dataset.action,
        payload: e
      });
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("keydown", handleClick);
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
