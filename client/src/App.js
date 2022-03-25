import React from "react"
import { Route, Routes } from "react-router-dom"
import NavBar from ".components/NavBar"
import Home from ".components/Home"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
