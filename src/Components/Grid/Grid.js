import React, { useContext } from "react";
import "./Grid.css";
import Tile from "../Tile/Tile";
import Player from "../Player/Player";
import { GameContext } from "../../State/Context.js";

const gridSize = 1;

function Grid() {
  //Gets state from context
  const { state } = useContext(GameContext);

  //An array that will hold all the tiles to be placed on the grid
  const tiles = [];

  //For loop to create the tiles
  //It will run for as many times as rows times columns from state
  for (let i = 0; i < state.numberOfRows * state.numberOfCols; i++) {
    //Does math to get the row number this tile is in
    const rowNumber = Math.floor(i / state.numberOfCols) + 1;

    //Does math to get the column number this tile is in
    const colNumber = i + 1 - Math.floor((rowNumber - 1) * state.numberOfCols);

    //Gives an ID based on the row and column number
    const tileID = `Row + ${rowNumber} Col + ${colNumber}`;

    //Creates the tile and pushes it into the tiles array
    tiles.push(
      <Tile
        data-row={rowNumber}
        data-col={colNumber}
        id={tileID}
        key={tileID}
        //Sets the placement for where the tile will be on the grid
        style={{
          gridColumn: `${colNumber}`,
          gridRow: `${rowNumber}`
        }}
      ></Tile>
    );
  }

  /* ***********************************************************
   * This is styling that is applied to the grid so that it has
   * the correct number of rows and columns based on state. It
   * will also center it on the screen.
   ************************************************************/
  const styling = {
    gridTemplateColumns: `repeat(${state.numberOfCols}, auto)`,
    gridTemplateRows: `repeat(${state.numberOfRows}, auto)`,
    left: `Calc(50% - ${state.numberOfCols * (gridSize / 2)}rem`
  };

  return (
    <div className="Grid" style={styling}>
      <Player
        name="p1"
        numberOfRows={state.numberOfRows}
        numberOfCols={state.numberOfCols}
      />
      {tiles}
    </div>
  );
}

export default Grid;
