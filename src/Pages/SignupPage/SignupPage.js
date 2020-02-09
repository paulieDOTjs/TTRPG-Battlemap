import React from "react";
import "./SignupPage.css";

function SignupPage(props) {
  return (
    <div className="myContainer container">
      <div className={SignupPage}>
        <h1>Sign Up</h1>
        <h2>Email:</h2>
        <input></input>
        <h2>Username:</h2>
        <input></input>
        <h2>Password:</h2>
        <input></input>
        <h2>Confirm Password:</h2>
        <input></input>
      </div>
    </div>
  );
}

export default SignupPage;
