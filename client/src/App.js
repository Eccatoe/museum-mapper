import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import UserProfile from "./components/UserProfile"
import Form from "./components/Form"
import Login from "./components/Login"
import Signup from './components/Signup'
import AppAdapter from './adapters/AppAdapter'
import {UserContext} from './components/UserContext'
import "./App.css"

function App() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch('/me').then(res => res.json())
      .then((currentUser) => setCurrentUser(currentUser))
  }, [])

  return (
    <div>
      <UserContext.Provider value={{currentUser, setCurrentUser}}>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile" element={<UserProfile/>} />
        <Route exact path="/tour_form" element={<Form />} />
        <Route
          exact
          path="/login"
          element={
            <Login />
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <Signup />
          }
        />
      </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App
