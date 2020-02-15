import React, { createContext, useReducer, useEffect } from "react";
import uuid from "uuid";

import Reducer from "./Reducer";
import * as Actions from "./Actions";

export const GameContext = createContext();

// const initialState = CreateState;
const initialState = {
  editMode: true,
  selectedObject: 1,
  tileSize: 3,
  turn: 0,
  movespeed: 0,
  diagMove: false,
  movespeedRemaining: 30,
  mapName: "",
  private: false,
  saved: false,
  username: "",
  creator: "",
  editedBy: [],
  characters: [
    {
      name: "Elseth Maleficum",
      characterID: uuid(),
      movespeed: "30",
      initiative: 12,
      color: "Black",
      position: {
        x: 1,
        y: 1
      }
    },
    {
      name: "Kaaglank Cragmolder",
      characterID: uuid(),
      movespeed: "25",
      initiative: 18,
      color: "grey",
      position: {
        x: 8,
        y: 2
      }
    },
    {
      name: "Mira Riverthorn",
      characterID: uuid(),
      movespeed: "35",
      initiative: 19,
      color: "Blue",
      position: {
        x: 4,
        y: 7
      }
    },
    {
      name: "Tymithy Luckleaf",
      characterID: uuid(),
      movespeed: "25",
      initiative: 23,
      color: "rebeccapurple",
      position: {
        x: 9,
        y: 4
      }
    }
  ],
  tileMap: [
    "000000000000000000000000",
    "041111118111118181111150",
    "020000002000002020000020",
    "020000002000003090000020",
    "020000002000000020000020",
    "020000002000000020000020",
    "020000002000000020000020",
    "07110011Q1110111Q1101190",
    "020000000000000000000020",
    "020000000000000000000020",
    "000000000000000000000020",
    "000000000000000000000020",
    "020000000000000000000020",
    "071110011181110111011190",
    "020000000020000000000020",
    "020000000020000000000020",
    "020000000020000000000020",
    "020000000020000000000020",
    "020000000000000000000020",
    "020000000020000000000020",
    "020000000020000000000020",
    "020000000020000000000020",
    "0311111111Q1111111101160",
    "000000000000000000000000"
  ]
};

export default function GameProvider(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function HandleKey(e) {
    if (!state.editMode) {
      if (e.code === "Enter") {
        dispatch({
          type: Actions.END_TURN,
          payload: e.code
        });
      }
      dispatch({
        type: Actions.MOVE_CHARACTER,
        payload: e.code
      });
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", HandleKey);
    return () => window.removeEventListener("keydown", HandleKey);
  }, [state.editMode]);

  function handleClick(e) {
    try {
      e.path.map(x => {
        if (x.dataset.clickable) {
          if (x.dataset.action) {
            dispatch({
              type: x.dataset.action,
              payload: x
            });
          }
        }
      });
    } catch {
      return;
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
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
