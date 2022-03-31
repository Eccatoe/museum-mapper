import React, { useState, useContext } from "react"
import { UserContext } from "./UserContext"
import { useNavigate } from "react-router-dom"
import AppAdapter from "../adapters/AppAdapter"
import Container from "@mui/material/Container"

function Signup() {
  const { setCurrentUser } = useContext(UserContext)
  let navigate = useNavigate()

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
  })

  function handleInput(e) {
    const objKey = e.target.name
    const objValue = e.target.value
    setFormData({ ...formData, [objKey]: objValue })
  }

  function handleSignup(e) {
    e.preventDefault()
    AppAdapter.signup(formData).then((res) => {
      if (res.ok) {
        res.json().then((currentUser) => setCurrentUser(currentUser))
        navigate("/login")
      }
    })
  }

  return (
    <div id="signup">
    <div  className="loginSignupDiv">
      <h1>Make an Account</h1>
      <form className="loginSignupForm" onSubmit={handleSignup}>
        <label>
          First Name<br/>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleInput}
          />
        </label>
        <label>
          Last Name<br/>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleInput}
          />
        </label>
        <label>
          Username<br/>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInput}
          />
        </label>
        <label>
          Password<br/>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInput}
          />
        </label>

        <input type="submit" value="Login" />
      </form>
    </div>
    </div>
  )
}

export default Signup
