import React from "react";
import "./PlayView.css";
import GameProvider from "../../State/Context";
import Grid from "../Grid/Grid";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
import SideBar from "../SideBar/SideBar";

function PlayView(props) {
  return (
    <div className="PlayView">
      <SideBar />
      <ButtonEdit />
      <Grid />
    </div>
  );
}

export default PlayView;
