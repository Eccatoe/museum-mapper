import React from "react"
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import UserProfile from'./components/UserProfile'
import TourForm from "./components/TourForm"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile/:id" element={<UserProfile />} />
        <Route exact path='/tour_form' element={<TourForm />}/>
      </Routes>
    </div>
  )
}

export default App
