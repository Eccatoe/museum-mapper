import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import UserProfile from "./components/UserProfile"
import TourForm from "./components/TourForm"
import Login from "./components/Login"
import Signup from './components/Signup'
import AppAdapter from './adapters/AppAdapter'
import "./App.css"

function App() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    AppAdapter.auth()
      .then((currentUser) => setCurrentUser(currentUser))
  }, [])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<Home currentUser={currentUser}/>} />
        <Route exact path="/profile/:id" element={<UserProfile />} />
        <Route exact path="/tour_form" element={<TourForm />} />
        <Route
          exact
          path="/login"
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <Signup currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
      </Routes>
    </div>
  )
}

export default App
