import React from "react";
import "./MapFinder.css";
import superagent from "superagent";
import SideBar from "../SideBar/SideBar";
import MiniGrid from "../MiniGrid/MiniGrid";

function MapFinder(props) {
  let mapsFound = {
    tileMap: [
      "0000000411111500",
      "0000041600000200",
      "0000020000000200",
      "0000020000000200",
      "0000020411111600",
      "4111160200000000",
      "2000000200000000",
      "2004500311500000",
      "2002200000200000",
      "311Q900200350000",
      "0000200200020000",
      "0000200200020000",
      "0000200200020000",
      "0000200350020000",
      "0000200020020000",
      "0000200031160000"
    ],
    _id: "5e41afa4ff7ecd19f659aab4",
    name: "Basic small dungeon",
    creator: "God",
    editedBy: "God",
    private: false,
    date: "2020-02-10T19:31:48.975Z",
    __v: 0
  };

  function doTheThing() {
    superagent
      .get("http://localhost:5000/api/v1/maps/public")
      .end((err, res) => {
        console.log("error", err);
        console.log(res.body.MapData);
        mapsFound = res.body.MapData;
      });
  }
  // doTheThing();
  return (
    <>
      <SideBar />

      <div className="MapFinder">
        {" "}
        <MiniGrid props={mapsFound} />
      </div>
    </>
  );
}

export default MapFinder;
