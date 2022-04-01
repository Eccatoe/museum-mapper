import React, { useState, useContext } from "react"
import { UserContext } from "./UserContext"
import { Link, useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import AppAdapter from "../adapters/AppAdapter"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { currentUser } = useContext(UserContext)
  const { setCurrentUser } = useContext(UserContext)
  let navigate = useNavigate()

  const alertMessage = (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
  )
  function handleLogin(e) {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((currentUser) => setCurrentUser(currentUser))
        setUsername("")
        setPassword("")
        navigate("/home")
      } else alert("No way Jose")
    })
  }

  return (
    <div id="login">
      <div style={{ color: "#697680" }} className="loginSignupDiv">
        <div className="loginSignupForm">
          <h1>Login</h1>
          <form className="form" onSubmit={handleLogin}>
            <label>
              Username
              <br />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <input type="submit" value="Login" />
            <p>Don't have an account?</p>
            <button onClick={() => navigate("/signup")}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
