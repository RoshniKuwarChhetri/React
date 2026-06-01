import React, { useContext, useState } from 'react'
import MyContext2 from './ContextApi'
import Component3 from './Component3'
 
const Component11 = () => {
  let [state1, setState]=useState("")
  let data=useContext(MyContext2)
  let state = function click(){
    prompt("Enter Here")
  }
  return (
    <div>
      <button onClick={click}></button>
      <MyContext2.Provider value={state}>
        <Component3/>
          </MyContext2.Provider>
    </div>
  )
}

export default GrandChild
