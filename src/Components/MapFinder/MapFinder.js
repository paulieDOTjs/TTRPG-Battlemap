import React, { useState, useEffect } from "react";
import "./MapFinder.css";
import superagent from "superagent";
import MiniGrid from "../MiniGrid/MiniGrid";

function MapFinder(props) {
  const [mapsFound, setMapsFound] = useState([]);

  useEffect(() => {
    superagent
      .get(process.env.REACT_APP_SERVER_URL + "/api/v1/maps/" + props.type)
      .then(function(response) {
        // handle success
        setMapsFound(response.body.MapData);
      })
      .catch(function(error) {
        // handle error
        console.log("error", error);
      });
  }, []);

  return (
    <>
      <div className="MapFinder">
        {mapsFound.length < 1
          ? "...loading"
          : mapsFound.map(individualMapData => {
              return (
                <>
                  <h2
                    key={individualMapData._ID + individualMapData.name}
                    style={{ textAlign: "center" }}
                  >
                    {individualMapData.name}
                  </h2>
                  <MiniGrid
                    key={individualMapData._ID}
                    props={individualMapData}
                  />
                  <h3
                    style={{ textAlign: "center" }}
                    key={individualMapData._ID + individualMapData.creator}
                  >
                    Created by: {individualMapData.creator}
                  </h3>
                </>
              );
            })}
      </div>
    </>
  );
}

export default MapFinder;
