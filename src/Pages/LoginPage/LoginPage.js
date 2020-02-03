import React from "react";
import "./LoginPage.css";

function LoginPage(props) {
  return (
    <div className={LoginPage}>
      <h1>LOGIN PAGE</h1>
      {props.children}
    </div>
  );
}

export default LoginPage;
