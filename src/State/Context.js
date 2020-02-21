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
      characterID: "c2d49bd1-fc19-4fca-9285-9db2608b5b38",
      movespeed: "30",
      initiative: 12,
      color: "Black",
      number: 0,
      position: { x: "4", y: "10" }
    },
    {
      name: "Kaaglank Cragmolder",
      characterID: "aced4e09-4d81-4321-90f0-28d7f6b53675",
      movespeed: "25",
      initiative: 18,
      color: "grey",
      number: 3,
      position: { x: "4", y: "7" }
    },

    {
      name: "Mira Riverthorn",
      characterID: "46848a29-364e-4abd-9ae3-477a73fad249",
      movespeed: "35",
      initiative: 19,
      color: "Blue",
      number: 2,
      position: { x: "3", y: "9" }
    },

    {
      name: "Tymithy Luckleaf",
      characterID: "e2655263-bc2a-4329-8c35-921ae7c7ee9e",
      movespeed: "25",
      initiative: 23,
      color: "rebeccapurple",
      number: 1,
      position: { x: "6", y: "5" }
    },

    {
      name: "1 Mercenary",
      characterID: "4ad3b248-3e2d-426c-bdc2-5c91d8dbe061",
      movespeed: "30",
      initiative: "19",
      color: "Red",
      number: 4,
      position: { x: "8", y: "5" }
    },

    {
      name: "2 Mercenary",
      characterID: "b3a49185-8297-4059-b5a2-0d535e390ba9",
      movespeed: "30",
      initiative: "16",
      color: "red",
      number: 5,
      position: { x: "11", y: "10" }
    },

    {
      name: "3 Mercenary",
      characterID: "9f6034a4-a2a0-44d8-96aa-0c20b001f25e",
      movespeed: "30",
      initiative: "11",
      color: "red",
      number: 9,
      position: { x: "10", y: "9" }
    },

    {
      name: "4 Mercenary",
      characterID: "ef530156-245d-4ece-b751-7eed43a04ca0",
      movespeed: "30",
      initiative: "6",
      color: "red",
      number: 8,
      position: { x: "9", y: "10" }
    },

    {
      name: "Bartender",
      characterID: "b0bf9faf-c347-489f-b4d5-d3b2895f0c29",
      movespeed: "30",
      initiative: "4",
      color: "pink",
      number: 7,
      position: { x: "6", y: "3" }
    },

    {
      name: "5 Mercenary",
      characterID: "b5db6bb9-761d-45ab-8e4e-f3b3157f72f8",
      movespeed: "30",
      initiative: "2",
      color: "red",
      number: 6,
      position: { x: "10", y: "11" }
    }
  ],
  tileMap: [
    "0000000000000000",
    "0411111111101150",
    "0200000000000020",
    "0200111111110020",
    "0200000000000020",
    "0200000000000020",
    "07100W00W00W0190",
    "0200000000000020",
    "0200000000000020",
    "071000W00W000190",
    "0200000000000020",
    "0311111001111160",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000"
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
