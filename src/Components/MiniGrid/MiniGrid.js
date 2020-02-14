import React from "react";
import "./MiniGrid.css";
import MiniTile from "../MiniTile/MiniTile";

function MiniGrid(props) {
  //An array that will hold all the tiles to be placed on the grid
  const tiles = [];

  let size;

  //For loop to create the tiles
  //It will run for as many times as rows times columns from props.props
  for (
    let i = 0;
    i < props.props.tileMap.length * props.props.tileMap[0].length;
    i++
  ) {
    size = 500 / props.props.tileMap[0].length - 2;

    //Does math to get the row number this tile is in
    const rowNumber = Math.floor(i / props.props.tileMap[0].length) + 1;

    //Does math to get the column number this tile is in
    const colNumber =
      i + 1 - Math.floor((rowNumber - 1) * props.props.tileMap[0].length);

    //Gives an ID based on the row and column number
    const tileID = `Row + ${rowNumber} Col + ${colNumber}`;

    //Creates the tile and pushes it into the tiles array
    tiles.push(
      <MiniTile
        size={size}
        props={props.props}
        data-row={rowNumber}
        data-col={colNumber}
        id={tileID}
        key={tileID}
        //Sets the placement for where the tile will be on the grid
        style={{
          gridColumn: `${colNumber}`,
          gridRow: `${rowNumber}`
        }}
      ></MiniTile>
    );
  }

  /* ***********************************************************
   * This is styling that is applied to the grid so that it has
   * the correct number of rows and columns based on props.props. It
   * will also center it on the screen.
   ************************************************************/
  const styling = {
    gridTemplateColumns: `repeat(${props.props.tileMap[0].length}, auto)`,
    gridTemplateRows: `repeat(${props.props.tileMap.length}, auto)`
  };

  return (
    <>
      <div className="MiniGrid" style={styling}>
        {tiles}
      </div>
    </>
  );
}

export default MiniGrid;
