import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
 
  let[formData,setFormData]=useState({
    name:"",
    phone:""
  })
  let navigate=useNavigate()
  let {id}= useParams()
  console.log(id)
  useEffect(()=>{
    async function getData() {
      let res=await axios.get(`http://localhost:5050/users/${id}`)
      // console.log(res.data)
      setFormData(res.data)
    }
    getData()
  },[])
function handleSubmit(e){
  e.preventDefault()
  axios.patch(`http://localhost:5050/users/${id}`,formData)
  .then((res)=>{
    console.log(res)
    navigate('/')
  })
  .catch((err)=>{
    console.log(err)
  })
}

  return (
    <>
      <div>
        <h1>Upadate Data</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name 💜 </label>
          <input type="text" id="name" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} />
        </div>
        <div>
          <label htmlFor="number">Phone 💜 </label>
          <input type="text" id="number" value={formData.phone} onChange={(e)=>setFormData({...formData,phone:e.target.value})} />
     
        </div>
        <button type='submit'>Submit</button>
        <button onClick={() => nav("/")}>Back</button>
        </form>
      </div>
      
    </>
  )
}

export default Update
