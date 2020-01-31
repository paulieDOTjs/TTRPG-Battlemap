import React, { useState } from "react";
import "./Tile.css";
import Wall from "../Wall/Wall";
import GameProvider from "../../State/Context";

function Tile(props) {
  const editable = true;

  const [tiletype, setTileType] = useState("default");

  function makeWall() {
    if (tiletype === "default") {
      setTileType("hWall");
    }
    if (tiletype === "hWall") {
      setTileType("vWall");
    }
    if (tiletype === "vWall") {
      setTileType("trCorner");
    }
    if (tiletype === "trCorner") {
      setTileType("rdCorner");
    }
    if (tiletype === "rdCorner") {
      setTileType("dlCorner");
    }
    if (tiletype === "dlCorner") {
      setTileType("ltCorner");
    }
    if (tiletype === "ltCorner") {
      setTileType("default");
    }
  }

  function sayHi() {
    console.log("hi");
  }

  return (
    <div
      className="Tile"
      tiletype={tiletype}
      onClick={(editable === true && makeWall) || sayHi}
      {...props}
    >
      {/* <GameProvider> */}
        {(tiletype === "hWall" && <Wall wallClass="hWall" />) ||
          (tiletype === "vWall" && <Wall wallClass="vWall" />) ||
          (tiletype === "trCorner" && <Wall wallClass="trCorner" />) ||
          (tiletype === "rdCorner" && <Wall wallClass="rdCorner" />) ||
          (tiletype === "dlCorner" && <Wall wallClass="dlCorner" />) ||
          (tiletype === "ltCorner" && <Wall wallClass="ltCorner" />)}
      {/* </GameProvider> */}
    </div>
  );
}

export default Tile;
