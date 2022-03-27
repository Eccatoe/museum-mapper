import { useState } from "react"
import ReactMapGL from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"

function Map() {
  let [viewport, setViewport] = useState({
    latitude: 38.892,
    longitude: -77.014,
    minZoom: 11,
  })

  return (
    <>
      <div>
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100vh"
          onViewportChange={(newViewport) => setViewport(newViewport)}
          mapStyle="mapbox://styles/eccatoe2517/cl15qreja000515o1mzsnxhyr"
          mapboxApiAccessToken={process.env.REACT_APP_MAP_KEY}
        />
      </div>
    </>
  )
}

export default Map
