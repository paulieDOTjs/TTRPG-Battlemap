import React from "react";
import "./WallCorner.css";

function WallCorner(props) {
  /**************************
   * Takes in wallClass prop
   * applies it to className
   * className changes visual
   * element of "wall"
   **************************/
  return (
    <div className="WallCorner">
      <div className={props.wallClass + "Secondary"} />
      <div className={props.wallClass + "Main"} />
    </div>
  );
}

export default WallCorner;
