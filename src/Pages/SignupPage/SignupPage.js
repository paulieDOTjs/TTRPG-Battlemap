import React, { useContext, useState, useEffect } from "react";
import Button from "../../Components/Button/Button";
import { AuthContext } from "../../State/auth/auth";

import "./SignupPage.css";

function SignupPage({ history }) {
  const { user, registerUser, errors = {} } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  useEffect(() => {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (user) {
      history.push("/login");
    }
  }, [user, history]);

  return (
    <div className="SignupPage">
      {user ? (
        <div>You are already signed in </div>
      ) : (
        <form
          noValidate
          onSubmit={e => {
            e.preventDefault();

            const newUser = {
              name,
              email,
              password,
              password2
            };

            registerUser(newUser, history);
          }}
        >
          <h1>Sign Up</h1>
          <div className="row">
            <div className="col">
              <h2>
                <label htmlFor="email">Email</label>
              </h2>
              <input
                style={{ width: "200px" }}
                placeholder="type here"
                onChange={event => setEmail(event.target.value)}
                value={email}
                error={errors.email}
                id="email"
                type="email"
              />
              <span>{errors.email}</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>
                <label htmlFor="name">Username</label>:
              </h2>
              <input
                style={{ width: "200px" }}
                placeholder="type here"
                onChange={event => setName(event.target.value)}
                value={name}
                error={errors.name}
                id="name"
                type="text"
              />
            </div>
          </div>
          <span>{errors.name}</span>
          <div className="row">
            <div className="col">
              <h2>
                <label htmlFor="password">Password:</label>
              </h2>

              <input
                style={{ width: "200px" }}
                placeholder="type here"
                onChange={event => setPassword(event.target.value)}
                value={password}
                error={errors.password}
                id="password"
                type="password"
              />
            </div>
          </div>
          <span>{errors.password}</span>
          <div className="row">
            <div className="col">
              <h2>
                <label htmlFor="password2">Confirm Password:</label>
              </h2>

              <input
                style={{ width: "200px" }}
                placeholder="type here"
                onChange={event => setPassword2(event.target.value)}
                value={password2}
                error={errors.password2}
                id="password2"
                type="password"
              />
            </div>
          </div>
          <span>{errors.password2}</span>
          <div className="row">
            <div className="col">
              <Button style={{ width: "200px" }} type="submit">
                Sign up
              </Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default SignupPage;
