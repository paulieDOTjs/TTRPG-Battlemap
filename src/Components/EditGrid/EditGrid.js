import React, { useContext, useState, useEffect, useReducer } from "react";
import "./EditGrid.css";
import Tile from "../Tile/Tile";
import Player from "../Player/Player";
import { GameContext } from "../../State/Context.js";

const gridSize = 1;

function EditGrid() {
  const { state } = useContext(GameContext);

  const tiles = [];
  for (let i = 0; i < state.numberOfRows * state.numberOfCols; i++) {
    const rowNumber = Math.floor(i / state.numberOfCols) + 1;
    const colNumber = i + 1 - Math.floor((rowNumber - 1) * state.numberOfCols);
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
    gridTemplateColumns: `repeat(${state.numberOfCols}, auto)`,
    gridTemplateRows: `repeat(${state.numberOfRows}, auto)`,
    left: `Calc(50% - ${state.numberOfCols * (gridSize / 2)}rem`
  };

  return (
    <div className="EditGrid" style={styling}>
      <Player
        name="p1"
        numberOfRows={state.numberOfRows}
        numberOfCols={state.numberOfCols}
      />
      {tiles}
    </div>
  );
}

export default EditGrid;
