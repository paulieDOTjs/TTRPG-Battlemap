import React from "react";
import "./WallT.css";

function WallT(props) {
  /**************************
   * Takes in wallClass prop
   * applies it to className
   * className changes visual
   * element of "wall"
   **************************/
  return (
    <div className="WallT">
      <div className={props.wallClass + "Main"} />
      <div className={props.wallClass + "Secondary"} />
      <div className={props.wallClass + "Tertiary"} />
    </div>
  );
}

export default WallT;
