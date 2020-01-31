import React from "react";
import "./App.css";
import Grid from "./Components/Grid/Grid";
import EditingProvider from "./State/Context";
import EditButton from "./Components/EditButton/EditButton";
import SideBar from "./Components/SideBar/SideBar";
import Header from "./Components/Header/Header";

const numberOfColumns = 32;
const numberOfRows = 32;

function App() {
  return (
    <div className="App">
      <EditingProvider>
        <Header />
        <EditButton />
        <Grid numberOfRows={numberOfRows} numberOfColumns={numberOfColumns} />
        <SideBar />
      </EditingProvider>
    </div>
  );
}

export default App;
