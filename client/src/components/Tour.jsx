import React from 'react'

function Tour({tours}) {
    const tourCard=tours.map((tour)=>tour.name)
  return (
      <ul>Your Tours
    <li>{tourCard}</li>
    </ul>
  )
}

export default Tour