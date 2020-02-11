import React from "react";
import "./HomePage.css";

function HomePage(props) {
  return (
    <div className="HomePage">
      <h1>Welcome to the TTRPG Battle Map Simulator!</h1>
      <h2>
        With this app you can quickly build interactive maps to use during your
        TTRPG games, save them for later, and view maps others have made public.
      </h2>
      <h3>Want to proceed? Adventure awaits.</h3>
      <a href="/play">button</a>
      {props.children}
    </div>
  );
}

export default HomePage;
