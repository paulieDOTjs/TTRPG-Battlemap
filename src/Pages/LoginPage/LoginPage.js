import React, { useContext, useState, useEffect } from "react";
import "./LoginPage.css";
import Button from "../../Components/Button/Button";
import { AuthContext } from "../../State/auth/auth";

function LoginPage({ history }) {
  const { user, loginUser, errors = {} } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (user) {
      // history.push("/");
    }
  }, [user, history]);

  return (
    <div className="LoginPage">
      <form
        noValidate
        onSubmit={e => {
          e.preventDefault();

          const userData = {
            email,
            password
          };

          loginUser(userData);
        }}
      >
        <div className="row">
          <div className="col">
            <h1>Login</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>
              <label htmlFor="email">Email:</label>
            </h2>
            <input
              style={{ width: "200px" }}
              placeholder="type here"
              onChange={e => setEmail(e.target.value)}
              value={email}
              error={errors.email}
              id="email"
              type="email"
              className="email"
            ></input>
            <span>
              {errors.email}
              {errors.emailnotfound}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>
              {" "}
              <label htmlFor="password">Password:</label>
            </h2>
            <input
              style={{ width: "200px" }}
              placeholder="type here"
              onChange={e => setPassword(e.target.value)}
              value={password}
              error={errors.password}
              id="password"
              type="password"
            ></input>
            <span>
              {errors.password}
              {errors.passwordincorrect}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Button style={{ width: "200px" }}>
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
