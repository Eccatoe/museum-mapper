import React, { useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import AppAdapter from '../adapters/AppAdapter'

function Login({ currentUser, setCurrentUser }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  let navigate=useNavigate()

  const alertMessage = (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
  )
  function handleLogin(e) {
    e.preventDefault()
    fetch("/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password
      }),
    })
    .then(response => {
      if (response.ok){
        response.json().then((currentUser) => setCurrentUser(currentUser))
        navigate('/home')
      } else alert("No way Jose")
    })
  }

  console.log(currentUser)

  function handleLogOut(){
    AppAdapter.logout()
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
      <button onClick={handleLogOut}>Log Out</button>


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
