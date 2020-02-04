import React from "react";
import "./CharacterInfo.css";

function CharacterInfo(props) {
  return (
    <ul className="CharacterInfo">
      <li className="CharacterListItem">Name: {props.props.name}</li>
      <li className="CharacterListItem">Initiative: {props.props.initiative}</li>
      <li className="CharacterListItem">Move Speed: {props.props.movespeed}</li>
      <li className="CharacterListItem">Remaining: {props.props.movespeed}</li>
    </ul>
  );
}

export default CharacterInfo;
