import React from "react";
import "./Wall.css";

function Wall(props) {
  return (
    <div className="Wall">
      <div className={props.wallClass} />
    </div>
  );
}

export default Wall;
