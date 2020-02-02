import React, { useContext } from "react";
import "./Tile.css";
import Wall from "../Wall/Wall";
import WallT from "../WallT/WallT";
import { tileMap } from "../../Utils/tileMap";
import * as Actions from "../../State/Actions";

import { GameContext } from "../../State/Context.js";

function Tile(props) {
  const { state } = useContext(GameContext);

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
  const tileMapThisRow = state.tileMap[thisTileRow - 1];

  /*************************************************
   * This is the individual character of the tile map
   * that represents this individual tile
   *************************************************/
  const tileMapThisRowAndCol = tileMapThisRow.charAt(thisTileCol - 1);

  return (
    <div
      className="Tile"
      tiletype={tileMapThisRowAndCol}
      data-clickable={true}
      data-action={Actions.SET_OBJECT}
      data-passable={tileMap[tileMapThisRowAndCol].passable}
      {...props}
    >
      {(tileMapThisRowAndCol === "1" && (
        <Wall wallClass={tileMap[tileMapThisRowAndCol].className} />
      )) ||
        (tileMapThisRowAndCol === "2" && (
          <Wall wallClass={tileMap[tileMapThisRowAndCol].className} />
        )) ||
        (tileMapThisRowAndCol === "3" && (
          <Wall wallClass={tileMap[tileMapThisRowAndCol].className} />
        )) ||
        (tileMapThisRowAndCol === "4" && (
          <Wall wallClass={tileMap[tileMapThisRowAndCol].className} />
        )) ||
        (tileMapThisRowAndCol === "5" && (
          <Wall wallClass={tileMap[tileMapThisRowAndCol].className} />
        )) ||
        (tileMapThisRowAndCol === "6" && (
          <Wall wallClass={tileMap[tileMapThisRowAndCol].className} />
        )) ||
        (tileMapThisRowAndCol === "7" && (
          <WallT wallClass={tileMap[tileMapThisRowAndCol].className} />
        )) ||
        (tileMapThisRowAndCol === "8" && (
          <WallT wallClass={tileMap[tileMapThisRowAndCol].className} />
        )) ||
        (tileMapThisRowAndCol === "9" && (
          <WallT wallClass={tileMap[tileMapThisRowAndCol].className} />
        )) ||
        (tileMapThisRowAndCol === "Q" && (
          <WallT wallClass={tileMap[tileMapThisRowAndCol].className} />
        ))
        
        
        
        }
    </div>
  );
}

export default Tile;
