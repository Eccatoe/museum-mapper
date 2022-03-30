import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import AppAdapter from "../adapters/AppAdapter";

function Signup() {
  const { currentUser } = useContext(UserContext);
  const { setCurrentUser } = useContext(UserContext);
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
  });

  function handleInput(e) {
    const objKey = e.target.name;
    const objValue = e.target.value;
    setFormData({ ...formData, [objKey]: objValue });
  }

  function handleSignup(e) {
    e.preventDefault();
    AppAdapter.signup(formData).then((res) => {
      if (res.ok) {
        res.json().then((currentUser) => setCurrentUser(currentUser));
        navigate("/login");
      }
    });
  }

  return (
    <>
      <h1>Make a New Account</h1>
      <form onSubmit={handleSignup}>
        <label>
          First Name
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleInput}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleInput}
          />
        </label>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInput}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInput}
          />
        </label>

        <input type="submit" value="Login" />
      </form>
    </>
  );
}

export default Signup;
