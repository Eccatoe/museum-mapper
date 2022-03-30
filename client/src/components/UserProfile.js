import {useContext} from "react";
import {UserContext} from './UserContext'
import Tour from './Tour'

function UserProfile() {
  const {currentUser}=useContext(UserContext)

  return (
    <>
      <h1>Welcome, {currentUser.id}</h1>
      { (currentUser&&currentUser.tours) ? <Tour tours={currentUser.tours}/> : <p>You have no tours</p> }
    </>
  );
}

export default UserProfile;
