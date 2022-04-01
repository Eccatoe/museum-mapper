import { useState, useEffect, useContext } from "react"
import { Route, Routes } from "react-router-dom"
import SplishSplash from "./components/SplishSplash"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import UserProfile from "./components/UserProfile"
import MuseumPage from "./components/MuseumPage"
import Login from "./components/Login"
import Signup from "./components/Signup"
import AppAdapter from "./adapters/AppAdapter"
import { UserContext } from "./components/UserContext"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import "./App.css"
const THEME = createTheme({
  palette: {
    text: {
      primary: "#000",
    },
  },
})

// import CssBaseline from "@material-ui/core/CssBaseline"
// import theme from "./theme"

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [museums, setMuseums] = useState([])

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((currentUser) => setCurrentUser(currentUser))
  }, [])

  return (
    <div>
      <ThemeProvider theme={THEME}>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<SplishSplash />} />
            <Route
              exact
              path="/home"
              element={<Home museums={museums} setMuseums={setMuseums} />}
            />
            <Route exact path="/profile" element={<UserProfile />} />
            <Route
              exact
              path="/museums/:id"
              element={<MuseumPage museums={museums} setMuseums={setMuseums} />}
            />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  )
}

export default App
