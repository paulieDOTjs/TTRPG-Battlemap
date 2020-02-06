import React from "react";
import "./PlayView.css";
import Grid from "../Grid/Grid";
import SideBar from "../SideBar/SideBar";

function PlayView(props) {
  return (
    <div className="PlayView">
      <SideBar />
      <Grid />
    </div>
  );
}

export default PlayView;
