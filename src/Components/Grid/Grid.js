import React from "react";
import "./Grid.css";
import Square from "../Square/Square";
import Player from "../Player/Player";
const gridSize = 4;

function Grid(props) {
  const squares = [];
  for (let i = 0; i < props.numberOfRows * props.numberOfColumns; i++) {
    squares.push(<Square id={i + 1}></Square>);
  }

  return (
    <>
      <div className="container">
        <div
          className="Grid inviGrid"
          style={{
            gridTemplateColumns: `repeat(${props.numberOfColumns}, 1fr)`,
            gridTemplateRows: `repeat(${props.numberOfRows}, 1fr)`,
            height: `${props.numberOfRows * gridSize}rem`,
            width: `${props.numberOfColumns * gridSize}rem`,
            left: `Calc(50% - ${props.numberOfColumns * (gridSize / 2)}rem`
          }}
        >
          <Player name="p1" player1={props.player1} />
        </div>
        <div
          className="Grid visiGrid"
          style={{
            gridTemplateColumns: `repeat(${props.numberOfColumns}, 1fr)`,
            gridTemplateRows: `repeat(${props.numberOfRows}, 1fr)`,
            height: `${props.numberOfRows * gridSize}rem`,
            width: `${props.numberOfColumns * gridSize}rem`,
            left: `Calc(50% - ${props.numberOfColumns * (gridSize / 2)}rem`
          }}
        >
          {squares}
        </div>
      </div>
    </>
  );
}

export default Grid;
