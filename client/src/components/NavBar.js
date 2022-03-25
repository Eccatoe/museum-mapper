import React from "react"
import {Link} from "react-router-dom"

function NavBar() {
  return <>
  <Link to="/">App</Link>
  {/* <Link to={{pathname: `/profile/${id}`}}>Profile</Link> */}
  <Link to="/login">Login/Signup</Link>
  <Link to="/tour_form">Book a Tour</Link>
  
  </>
}

export default NavBar
