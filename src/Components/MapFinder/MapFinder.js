import React, { useContext, useState, useEffect } from "react";
import "./MapFinder.css";
import superagent from "superagent";
import MiniGrid from "../MiniGrid/MiniGrid";
import Button from "../Button/Button";
import { BrowserRouter as Router, Link } from "react-router-dom";
import * as Actions from "../../State/Actions";
import { GameContext } from "../../State/Context.js";

function MapFinder(props) {
  const { state, dispatch } = useContext(GameContext);

  const [mapsFound, setMapsFound] = useState([]);

  function handleDelete(id) {
    superagent
      .delete(process.env.REACT_APP_SERVER_URL + "/api/v1/maps/id/" + id)
      .then(function(response) {
        // handle success
        console.log(response);
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
      })
      .catch(function(error) {
        // handle error
        console.log("error", error);
      });
  }

  function handleClick(data) {
    dispatch({
      type: Actions.USE_SELECTED_MAP,
      payload: data
    });
  }

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
              const editors = [];
              for (let i = 0; i < individualMapData.editedBy.length; i++) {
                if (i === 0) {
                  editors.push(individualMapData.editedBy[i]);
                } else if (i === individualMapData.editedBy.length - 1) {
                  editors.push(", and " + individualMapData.editedBy[i]);
                } else {
                  editors.push(", " + individualMapData.editedBy[i]);
                }
              }

              return (
                <div
                  className="MapBox"
                  key={individualMapData._id + individualMapData.name + "div"}
                >
                  <h2
                    key={individualMapData._id + individualMapData.name}
                    style={{ textAlign: "center" }}
                  >
                    {individualMapData.name}
                  </h2>
                  <div style={{ textAlign: "center", margin: "10px" }}>
                    <Link style={{ color: "#540000" }} to="/play">
                      <Button
                        onClick={() => handleClick(individualMapData)}
                        style={{ padding: "4px", width: "108" }}
                      >
                        Use This Map
                      </Button>
                    </Link>
                    {individualMapData.savedBy === state.username ? (
                      <Button
                        style={{
                          padding: "4px",
                          width: "108px",
                          marginLeft: "20px"
                        }}
                        onClick={() => handleDelete(individualMapData._id)}
                      >
                        Delete
                      </Button>
                    ) : state.username === "God" ? (
                      <Button
                        style={{
                          padding: "4px",
                          width: "108px",
                          marginLeft: "20px"
                        }}
                        onClick={() => handleDelete(individualMapData._id)}
                      >
                        Delete
                      </Button>
                    ) : (
                      ""
                    )}
                  </div>
                  <MiniGrid
                    key={individualMapData._id}
                    props={individualMapData}
                  />
                  <h3
                    style={{ textAlign: "center" }}
                    key={individualMapData._id + individualMapData.creator}
                  >
                    Created by: {individualMapData.creator}
                  </h3>
                  <h3
                    style={{ textAlign: "center" }}
                    key={individualMapData._id + individualMapData.creator}
                  >
                    Edited by: {editors}
                  </h3>
                </div>
              );
            })}
      </div>
    </>
  );
}

export default MapFinder;
