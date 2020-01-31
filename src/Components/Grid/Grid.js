import React from "react";
import "./Grid.css";
import Tile from "../Tile/Tile";
import Player from "../Player/Player";

const gridSize = 1;

function Grid(props) {
  const tiles = [];
  for (let i = 0; i < props.numberOfRows * props.numberOfColumns; i++) {
    const rowNumber = Math.floor(i / props.numberOfColumns) + 1;
    const colNumber =
      i + 1 - Math.floor((rowNumber - 1) * props.numberOfColumns);
    const tileID = "Row" + rowNumber + "Col" + colNumber;
    tiles.push(
      <Tile
        id={tileID}
        style={{
          gridColumn: `${colNumber} / ${colNumber + 1}`,
          gridRow: `${rowNumber} / ${rowNumber + 1}`
        }}
      ></Tile>
    );
  }

  const styling = {
    gridTemplateColumns: `repeat(${props.numberOfColumns}, auto)`,
    gridTemplateRows: `repeat(${props.numberOfRows}, auto)`,
    left: `Calc(50% - ${props.numberOfColumns * (gridSize / 2)}rem`
  };

  return (
    <div className="Grid visiGrid" style={styling}>
      <Player
        name="p1"
        numberOfRows={props.numberOfRows}
        numberOfColumns={props.numberOfColumns}
      />
      {tiles}
    </div>
  );
}

export default Grid;
