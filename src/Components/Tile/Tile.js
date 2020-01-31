import React, { useState, useContext } from "react";
import "./Tile.css";
import Wall from "../Wall/Wall";
import { tileMap } from "../../Utils/tileMap";

import { GameContext } from "../../State/Context.js";

function Tile(props) {
  const { gameState } = useContext(GameContext);

  const [tiletype, setTileType] = useState("0");

  function editTile() {
    if (tiletype === "0") {
      setTileType("1");
    }
    if (tiletype === "1") {
      setTileType("2");
    }
    if (tiletype === "2") {
      setTileType("3");
    }
    if (tiletype === "3") {
      setTileType("4");
    }
    if (tiletype === "4") {
      setTileType("5");
    }
    if (tiletype === "5") {
      setTileType("6");
    }
    if (tiletype === "6") {
      setTileType("0");
    }
  }

  return (
    <div
      className="Tile"
      tiletype={tiletype}
      data-passable={tileMap[tiletype].passable}
      onClick={gameState.editMode ? editTile : null}
      {...props}
    >
      {(tiletype === "1" && <Wall wallClass={tileMap[tiletype].className} />) ||
        (tiletype === "2" && (
          <Wall wallClass={tileMap[tiletype].className} />
        )) ||
        (tiletype === "3" && (
          <Wall wallClass={tileMap[tiletype].className} />
        )) ||
        (tiletype === "4" && (
          <Wall wallClass={tileMap[tiletype].className} />
        )) ||
        (tiletype === "5" && (
          <Wall wallClass={tileMap[tiletype].className} />
        )) ||
        (tiletype === "6" && <Wall wallClass={tileMap[tiletype].className} />)}
    </div>
  );
}

export default Tile;
