import React from "react";
import "./View.css";
import EditGrid from "../EditGrid/EditGrid";
import EditButton from "../EditButton/EditButton";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import GameProvider from "../../State/Context";

function View(props) {
  return (
    <div className="View">
      <GameProvider>
        <EditGrid />
        <Header />
        <EditButton />
        <SideBar />
      </GameProvider>
    </div>
  );
}

export default View;
