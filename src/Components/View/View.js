import React from "react";
import "./View.css";
import Grid from "../Grid/Grid";
import EditButton from "../EditButton/EditButton";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import GameProvider from "../../State/Context";

function View(props) {
  return (
    <div className="View">
      <Grid />
      <GameProvider>
        <Header />
        <EditButton />
        <SideBar />
      </GameProvider>
    </div>
  );
}

export default View;
