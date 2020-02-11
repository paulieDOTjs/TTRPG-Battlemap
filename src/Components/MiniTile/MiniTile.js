import React from "react";
import "./MiniTile.css";
import Wall from "../Wall/Wall";
import WallCorner from "../WallCorner/WallCorner";
import WallT from "../WallT/WallT";
import WallX from "../WallX/WallX";
import { tileMapDirectory } from "../../Utils/tileMapDirectory";

function MiniTile(props) {
  /***************************************************
   * saving variable of how the string is written on
   * the component since "-" can't be used in js
   *************************************************/
  const dataRow = "data-row";
  const dataCol = "data-col";

  /*****************************************************
   * These are the row number and column number of this
   * individual tile
   *****************************************************/
  const thisTileRow = props[dataRow];
  const thisTileCol = props[dataCol];

  /*************************************************
   * This is the tile map of the row that this tile
   * is a part of.
   ************************************************/
  const tileMapThisRow = props.props.tileMap[thisTileRow - 1];

  /*************************************************
   * This is the individual character of the tile map
   * that represents this individual tile
   *************************************************/
  const tileMapThisRowAndCol = tileMapThisRow.charAt(thisTileCol - 1);

  return (
    <div
      className="MiniTile"
      tiletype={tileMapThisRowAndCol}
      style={{ height: `${props.size}px`, width: `${props.size}px` }}
    >
      {(tileMapThisRowAndCol === "1" && (
        <Wall wallClass={tileMapDirectory[tileMapThisRowAndCol].className} />
      )) ||
        (tileMapThisRowAndCol === "2" && (
          <Wall wallClass={tileMapDirectory[tileMapThisRowAndCol].className} />
        )) ||
        (tileMapThisRowAndCol === "3" && (
          <WallCorner
            wallClass={tileMapDirectory[tileMapThisRowAndCol].className}
          />
        )) ||
        (tileMapThisRowAndCol === "4" && (
          <WallCorner
            wallClass={tileMapDirectory[tileMapThisRowAndCol].className}
          />
        )) ||
        (tileMapThisRowAndCol === "5" && (
          <WallCorner
            wallClass={tileMapDirectory[tileMapThisRowAndCol].className}
          />
        )) ||
        (tileMapThisRowAndCol === "6" && (
          <WallCorner
            wallClass={tileMapDirectory[tileMapThisRowAndCol].className}
          />
        )) ||
        (tileMapThisRowAndCol === "7" && (
          <WallT wallClass={tileMapDirectory[tileMapThisRowAndCol].className} />
        )) ||
        (tileMapThisRowAndCol === "8" && (
          <WallT wallClass={tileMapDirectory[tileMapThisRowAndCol].className} />
        )) ||
        (tileMapThisRowAndCol === "9" && (
          <WallT wallClass={tileMapDirectory[tileMapThisRowAndCol].className} />
        )) ||
        (tileMapThisRowAndCol === "Q" && (
          <WallT wallClass={tileMapDirectory[tileMapThisRowAndCol].className} />
        )) ||
        (tileMapThisRowAndCol === "W" && (
          <WallX wallClass={tileMapDirectory[tileMapThisRowAndCol].className} />
        ))}
    </div>
  );
}

export default MiniTile;
