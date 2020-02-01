import React from "react";
import "./View.css";
import EditGrid from "../EditGrid/EditGrid";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
import ButtonMap from "../ButtonMap/ButtonMap";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import GameProvider from "../../State/Context";

function View(props) {
  return (
    <div className="View">
      <GameProvider>
        <ButtonMap />
        <EditGrid />
        <Header />
        <ButtonEdit />
        <SideBar />
      </GameProvider>
    </div>
  );
}

export default View;
