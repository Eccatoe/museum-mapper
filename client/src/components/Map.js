import { useState, useEffect } from "react"
import ReactMapGL from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
function Map() {
  const [mapInfo, setMapInfo] = useState({})
  useEffect(() => {
    fetch("/static/media/smithsonian.a2c8965c405f8e477844.geojson").then((r) =>
      r
        .json()
        .then((mapInfo) =>
          setMapInfo(mapInfo.map((m) => m.geometry.coordinates))
        )
    )
  }, [])
  let [viewport, setViewport] = useState({
    latitude: 38.892,
    longitude: -77.014,
    minZoom: 11,
  })
  const dcMap = (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100vh"
      onViewportChange={(newViewport) => setViewport(newViewport)}
      mapStyle="mapbox://styles/eccatoe2517/cl15qreja000515o1mzsnxhyr"
      mapboxApiAccessToken={process.env.REACT_APP_MAP_KEY}
    />
  )
  console.log(mapInfo[0])
  console.log(dcMap)
  return <>{dcMap}</>
}
export default Map
