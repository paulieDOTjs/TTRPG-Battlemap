import React from "react";
import "./App.css";
import Grid from "./Components/Grid/Grid";
const numberOfColumns = 24;
const numberOfRows = 16;

function App() {
  return (
    <div className="App">
      <Grid numberOfRows={numberOfRows} numberOfColumns={numberOfColumns} />
    </div>
  );
}

export default App;
