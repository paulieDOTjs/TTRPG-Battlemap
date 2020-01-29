import React, { useEffect, useState } from "react";
import "./Player.css";

function Player(props) {
  function keepInGrid(object) {
    if (object.x < 1) {
      object.x = 1;
    }
    if (object.y < 1) {
      object.y = 1;
    }
    if (object.x > props.numberOfColumns) {
      object.x = props.numberOfColumns;
    }
    if (object.y > props.numberOfRows) {
      object.y = props.numberOfRows;
    }
    return object;
  }
  const [CurrentPosition, setPosition] = useState({ x: 1, y: 1 });

  function handleKey(e) {
    let newPosition = CurrentPosition;
    if (e.code === "KeyQ" || e.code === "KeyA" || e.code === "KeyZ") {
      newPosition.x--;
      keepInGrid(newPosition);
      setPosition({ ...newPosition });
    }
    if (e.code === "KeyE" || e.code === "KeyD" || e.code === "KeyX") {
      newPosition.x++;
      keepInGrid(newPosition);
      setPosition({ ...newPosition });
    }
    if (e.code === "KeyS" || e.code === "KeyZ" || e.code === "KeyX") {
      newPosition.y++;
      keepInGrid(newPosition);
      setPosition({ ...newPosition });
    }
    if (e.code === "KeyQ" || e.code === "KeyW" || e.code === "KeyE") {
      newPosition.y--;
      keepInGrid(newPosition);
      setPosition({ ...newPosition });
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [CurrentPosition]);

  return (
    <div
      className="Player"
      style={{
        gridColumnStart: CurrentPosition.x,
        gridRowStart: CurrentPosition.y
      }}
    >
      {props.name}
    </div>
  );
}

export default Player;
