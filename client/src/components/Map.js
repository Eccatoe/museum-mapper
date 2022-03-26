import { useState } from "react";
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

function Map() {
  let [viewport, setViewport] = useState({
    latitude: 38.892,
    longitude: -76.991,
    zoom: 11.16
  });

  return(<>
      <ReactMapGL
      {...viewport}
      width="100%"
      height="100vh"
      onViewportChange={(newViewport) => setViewport(newViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAP_KEY}
    />
    </>)
}

export default Map;
