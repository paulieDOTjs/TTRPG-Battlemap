import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import superagent from "superagent";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import GameProvider from "./State/Context";
import LoginPage from "./Pages/LoginPage/LoginPage";
import PlayPage from "./Pages/PlayPage/PlayPage";
import HomePage from "./Pages/HomePage/HomePage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import MapFinder from "./Components/MapFinder/MapFinder";

import { Auth } from "./State/auth/auth";

function App(props) {
  superagent
    .get("http://localhost:5000/ping")
    .then(function(response) {
      // handle success
      console.log("ok", response.text);
    })
    .catch(function(error) {
      // handle error
      console.log("error", error);
    });

  return (
    <div className="App">
      <Auth>
        <GameProvider>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/play">
                <SideBar />
                <PlayPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/signup">
                <SignupPage />
              </Route>
              <Route path="/test">
                <MapFinder />
              </Route>
            </Switch>
          </Router>
        </GameProvider>
      </Auth>
    </div>
  );
}

export default App;
