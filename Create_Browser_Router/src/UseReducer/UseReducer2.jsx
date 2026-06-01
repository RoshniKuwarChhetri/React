import React, { useReducer } from 'react'

let initialData={
    name:"",
    email:"",
    password:"",
    address:""

}
function reducer(val,action){
  return{...val,[action.type]:action.value}
}
const UseReducer2 = () => {
let[state,setState]=useReducer(reducer,initialData)
  return (
    <div>
      <form >
        <input type="text" placeholder='Enter Name' onChange={(e)=>setState({value: e.target.value, type: "name"})} /> <br />
        <input type="text" placeholder='Enter Email' onClick={(e)=>setState({value: e.target.value, type:"email"})} /> <br />
        <input type="text" placeholder='Enter ' onClick={(e)=>setState({value: e.target.value, type:"password"})} /> <br />
        <input type="text" placeholder='Enter address' onClick={(e)=>setState({value: e.target.value, type:"address"})} /> <br />
        
      </form>
      <h1>Name:{state.name} <br />
          Email:{state.email} <br />
          password:{state.password} <br/>
          Address:{state.address} <br />
      </h1>
    </div>
  )
}

export default UseReducer2
