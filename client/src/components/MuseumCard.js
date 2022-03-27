import React from "react"
import TourForm from "./TourForm"
import Login from "./Login"

function MuseumCard({ museum }) {
  const { id, name, category, address, link, image } = museum

  return (
    <>
      {/* <img src={image} alt={name} /> */}
      {/* <TourForm />
      <Login /> */}
    </>
  )
}

export default MuseumCard
