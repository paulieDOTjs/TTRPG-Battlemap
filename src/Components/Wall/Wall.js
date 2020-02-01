import React from "react";
import "./Wall.css";

function Wall(props) {
  /**************************
   * Takes in wallClass prop
   * applies it to className
   * className changes visual
   * element of "wall"
   **************************/
  return <div className={props.wallClass} />;
}

export default Wall;
