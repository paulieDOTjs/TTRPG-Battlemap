import React, { useState, useEffect } from "react";
import "./MapFinder.css";
import superagent from "superagent";
import SideBar from "../SideBar/SideBar";
import MiniGrid from "../MiniGrid/MiniGrid";

function MapFinder(props) {
  const [mapsFound, setMapsFound] = useState([]);

  useEffect(() => {
    superagent
      .get("http://localhost:5000/api/v1/maps/public")
      .then(function(response) {
        // handle success
        setMapsFound(response.body.MapData);
      })
      .catch(function(error) {
        // handle error
        console.log("error", error);
      });
  }, [mapsFound]);

  return (
    <>
      <SideBar />

      <div className="MapFinder">
        {mapsFound.length < 1
          ? "...loading"
          : mapsFound.map(individualMapDta => {
              return (
                <>
                  <h2 style={{ textAlign: "center" }}>
                    {individualMapDta.name}
                  </h2>
                  <MiniGrid props={individualMapDta} />
                  <h3 style={{ textAlign: "center" }}>
                    Created by: {individualMapDta.creator}
                  </h3>
                </>
              );
            })}
      </div>
    </>
  );
}

export default MapFinder;
