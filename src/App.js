import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import superagent from "superagent";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import GameProvider from "./State/Context";
import LoginPage from "./Pages/LoginPage/LoginPage";
import LogoutPage from "./Pages/LogoutPage/LogoutPage";
import PlayPage from "./Pages/PlayPage/PlayPage";
import HomePage from "./Pages/HomePage/HomePage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import PublicMapPage from "./Pages/PublicMapPage/PublicMapPage";
import UserMapPage from "./Pages/UserMapPage/UserMapPage";

import { Auth } from "./State/auth/auth";

function MainMainPage() {
  return (
    <>
      <SideBar />
      <PlayPage />
    </>
  );
}

function App(props) {
  superagent
    .get(process.env.REACT_APP_SERVER_URL + "/ping")
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
              <Route exact path="/" component={HomePage} />
              <Route path="/play" component={MainMainPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/logout" component={LogoutPage} />
              <Route path="/public" component={PublicMapPage} />
              <Route path="/userMaps" component={UserMapPage} />
            </Switch>
          </Router>
        </GameProvider>
      </Auth>
    </div>
  );
}

export default App;
