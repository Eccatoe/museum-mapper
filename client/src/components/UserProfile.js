import Tour from './Tour'
function UserProfile({ currentUser }) {

  return (
    <>
      <h1>Welcome, {currentUser.id}</h1>
      { (currentUser&&currentUser.tours) ? <Tour tours={currentUser.tours}/> : <p>You have no tours</p> }
    </>
  );
}

export default UserProfile;
