import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  let[formData,setFormDate]=useState({
    name:"",
    phone:""
  })
  let navigate=useNavigate()

    function handleSubmit(e){
      e.preventDefault()
      axios.post("http://localhost:5050/users", formData)
      .then((res)=>{
        //console.log(res)
        navigate("/")
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  
  return (
    <>
    <h1 align="center">Add New User ♡⸜(˶˃ ᵕ ˂˶)⸝♡ </h1 >
     <form action="" onSubmit={handleSubmit}>
       <div>
        <label htmlFor="name">Enter Name 💜 </label>
        <input type="text" id='name' name='name' onChange={(e)=>setFormDate({...formData, name:e.target.value})}/>
       </div>
       <br />
       <div>
        <label htmlFor="no">Enter Number 💜 </label>
        <input type="number" id='no' name='phone' onChange={(e)=>setFormDate({...formData, phone:e.target.value})}/>
       </div>
       <br />
       <button onClick={() => nav("/")}>Back</button>
       <button type='submit'>Submit</button>
     </form>
    </>
  )
}

export default Create
