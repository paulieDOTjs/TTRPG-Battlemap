import React from "react";
import "./App.css";
import View from "./Components/View/View";
import axios from "axios";

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
      <View />
    </div>
  );
}

export default App;
