import React, { useEffect, useState } from "react";
import "./App.css";
import Grid from "./Components/Grid/Grid";

const numberOfColumns = 32;
const numberOfRows = 32;

function App() {
  return (
    <div className="App">
      <Grid numberOfRows={numberOfRows} numberOfColumns={numberOfColumns} />
    </div>
  );
}

export default App;
