import {useState} from 'react'
import {useNavigate } from "react-router-dom"



function Signup({currentUser, setCurrentUser}) {
    let navigate=useNavigate()
    const [formData, setFormData]=useState({
        first_name: "",
        last_name: "",
        username: "",
        password: "",
    })

    function handleInput(e){
        const objKey=e.target.name
        const objValue=e.target.value
        setFormData({...formData, [objKey]:objValue})
    }

    function handleSignup(e){
        e.preventDefault()
        fetch("/signup", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          .then(res=>{
              if (res.ok){
                res.json()
                navigate('/login')
              }
          })
    }
console.log(currentUser)

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
            onChange={handleInput}          />
        </label>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInput}          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInput}          />
        </label>

        <input type="submit" value="Login" />
      </form>
    </>
  )
}

export default Signup