import { useContext, useState, useEffect } from "react"
import { UserContext } from "./UserContext"
import Tour from "./Tour"
import { styled } from "@mui/material/styles"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import UserTourCard from "./UserTourCard"

function UserProfile() {
  const { currentUser } = useContext(UserContext)
  const [expanded, setExpanded] = useState("panel1")
  const [userTourArray, setUserTourArray] = useState([])

  useEffect(() => {
    fetch("/user_tours")
      .then((r) => r.json())
      .then((r) => console.log(r))
  }, [])

  const createUserTourCards = userTourArray.map((userTour) => (
    <UserTourCard key={userTour.id} userTour={userTour} />
  ))

  return (
    <>
      <h1>Welcome, {currentUser.first_name}</h1>
      {createUserTourCards}

      {/* {currentUser && currentUser.tours ? (
        { createUserTourCards }
      ) : (
        // <Tour tours={currentUser.tours} />
        <p>You have no tours</p>
      )} */}
    </>
  )
}

export default UserProfile
