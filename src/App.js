import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header";
import GameProvider from "./State/Context";
import LoginPage from "./Pages/LoginPage/LoginPage";
import PlayPage from "./Pages/PlayPage/PlayPage";
import HomePage from "./Pages/HomePage/HomePage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import SetupPage from "./Pages/SetupPage/SetupPage";

function App(props) {
  // axios
  //   .get("http://localhost:5000/api/v1/maps")
  //   .then(function(response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function(error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function() {
  //     // always executed
  //   });

  return (
    <div className="App">
      <GameProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/play">
              <PlayPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignupPage />
            </Route>
            <Route path="/setup">
              <SetupPage />
            </Route>
          </Switch>
        </Router>
      </GameProvider>
    </div>
  );
}

export default App;
