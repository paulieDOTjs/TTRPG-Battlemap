import React from "react";
import "./PublicMapPage.css";
import MapFinder from "../../Components/MapFinder/MapFinder";

function PublicMapPage(props) {
  return (
    <div className="PublicMapPage">
      <MapFinder type={"public"} />
    </div>
  );
}

export default PublicMapPage;
