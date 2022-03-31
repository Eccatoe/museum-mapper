import { useContext, useState, useEffect } from "react"
import { UserContext } from "./UserContext"
import UserTourCard from "./UserTourCard"

function UserProfile() {
  const { currentUser } = useContext(UserContext)
  const [userTourArray, setUserTourArray] = useState([])

  useEffect(() => {
    fetch("/user_tours")
      .then((r) => r.json())
      .then((r) => setUserTourArray(r))
  }, [])

console.log(userTourArray)
  const createUserTourCards = userTourArray.map((userTour) => (
    <UserTourCard key={userTour.id} userTour={userTour} />
  ))

  return (
    <>
      <h1>Welcome, {currentUser.first_name}</h1>
      {createUserTourCards}
    </>
  )
}

export default UserProfile
