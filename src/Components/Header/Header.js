import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Header.css";

function Header(props) {
  return (
    <div className="Header">
      <div className="row">
        <h1 className="col-6 AppTitle">Battlemap</h1>
        <div className="col-6">
          <ul className="NavList">
            <li className="NavLink">
              <Link style={{ color: "#540000" }} to="/">
                Home
              </Link>
            </li>
            <li className="NavLink">
              <Link style={{ color: "#540000" }} to="/play">
                Play
              </Link>
            </li>
            <li className="NavLink">
              <Link style={{ color: "#540000" }} to="/login">
                Login
              </Link>
            </li>
            <li className="NavLink">
              <Link style={{ color: "#540000" }} to="/signup">
                Signup
              </Link>
            </li>
            <li className="NavLink">
              <Link style={{ color: "#540000" }} to="/test">
                test
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
