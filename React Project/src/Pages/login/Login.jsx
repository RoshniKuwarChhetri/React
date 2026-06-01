import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
const Login = () => {
  let navigate = useNavigate()

  let [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  let [prevData, setPrevData] = useState([])

  useEffect(() => {
    async function getData() {
      let { data } = await axios.get("http://localhost:5050/users")
      setPrevData(data)
    }
    getData()
  }, [])

  function handleChange(e) {
    let { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()   

    let authUser = prevData.find((user) => {
      return user.email === formData.email && user.password === formData.password
    })

    if (authUser) {
      alert("Login Successfully")
      navigate("/allproduct")   
      localStorage.setItem("user_id", authUser.id)
    } else {
      alert("Email and Password are not matching")
      navigate('/signup')
    }
  }

  return (  
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter Email' onChange={handleChange} name='email' />
        <input type="password" placeholder='Enter Password' onChange={handleChange} name='password' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login