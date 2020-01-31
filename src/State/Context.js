import React, { createContext, useState } from "react";

import CreateState from "./CreateState";

import UseKeyboard from "../Hooks/UseKeyboard";

export const GameContext = createContext();

export default function GameProvider(props) {
  const [gameState, setGameState] = useState(CreateState);

  UseKeyboard(gameState, setGameState);

  const value = { gameState, setGameState };

  return (
    <>
      <GameContext.Provider value={value}>
        {props.children}
      </GameContext.Provider>
    </>
  );
}
