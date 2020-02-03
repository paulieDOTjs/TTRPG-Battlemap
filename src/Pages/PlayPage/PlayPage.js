import React from "react";
import "./PlayPage.css";
import Header from "../../Components/Header/Header";
import PlayView from "../../Components/PlayView/PlayView";

function PlayPage(props) {
  return (
    <div className={PlayPage}>
      <PlayView />
      {props.children}
    </div>
  );
}

export default PlayPage;
