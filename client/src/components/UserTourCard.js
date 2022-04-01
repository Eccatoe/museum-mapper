import React from "react"

function UserTourCard({ userTour }) {
  const { time, tour, id, museum_name, quantity } = userTour
  return (
    <>
      <div className="tourCard">
        <h2>
          {museum_name} {tour.name} Tour
        </h2>
        <div>{time}</div>
        <div>{quantity} guests</div>
        <div>${tour.price} per ticket </div>
      </div>
    </>
  )
}

export default UserTourCard
