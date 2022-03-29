import { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import "../smithsonian.geojson";

function Map() {
  // const [museumData, setMuseumData] = useState([]);

  // useEffect(() => {
  //   fetch(smithsonian)
  //     .then((r) => r.json())
  //     .then((res) => console.log(res));
  // }, []);



  let [viewport, setViewport] = useState({
    latitude: 38.892,
    longitude: -77.014,
    minZoom: 11,
  });

  const dcMap = (
    <ReactMapGL
      {...viewport}
      container="map"
      width="100%"
      height="100vh"
      onViewportChange={(newViewport) => setViewport(newViewport)}
      mapStyle="mapbox://styles/eccatoe2517/cl15qreja000515o1mzsnxhyr"
      mapboxApiAccessToken={process.env.REACT_APP_MAP_KEY}
    />
  );

  return (
    <>
      <div id="map">{dcMap}</div>
    </>
  );
}

export default Map;
