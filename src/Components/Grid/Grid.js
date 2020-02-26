import React, { useMemo, useContext } from "react";
import "./Grid.css";
import Tile from "../Tile/Tile";
import Character from "../Character/Character";
import Resizer from "../Resizer/Resizer";
import { GameContext } from "../../State/Context.js";

function Grid() {
  //Gets state from context
  const { state } = useContext(GameContext);

  //An array that will hold all the tiles to be placed on the grid
  const tiles = [];
  const characters = [];

  for (let i = 0; i < state.characters.length; i++) {
    characters.push(
      <Character
        key={"character" + i}
        props={state.characters[i]}
        highlight={i === state.turn ? "true" : "false"}
      />
    );
  }

  //For loop to create the tiles
  //It will run for as many times as rows times columns from state
  for (let i = 0; i < state.tileMap.length * state.tileMap[0].length; i++) {
    //Does math to get the row number this tile is in
    const rowNumber = Math.floor(i / state.tileMap[0].length) + 1;

    //Does math to get the column number this tile is in
    const colNumber =
      i + 1 - Math.floor((rowNumber - 1) * state.tileMap[0].length);

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
          height: state.tileSize + "rem",
          width: state.tileSize + "rem",
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
    gridTemplateColumns: `repeat(${state.tileMap[0].length}, auto)`,
    gridTemplateRows: `repeat(${state.tileMap.length}, auto)`,
    height: `Calc(${state.tileMap.length * state.tileSize}rem + ${
      state.tileMap.length
    }px + ${state.tileMap.length}px )`,
    width: `Calc(${state.tileMap[0].length * state.tileSize}rem + ${
      state.tileMap[0].length
    }px + ${state.tileMap[0].length}px )`
  };
  return useMemo(() => {
    return (
      <div
        className="Gap"
        style={{
          height: styling.height + "50px",
          width: styling.width + "150px"
        }}
      >
        <div className="Grid" style={styling}>
          {state.editMode ? "" : characters}
          {tiles}
        </div>
        <Resizer />
      </div>
    );
  }, [state.tileMap, state.characters, state.tileSize, state.turn]);
}

export default Grid;
