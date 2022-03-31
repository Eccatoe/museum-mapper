import React from "react"

function UserTourCard({userTour}) {
  const {time, tour, id, museum_name}=userTour
  return <>
  <div>{time}</div>
  <div>{museum_name} {tour.name} Tour</div>
  <div>{tour.price}</div>
  </>

}

export default UserTourCard
