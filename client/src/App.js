import { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import MuseumPage from "./components/MuseumPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AppAdapter from "./adapters/AppAdapter";
import { UserContext } from "./components/UserContext";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((currentUser) => setCurrentUser(currentUser));
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <NavBar />
        <Routes>
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
    </div>
  );
}

export default App;
