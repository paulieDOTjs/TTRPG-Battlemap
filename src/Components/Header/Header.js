import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import * as Actions from "../../State/Actions";

import "./Header.css";

import { AuthContext } from "../../State/auth/auth";
import { GameContext } from "../../State/Context.js";

function Header(props) {
  const { dispatch } = useContext(GameContext);
  const { user, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      dispatch({
        type: Actions.UPDATE_USER,
        payload: user.name
      });
    } else {
      dispatch({
        type: Actions.UPDATE_USER,
        payload: ""
      });
    }
  }, [user]);

  return (
    <div className="Header">
      <div className="row">
        <h1 className="col-6 AppTitle">
          {user ? "Hello, " + user.name : "Battlemap"}
        </h1>
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
              <Link style={{ color: "#540000" }} to="/public">
                Public
              </Link>
            </li>
            <li className="NavLink">
              <Link style={{ color: "#540000" }} to="/userMaps">
                Saved
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
              <Link
                onClick={logoutUser}
                to="/logout"
                style={{ color: "#540000" }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
