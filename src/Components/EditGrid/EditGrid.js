import React, { useContext, useState, useEffect } from "react";
import "./EditGrid.css";
import Tile from "../Tile/Tile";
import Player from "../Player/Player";
import GameProvider from "../../State/Context";
import { GameContext } from "../../State/Context.js";

const gridSize = 1;

function EditGrid() {
  const { gameState, setGameState } = useContext(GameContext);

  const tileMapLocal = [...gameState.tileMap];

  let tileMapCol = [];

  for (let i = 0; i < gameState.numberOfCols; i++) {
    tileMapCol.push("0");
  }

  for (let i = 0; i < gameState.numberOfRows; i++) {
    tileMapLocal.push(tileMapCol.join(""));
  }

  console.log(tileMapLocal);
  console.log(tileMapLocal[0].length);

  const tiles = [];
  for (let i = 0; i < gameState.numberOfRows * gameState.numberOfCols; i++) {
    const rowNumber = Math.floor(i / gameState.numberOfCols) + 1;
    const colNumber =
      i + 1 - Math.floor((rowNumber - 1) * gameState.numberOfCols);
    const tileID = "Row" + rowNumber + "Col" + colNumber;

    tiles.push(
      <Tile
        data-row={rowNumber}
        data-col={colNumber}
        id={tileID}
        key={tileID}
        style={{
          gridColumn: `${colNumber}`,
          gridRow: `${rowNumber}`
        }}
      ></Tile>
    );
  }
  const styling = {
    gridTemplateColumns: `repeat(${gameState.numberOfCols}, auto)`,
    gridTemplateRows: `repeat(${gameState.numberOfRows}, auto)`,
    left: `Calc(50% - ${gameState.numberOfCols * (gridSize / 2)}rem`
  };

  return (
    <div className="EditGrid" style={styling}>
      <GameProvider>
        <Player
          name="p1"
          numberOfRows={gameState.numberOfRows}
          numberOfCols={gameState.numberOfCols}
        />
      </GameProvider>
      {tiles}
    </div>
  );
}

export default EditGrid;
