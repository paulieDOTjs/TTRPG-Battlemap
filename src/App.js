import React, { useEffect, useState } from "react";
import "./App.css";
import Grid from "./Components/Grid/Grid";

const numberOfColumns = 24;
const numberOfRows = 16;

function keepInGrid(object) {
  if (object.x < 1) {
    object.x = 1;
  }
  if (object.y < 1) {
    object.y = 1;
  }
  if (object.x > numberOfColumns) {
    object.x = numberOfColumns;
  }
  if (object.y > numberOfRows) {
    object.y = numberOfRows;
  }
  return object;
}

function App() {
  const [CurrentPosition, setPosition] = useState({ x: 1, y: 1 });

  function handleKey(e) {
    let newPosition = CurrentPosition;
    if (e.code === "KeyQ" || e.code === "KeyA" || e.code === "KeyZ") {
      newPosition.x--;
      keepInGrid(newPosition);
      setPosition({ ...newPosition });
    }
    if (e.code === "KeyE" || e.code === "KeyD" || e.code === "KeyC") {
      newPosition.x++;
      keepInGrid(newPosition);
      setPosition({ ...newPosition });
    }
    if (e.code === "KeyS" || e.code === "KeyZ" || e.code === "KeyC") {
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
    <div className="App">
      <Grid
        numberOfRows={numberOfRows}
        numberOfColumns={numberOfColumns}
        player1={CurrentPosition}
      />
    </div>
  );
}

export default App;
