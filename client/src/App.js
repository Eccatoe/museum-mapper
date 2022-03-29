import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import UserProfile from "./components/UserProfile"
import TourForm from "./components/TourForm"
import Login from "./components/Login"
import "./App.css"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile/:id" element={<UserProfile />} />
        <Route exact path="/tour_form" element={<TourForm />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
