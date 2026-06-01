import React, { createContext, useContext } from 'react'
import ContextChild1 from '../ContextApi1/ContextChild1'
export let myContext2=createContext()

const ContextApi2Parent = () => {
    let data="global data"
  return (
    <div>
      <h1>ContextApiParent1</h1>
      <myContext2.Provider value={data}>
        <ContextChild1/>
      </myContext2.Provider>
    </div>
  )
}

export default ContextApi2Parent
