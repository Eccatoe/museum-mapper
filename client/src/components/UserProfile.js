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
    <div id="portal">
      <h1>Welcome, {currentUser.first_name}</h1>
      <div className="tourContainer">
        <div className="scroll">{createUserTourCards}</div>
      </div>
    </div>
  )
}

export default UserProfile
