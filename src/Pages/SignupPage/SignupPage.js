import React from "react";
import "./SignupPage.css";

function SignupPage(props) {
  return (
    <div className={SignupPage}>
      <h1>We signing bro</h1>
      {props.children}
    </div>
  );
}

export default SignupPage;
