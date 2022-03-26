import React from "react"
import Map from "./Map"
import MuseumCard from "./MuseumCard"
function MuseumContainer({ museums }) {
  const museum = museums.map((museum) => (
    <MuseumCard key={museum.id} museum={museum} />
  ))

  return (
    <>
      <Map />
      {museum}
    </>
  )
}

export default MuseumContainer
