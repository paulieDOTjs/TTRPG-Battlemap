import React, { useContext } from "react";
import "./Grid.css";
import Tile from "../Tile/Tile";
import Player from "../Player/Player";
import GameProvider from "../../State/Context";

const gridSize = 1;

const numberOfColumns = 32;
const numberOfRows = 32;

function Grid() {
  const tiles = [];
  for (let i = 0; i < numberOfRows * numberOfColumns; i++) {
    const rowNumber = Math.floor(i / numberOfColumns) + 1;
    const colNumber = i + 1 - Math.floor((rowNumber - 1) * numberOfColumns);
    const tileID = "Row" + rowNumber + "Col" + colNumber;
    tiles.push(
      <Tile
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
    gridTemplateColumns: `repeat(${numberOfColumns}, auto)`,
    gridTemplateRows: `repeat(${numberOfRows}, auto)`,
    left: `Calc(50% - ${numberOfColumns * (gridSize / 2)}rem`
  };

  return (
    <div className="Grid visiGrid" style={styling}>
      <GameProvider>
        <Player
          name="p1"
          numberOfRows={numberOfRows}
          numberOfColumns={numberOfColumns}
        />
      </GameProvider>
      {tiles}
    </div>
  );
}

export default Grid;
