import React from "react";
import "./Grid.css";
import Square from "../Square/Square";
import Player from "../Player/Player";

function Grid(props) {
  const squares = [];
  for (let i = 0; i < props.numberOfRows * props.numberOfColumns; i++) {
    squares.push(<Square id={i + 1}></Square>);
  }

  return (
    <>
      <div className="container">
        <div
          className="Grid visiGrid"
          style={{
            gridTemplateColumns: `repeat(${props.numberOfColumns}, 1fr)`,
            gridTemplateRows: `repeat(${props.numberOfRows}, 1fr)`,
            height: `${props.numberOfRows * 3}rem`,
            width: `${props.numberOfColumns * 3}rem`,
            left:  `Calc(50% - ${props.numberOfColumns * 1.5}rem`
          }}
        >
          {squares}
        </div>
        <div
          className="Grid inviGrid"
          style={{
            gridTemplateColumns: `repeat(${props.numberOfColumns}, 1fr)`,
            gridTemplateRows: `repeat(${props.numberOfRows}, 1fr)`,
            height: `${props.numberOfRows * 3}rem`,
            width: `${props.numberOfColumns * 3}rem`,
            left:  `Calc(50% - ${props.numberOfColumns * 1.5}rem`
          }}
        >
          <Player />
        </div>
      </div>
    </>
  );
}

export default Grid;
