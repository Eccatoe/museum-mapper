import React from "react"
import TourForm from "./TourForm"
import Login from "./Login"

function MuseumCard({ id, name, category, address, link, image }) {
  return (
    <>
      <img src={image} alt={name} />
      <TourForm />
      <Login />
    </>
  )
}

export default MuseumCard
