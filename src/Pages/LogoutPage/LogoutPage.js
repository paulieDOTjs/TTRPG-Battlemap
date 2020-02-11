import React, { useContext } from "react";
import "./LogoutPage.css";

import { AuthContext } from "../../State/auth/auth";

function LogoutPage(props) {
  const { user } = useContext(AuthContext);

  return (
    <div className="LogoutPage">
      {user ? "There was an error, try again" : "You are logged out"}{" "}
    </div>
  );
}

export default LogoutPage;
