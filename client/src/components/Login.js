import React, { useState } from "react"
import Auth from "./Auth"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
// import { useHistory } from "react-router-dom"

function Login({ currentUser, setCurrentUser }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const alertMessage = (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
  )
  function handleSubmit(e) {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      })
      .then((res) => {
        if (res.ok) {
          res.json().then((currentUser) => setCurrentUser(currentUser))
        } else alert(alertMessage)
      }),
    })
  }
  console.log(currentUser)

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <input type="submit" value="Login" />
      </form>

      {/* <Auth /> */}

      <h1>Don't have an account?</h1>
      <Button>Sign Up</Button>
      <Link style={{ textDecoration: "none", color: "white" }} to={`/signup`}>
        {" "}
        Sign Up
      </Link>
    </>
  )
}

export default Login
