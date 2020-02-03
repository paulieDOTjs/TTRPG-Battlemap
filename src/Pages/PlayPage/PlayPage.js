import React from "react";
import "./PlayPage.css";
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
