import React from "react";
import "./PlayView.css";
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
